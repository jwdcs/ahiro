import React from 'react';

const ProgressBar = ({ step }) => {
  return (
    <div className="progress-bar">
      <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>Upload</div>
      <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>Review</div>
      <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>Feedback</div>
    </div>
  );
};

export default ProgressBar;
