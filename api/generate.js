// This is a serverless function with improved error handling.
// File path: /api/generate.js

export default async function handler(request, res) { // Renamed 'response' to 'res'
  if (request.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { prompt } = request.body;
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'API key not configured on the server.' });
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
      // Use googleApiResponse.status for the actual status code from Google API
      // But send a 500 error for the Netlify function response, as it's an internal server error due to external API failure.
      return res.status(500).json({ error: errorBody.error.message || 'Failed to fetch from Google API' });
    }

    const result = await googleApiResponse.json();

    // **NEW, IMPROVED CHECKING**
    // First, check if the response was blocked by safety filters.
    if (!result.candidates || result.candidates.length === 0) {
      if (result.promptFeedback && result.promptFeedback.blockReason) {
        console.warn(`Request blocked by Google's safety filters. Reason: ${result.promptFeedback.blockReason}`);
        return res.status(400).json({ error: `The request was blocked by the API's safety filters. Please try a different prompt.` });
      } else {
        console.error("API response was successful but contained no candidates.", result);
        return res.status(500).json({ error: 'API returned an empty or invalid response.' });
      }
    }

    // If we have candidates, get the text.
    const text = result.candidates[0]?.content?.parts?.[0]?.text;

    if (text) {
      return res.status(200).json({ text: text });
    } else {
      console.error("API response had candidates but no text.", result);
      return res.status(500).json({ error: 'API returned an unexpected response structure.' });
    }

  } catch (error) {
    console.error("An error occurred in the serverless function:", error);
    return res.status(500).json({ error: error.message || 'An internal server error occurred.' });
  }
}
