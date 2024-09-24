import React, { useState } from 'react';
import { Box, Typography, styled } from '@mui/material';

// Styled component for hover effect with padding
const PopOutText = styled('span')(({ theme }) => ({
    display: 'inline-block',
    fontSize: '32px',
    fontWeight: 'bold',
    transition: 'transform 0.3s ease, opacity 0.3s ease',
    opacity: 0,
    transform: 'scale(0.8)', // Start small
    position: 'absolute', // Position relative to the hovered text
    top: 0,
    left: '105%', // Add padding between text
    paddingLeft: '10px', // Additional padding
}));

const CenteredText = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
    position: 'relative',
}));

const TextWithHoverEffect = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <CenteredText>
            <Typography
                variant="h4"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                sx={{ fontSize: '32px', position: 'relative' }}
            >
                Welcome
                <PopOutText
                    sx={{
                        transform: isHovered ? 'scale(1)' : 'scale(0.8)',
                        opacity: isHovered ? 1 : 0,
                    }}
                >
                    to the world of React!
                </PopOutText>
            </Typography>
        </CenteredText>
    );
};

export default TextWithHoverEffect;
