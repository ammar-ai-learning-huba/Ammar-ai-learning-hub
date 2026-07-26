exports.handler = async function(event, context) {
  // CORS allow
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    const body = JSON.parse(event.body);
    const userMessage = body.message;

    // Yahan hum simple AI reply denge. Baad me OpenAI/Gemini API lagayenge
    const aiReply = `Ammar AI: Aap ne kaha "${userMessage}". Main abhi seekh raha hun 😊`;

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ reply: aiReply })
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Kuch ghalat ho gaya' })
    };
  }
};
