// This is a serverless function (e.g., for Vercel or Netlify).
// It must be placed in a folder named 'api' in your project root.
// File path: /api/generate.js

export default async function handler(request, response) {
  // 1. Check for the correct request method
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method Not Allowed' });
  }

  // 2. Get the prompt from the request body
  const { prompt } = request.body;
  if (!prompt) {
    return response.status(400).json({ error: 'Prompt is required' });
  }

  // 3. Get the secret API key from environment variables
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return response.status(500).json({ error: 'API key not configured on the server' });
  }

  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;

  // 4. Set up the payload for the Google Gemini API
  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    safetySettings: [
      { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_NONE' },
      { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_NONE' },
      { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_NONE' },
      { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' },
    ],
  };

  try {
    // 5. Make the fetch request to the actual Google API
    const googleApiResponse = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!googleApiResponse.ok) {
      const errorBody = await googleApiResponse.json();
      console.error('Google API Error:', errorBody);
      return response.status(googleApiResponse.status).json({ error: errorBody.error.message });
    }

    const result = await googleApiResponse.json();

    // 6. Send the successful response back to the frontend
    const text = result.candidates?.[0]?.content?.parts?.[0]?.text;
    if (text) {
      return response.status(200).json({ text: text });
    } else {
      return response.status(500).json({ error: 'API returned an unexpected response structure.' });
    }

  } catch (error) {
    console.error('Internal Server Error:', error);
    return response.status(500).json({ error: 'An internal server error occurred.' });
  }
}
