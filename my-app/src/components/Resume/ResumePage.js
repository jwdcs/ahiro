import React, { useState } from 'react';
import { Box, Stepper, Step, StepLabel, Typography, Button, Paper, Grid } from '@mui/material';
import ResumeUpload from './ResumeUpload';
import AIInteraction from './AIInteraction';
import Feedback from './Feedback';

const steps = ['Upload Resume', 'AI Interaction', 'Feedback'];

const ResumePage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [resumeFile, setResumeFile] = useState(null);
  const [feedback, setFeedback] = useState([]);

  const handleResumeUpload = (file) => {
    setResumeFile(file);
    // Prepare form data
    const formData = new FormData();
    formData.append('resume', file);
  
    // Send file to backend
    fetch('http://127.0.0.1:5000/api/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to upload resume.');
        }
        return response.json();
      })
      .then((data) => {
        setFeedback(data.suggestions);
        setActiveStep(2); // Move to feedback step
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error (e.g., display message to the user)
      });
  };
  

  const handleFeedbackSubmit = (response) => {
    // Simulate AI feedback interaction
    const generatedFeedback = [
      'Consider adding more quantifiable achievements.',
      'Your skill section could benefit from clearer categorization.',
    ];
    setFeedback(generatedFeedback);
    setActiveStep(2); // Move to feedback step
  };

  return (
    <Box sx={{ width: '100%', mt: 4 }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ mt: 4 }}>
        {activeStep === 0 && (
          <Paper elevation={4} sx={{ p: 4, mb: 2 }}>
            <Typography variant="h5" gutterBottom>
              Step 1: Upload Your Resume
            </Typography>
            <Typography variant="body1" sx={{ color: '#777', mb: 2 }}>
              Supported formats: PDF, DOCX, TXT (max size: 5MB)
            </Typography>
            <ResumeUpload onUpload={handleResumeUpload} />
          </Paper>
        )}

        {activeStep === 1 && (
          <Paper elevation={4} sx={{ p: 4, mb: 2 }}>
            <Typography variant="h5" gutterBottom>
              Step 2: Let AI Review Your Resume
            </Typography>
            <Typography variant="body1" sx={{ color: '#777', mb: 2 }}>
              Answer a few questions to help AI give better feedback.
            </Typography>
            <AIInteraction onFeedbackSubmit={handleFeedbackSubmit} />
          </Paper>
        )}

        {activeStep === 2 && (
          <Paper elevation={4} sx={{ p: 4, mb: 2 }}>
            <Typography variant="h5" gutterBottom>
              Step 3: Review AI Feedback
            </Typography>
            <Feedback feedback={feedback} />
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              onClick={() => alert('Download your enhanced resume!')}
            >
              Download Enhanced Resume
            </Button>
          </Paper>
        )}

        {activeStep < 2 && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Button
              variant="contained"
              disabled={activeStep === 0}
              onClick={() => setActiveStep(activeStep - 1)}
              sx={{ mr: 2 }}
            >
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setActiveStep(activeStep + 1)}
              disabled={resumeFile == null}
            >
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ResumePage;
