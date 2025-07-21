// This is a serverless function with improved error handling.
// File path: /api/generate.js

export default async function handler(request) {
  // Helper function to create a Response object
  const createJsonResponse = (statusCode, data) => {
    return new Response(JSON.stringify(data), {
      status: statusCode,
      headers: { 'Content-Type': 'application/json' },
    });
  };

  if (request.method !== 'POST') {
    return createJsonResponse(405, { error: 'Method Not Allowed' });
  }

  try {
    let requestBody;
    try {
      requestBody = await request.json();
    } catch (e) {
      requestBody = {};
    }

    const { prompt } = requestBody;

    if (!prompt) {
      return createJsonResponse(400, { error: 'Prompt is required' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return createJsonResponse(500, { error: 'API key not configured on the server.' });
    }

    // *** CRITICAL CHANGE: Using an available model from your ListModels output ***
    // 'models/gemini-2.5-pro' is a good, capable text model from your list.
    // Other good options from your list: 'models/gemini-1.5-pro-002', 'models/gemini-1.5-flash', etc.
    const apiUrl = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-pro:generateContent?key=${apiKey}`;

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
      console.error("Google API Error Response from generateContent call:", errorBody);
      return createJsonResponse(googleApiResponse.status || 500, { error: errorBody.error?.message || 'Failed to fetch from Google API' });
    }

    const result = await googleApiResponse.json();

    if (!result.candidates || result.candidates.length === 0) {
      if (result.promptFeedback && result.promptFeedback.blockReason) {
        console.warn(`Request blocked by Google's safety filters. Reason: ${result.promptFeedback.blockReason}`);
        return createJsonResponse(400, { error: `The request was blocked by the API's safety filters. Please try a different prompt.` });
      } else {
        console.error("API response was successful but contained no candidates.", result);
        return createJsonResponse(500, { error: 'API returned an empty or invalid response.' });
      }
    }

    const text = result.candidates[0]?.content?.parts?.[0]?.text;

    if (text) {
      return createJsonResponse(200, { text: text });
    } else {
      console.error("API response had candidates but no text.", result);
      return createJsonResponse(500, { error: 'API returned an unexpected response structure.' });
    }

  } catch (error) {
    console.error("An error occurred in the serverless function:", error);
    return createJsonResponse(500, { error: error.message || 'An internal server error occurred.' });
  }
}
