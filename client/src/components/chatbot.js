import { useState, useEffect } from 'react';
import './chatbot.css';

const Chatbot = ({ question, setChatbotClicked, setChatbotInput }) => {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChatbotClosed = () => {
    setChatbotClicked(false);
    setChatbotInput("");
  };

  useEffect(() => {
    const callChatbot = async () => {
      setLoading(true);

      const prompt = `Our Risk Radar project analyzes city-level risks when deciding where to move. 
      It currently analyzes the cost of living, crime, local infrastructure, and natural disaster risks in Los Angeles, CA, Denver, CO, and Tampa, FL. 
      The user will be using this space to ask follow-up questions about certain risks within one of these cities. To the best of your ability, respond to the following question in a concise but informative way:
      ${question}`;

      try {
        const res = await fetch('/api/openai', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt })
        });
        const data = await res.json();
        setResponse(data.output_text || "No response received.");
      } catch (err) {
        console.error('Chatbot error:', err);
      } finally {
        setLoading(false);
      }
    };

    callChatbot();
  }, [question]);

  return (
    <div className="chatbot-response-box">
      <div className="chatbot-response-text">
        {loading ? <p>Loading response...</p> : <p>{response}</p>}
      </div>
      <button className="chatbot-close-button" onClick={handleChatbotClosed}>
        Close
      </button>
    </div>
  );
};

export default Chatbot;
