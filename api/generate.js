// This is a serverless function with added debugging logs.
// File path: /api/generate.js

export default async function handler(request, response) {
  // Log 1: Check if the function was triggered
  console.log(`Function invoked. Request method: ${request.method}`);

  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { prompt } = request.body;
    
    // Log 2: Check if the prompt was received from the frontend
    console.log(`Received prompt: "${prompt}"`);
    if (!prompt) {
      console.error("Error: Prompt is missing from the request body.");
      return response.status(400).json({ error: 'Prompt is required' });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    // Log 3: Check if the API key is accessible on the server
    if (apiKey) {
      console.log("Successfully loaded GEMINI_API_KEY from environment variables.");
    } else {
      console.error("CRITICAL ERROR: GEMINI_API_KEY is not defined in the server environment!");
      return response.status(500).json({ error: 'API key not configured on the server.' });
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

    // Log 4: About to make the external API call
    console.log("Making fetch request to Google Gemini API...");
    const googleApiResponse = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    // Log 5: Log the response status from Google
    console.log(`Google API response status: ${googleApiResponse.status}`);

    if (!googleApiResponse.ok) {
      const errorBody = await googleApiResponse.json();
      console.error('Google API Error Response:', errorBody);
      throw new Error(errorBody.error.message || 'Failed to fetch from Google API');
    }

    const result = await googleApiResponse.json();
    const text = result.candidates?.[0]?.content?.parts?.[0]?.text;

    if (text) {
      // Log 6: Successfully got text, sending it back to frontend
      console.log("Successfully received text from API. Sending response to client.");
      return response.status(200).json({ text: text });
    } else {
      console.error("API response was successful but contained no text.", result);
      return response.status(500).json({ error: 'API returned an empty or invalid response.' });
    }

  } catch (error) {
    // Log 7: Catch any errors that occurred during the process
    console.error("An error occurred in the serverless function:", error);
    return response.status(500).json({ error: error.message });
  }
}
