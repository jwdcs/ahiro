// src/components/NotFound.jsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';


const NotFoundContainer = styled(Box)(({ theme }) => ({
    minHeight: '91vh',
    backgroundColor: '#121212',
    color: '#ffffff',
    padding: theme.spacing(4),
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}));

const NotFound = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <NotFoundContainer>
            <ErrorOutlineIcon sx={{ fontSize: 80, color: '#60B1F3', }} />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Typography
                    variant="h3"
                    align="center"
                    gutterBottom
                    sx={{
                        fontWeight: 'bold',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    }}
                >
                    404 - Page Not Found
                </Typography>
                <Typography variant="body1" align="center" sx={{ mt: 2 }}>
                    Oops! The page you're looking for doesn't exist.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleGoHome}
                    >
                        Go to Home
                    </Button>
                </Box>
            </motion.div>
        </NotFoundContainer>
    );
};

export default NotFound;
