import React, { useState } from 'react';
import './HuggingFaceChatbot.css';

const HuggingFaceChatbot = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  let requestCount = 0;
  const MAX_REQUESTS = 10; 
  const TIME_FRAME = 60000; 

  const fetchHuggingFaceResponse = async (text) => {
    if (requestCount >= MAX_REQUESTS) {
      setError('API usage limit exceeded. Please wait and try again.');
      return;
    }

    setLoading(true); 
    setError(''); 

    try {
      const apiResponse = await fetch(
        'https://api-inference.huggingface.co/models/gpt-neo-2.7B',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_HUGGINGFACE_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ inputs: text }),
        }
      );

      if (!apiResponse.ok) {
        if (apiResponse.status === 429) { 
          setError('Rate limit exceeded. Please try again later.');
          return;
        }
        throw new Error('Network response was not ok: ' + apiResponse.statusText);
      }

      const result = await apiResponse.json();
      setResponse(result.generated_text || 'Sorry, there was an error.');

      requestCount++; 

      // Reset the request count after the TIME_FRAME
      setTimeout(() => {
        requestCount--;
      }, TIME_FRAME);
    } catch (error) {
      console.error('Error fetching response:', error);
      setError('Sorry, there was an error. Please try again later.');
    } finally {
      setLoading(false); 
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) { 
      fetchHuggingFaceResponse(input);
      setInput(''); 
    } else {
      setError('Please enter a question.');
    }
  };

  return (
    <div className="chatbot-container">
      <h2>Chat with our AI</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="chatbot-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
          disabled={loading} 
        />
        <button type="submit" className="chatbot-button" disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>
      {error && <p className="chatbot-error">{error}</p>} 
      {response && !loading && <p className="chatbot-response">Response: {response}</p>}
    </div>
  );
};

export default HuggingFaceChatbot;
