import { Button, Typography } from '@mui/material';
import React, { useState, useRef } from 'react';


const ResumeUpload = ({ onUpload }) => {
  const [error, setError] = useState(null);
  const [fileName, setFileName] = useState(null);
  const fileInputRef = useRef();

  const handleFileChange = (event) => {
    const resumeFile = event.target.files[0];

    if (!resumeFile) {
      return;
    }

    // Validate file size (max 5MB)
    if (resumeFile.size > 5 * 1024 * 1024) {
      setError('File size exceeds 5MB limit.');
      setFileName(null);
      return;
    }

    // Validate file type
    const allowedTypes = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/plain',
    ];

    if (!allowedTypes.includes(resumeFile.type)) {
      setError('Unsupported file type.');
      setFileName(null);
      return;
    }

    setError(null);
    setFileName(resumeFile.name);
    onUpload(resumeFile);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <input
        type="file"
        accept=".pdf,.docx,.txt"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <Button variant="contained" onClick={handleButtonClick}>
        Select Resume File
      </Button>
      {fileName && (
        <Typography variant="body1" sx={{ mt: 2 }}>
          File selected: {fileName}
        </Typography>
      )}
      {error && (
        <Typography variant="body2" color="error" sx={{ mt: 1 }}>
          {error}
        </Typography>
      )}
    </div>
  );
};

export default ResumeUpload;
