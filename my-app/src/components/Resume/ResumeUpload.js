import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const ResumeUpload = ({ onUpload }) => {
  const [error, setError] = useState(null);
  const [file, setFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    const resumeFile = acceptedFiles[0];

    if (resumeFile.size > 5 * 1024 * 1024) { // 5MB size limit
      setError('File size exceeds 5MB limit.');
      return;
    }

    if (!['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'].includes(resumeFile.type)) {
      setError('Unsupported file type.');
      return;
    }

    setFile(resumeFile);
    onUpload(resumeFile);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps({ className: 'dropzone' })}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop your resume here, or click to select one (PDF, DOCX, TXT)</p>
      {error && <p className="error">{error}</p>}
      {file && <p>File selected: {file.name}</p>}
    </div>
  );
};

export default ResumeUpload;
