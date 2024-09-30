// src/components/Profile.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const ProfileContainer = styled(Box)(({ theme }) => ({
    maxHeight: '91vh',
    backgroundColor: '#121212',
    color: '#ffffff',
    padding: theme.spacing(4),
    boxSizing: 'border-box',
}));

const Profile = () => {
    return (
        <ProfileContainer>
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
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
                    Your Profile
                </Typography>
            </motion.div>

            <Typography variant="body1" align="center" sx={{ mt: 4 }}>
                Welcome to your profile page! Here you can update your personal information, view your activity, and manage your settings.
            </Typography>
        </ProfileContainer>
    );
};

export default Profile;
