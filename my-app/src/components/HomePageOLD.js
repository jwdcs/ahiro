import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';
import DescriptionIcon from '@mui/icons-material/Description';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// Styled Button with desired hover and animation effects
const StyledButton = styled(Button)(({ theme }) => ({
    borderRadius: '25px',
    border: '2px solid #60B1F3',
    color: '#60B1F3',
    padding: '12px 40px',
    margin: theme.spacing(1),
    transition: 'all 0.3s ease',
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
    '&:hover': {
        backgroundColor: '#60B1F3',
        color: '#fff',
        transform: 'scale(1.05)',
        boxShadow: '0 4px 20px rgba(96, 177, 243, 0.3)',
    },
}));

const HomePage = () => {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, 0%, #121212 100%)',
                padding: 2,
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <Typography
                    variant="h3"
                    align="center"
                    sx={{
                        mb: 2,
                        fontWeight: 'bold',
                        color: '#ffffff',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    }}
                >
                    Welcome, let's start working on:
                </Typography>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <Typography
                    variant="h6"
                    align="center"
                    sx={{
                        mb: 4,
                        color: '#cccccc',
                        maxWidth: '600px',
                    }}
                >
                    Enhance your career prospects with our comprehensive tools for interview preparation, resume polishing, and personalized job-search assistance. Powered by AI.
                </Typography>
            </motion.div>
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
            >
                <Stack direction="row" spacing={2} justifyContent="center">
                    <StyledButton variant="outlined" startIcon={<WorkIcon />}>
                        Interview Prep
                    </StyledButton>
                    <StyledButton variant="outlined" startIcon={<DescriptionIcon />}>
                        Resume
                    </StyledButton>
                    <StyledButton variant="outlined" startIcon={<AccountCircleIcon />}>
                        Profile
                    </StyledButton>
                </Stack>
            </motion.div>
        </Box>
    );
};

export default HomePage;
