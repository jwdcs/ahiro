import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

const Feedback = ({ feedback }) => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        AI Feedback
      </Typography>
      <List>
        {feedback.map((tip, idx) => (
          <ListItem key={idx} alignItems="flex-start">
            <ListItemText primary={tip} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Feedback;
