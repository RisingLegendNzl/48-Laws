// This is a serverless function with improved error handling.
// File path: /api/generate.js

export default async function handler(request) { // Removed 'res' parameter for explicit return
  if (request.method !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
      headers: { 'Content-Type': 'application/json' },
    };
  }

  try {
    const { prompt } = request.body;
    if (!prompt) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Prompt is required' }),
        headers: { 'Content-Type': 'application/json' },
      };
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'API key not configured on the server.' }),
        headers: { 'Content-Type': 'application/json' },
      };
    }

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;

    const payload = {
      contents: [{ parts: [{ text: prompt }] }],
      safetySettings: [
        { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_NONE' },
        { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_NONE' },
        { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_NONE' },
        { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' },
      ],
    };

    const googleApiResponse = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!googleApiResponse.ok) {
      const errorBody = await googleApiResponse.json();
      console.error("Google API Error Response:", errorBody); // Log the actual error from Google API
      return {
        statusCode: googleApiResponse.status || 500, // Use Google API status if available, else 500
        body: JSON.stringify({ error: errorBody.error?.message || 'Failed to fetch from Google API' }),
        headers: { 'Content-Type': 'application/json' },
      };
    }

    const result = await googleApiResponse.json();

    // **NEW, IMPROVED CHECKING**
    // First, check if the response was blocked by safety filters.
    if (!result.candidates || result.candidates.length === 0) {
      if (result.promptFeedback && result.promptFeedback.blockReason) {
        console.warn(`Request blocked by Google's safety filters. Reason: ${result.promptFeedback.blockReason}`);
        return {
          statusCode: 400,
          body: JSON.stringify({ error: `The request was blocked by the API's safety filters. Please try a different prompt.` }),
          headers: { 'Content-Type': 'application/json' },
        };
      } else {
        console.error("API response was successful but contained no candidates.", result);
        return {
          statusCode: 500,
          body: JSON.stringify({ error: 'API returned an empty or invalid response.' }),
          headers: { 'Content-Type': 'application/json' },
        };
      }
    }

    // If we have candidates, get the text.
    const text = result.candidates[0]?.content?.parts?.[0]?.text;

    if (text) {
      return {
        statusCode: 200,
        body: JSON.stringify({ text: text }),
        headers: { 'Content-Type': 'application/json' },
      };
    } else {
      console.error("API response had candidates but no text.", result);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'API returned an unexpected response structure.' }),
        headers: { 'Content-Type': 'application/json' },
      };
    }

  } catch (error) {
    console.error("An error occurred in the serverless function:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message || 'An internal server error occurred.' }),
      headers: { 'Content-Type': 'application/json' },
    };
  }
}
