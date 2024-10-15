import React from 'react';

const ResumeSummary = ({ summary }) => {
  return (
    <div>
      <h2>Resume Summary</h2>
      <p><strong>Name:</strong> {summary.name}</p>
      <h3>Experience</h3>
      <ul>
        {summary.experience.map((exp, idx) => (
          <li key={idx}>{exp}</li>
        ))}
      </ul>
      <h3>Education</h3>
      <ul>
        {summary.education.map((edu, idx) => (
          <li key={idx}>{edu}</li>
        ))}
      </ul>
      <h3>Skills</h3>
      <ul>
        {summary.skills.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResumeSummary;
