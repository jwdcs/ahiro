import React from 'react';

const Feedback = ({ feedback }) => {
  return (
    <div>
      <h2>AI Feedback</h2>
      <ul>
        {feedback.map((tip, idx) => (
          <li key={idx}>{tip}</li>
        ))}
      </ul>
    </div>
  );
};

export default Feedback;
