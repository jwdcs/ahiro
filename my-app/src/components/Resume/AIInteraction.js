import React, { useState } from 'react';

const AIInteraction = ({ onFeedbackSubmit }) => {
  const [question] = useState('What is your career goal?');
  const [response, setResponse] = useState('');

  const handleSubmit = () => {
    onFeedbackSubmit(response);
    setResponse('');
  };

  return (
    <div>
      <h2>AI Interaction</h2>
      <p>{question}</p>
      <input 
        type="text" 
        value={response} 
        onChange={(e) => setResponse(e.target.value)} 
        placeholder="Enter your response here" 
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default AIInteraction;
