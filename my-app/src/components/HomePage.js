// src/components/HomePage.js
import React from 'react';
import {
    Box,
    Typography,
    Link,
    IconButton,
    Grid,
    Paper,
    Stack,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from 'framer-motion';
import Fade from '@mui/material/Fade';

const HomePageContainer = styled(Box)(({ theme }) => ({
    maxHeight: '90vh',
    color: '#ffffff',
    padding: theme.spacing(4),
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
}));

const Section = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(4),
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
    color: '#60B1F3',
    transition: 'transform 0.3s, color 0.3s',
    '&:hover': {
        color: '#ffffff',
        transform: 'scale(1.2)',
    },
}));

const HomePage = () => {
    return (
        <HomePageContainer>
            <Box>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Typography
                        variant="h3"
                        align="center"
                        gutterBottom
                        sx={{
                            fontWeight: 800,
                            textShadow: '3px 3px 6px rgba(0,0,0,0.7)',
                            letterSpacing: '2px',
                        }}
                    >
                        Welcome to AHIRO
                    </Typography>
                </motion.div>

                <Section>
                    <Fade in timeout={1000}>
                        <Typography
                            variant="h6"
                            align="center"
                            sx={{
                                maxWidth: '800px',
                                margin: '0 auto',
                                lineHeight: 1.8,
                                color: '#dddddd',
                            }}
                        >
                            At AHIRO, we empower job seekers with comprehensive tools and personalized assistance to navigate the competitive job market. Whether you're preparing for interviews, polishing your resume, or seeking tailored job-search strategies powered by AI, AHIRO is your trusted partner in achieving career success.
                        </Typography>
                    </Fade>
                </Section>

                <Section>
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} md={4}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Paper
                                    elevation={6}
                                    sx={{
                                        padding: 3,
                                        backgroundColor: '#2c2c2c',
                                        borderRadius: '16px',
                                        textAlign: 'center',
                                        transition: 'transform 0.3s, box-shadow 0.3s',
                                        '&:hover': {
                                            boxShadow: '0px 12px 24px rgba(0,0,0,0.3)',
                                        },
                                    }}
                                >
                                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, color: '#60B1F3' }}>
                                        Interview Prep
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#cccccc' }}>
                                        Master both behavioral and technical interviews with our tailored preparation tools, practice questions, and feedback mechanisms.
                                    </Typography>
                                </Paper>
                            </motion.div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Paper
                                    elevation={6}
                                    sx={{
                                        padding: 3,
                                        backgroundColor: '#2c2c2c',
                                        borderRadius: '16px',
                                        textAlign: 'center',
                                        transition: 'transform 0.3s, box-shadow 0.3s',
                                        '&:hover': {
                                            boxShadow: '0px 12px 24px rgba(0,0,0,0.3)',
                                        },
                                    }}
                                >
                                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, color: '#60B1F3' }}>
                                        Resume Polishing
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#cccccc' }}>
                                        Enhance your resume with expert feedback, formatting tools, and keyword optimization to stand out to recruiters.
                                    </Typography>
                                </Paper>
                            </motion.div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Paper
                                    elevation={6}
                                    sx={{
                                        padding: 3,
                                        backgroundColor: '#2c2c2c',
                                        borderRadius: '16px',
                                        textAlign: 'center',
                                        transition: 'transform 0.3s, box-shadow 0.3s',
                                        '&:hover': {
                                            boxShadow: '0px 12px 24px rgba(0,0,0,0.3)',
                                        },
                                    }}
                                >
                                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, color: '#60B1F3' }}>
                                        Job-Searching Assistance
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#cccccc' }}>
                                        Leverage AI-powered strategies to identify opportunities, optimize your applications, and track your job search progress.
                                    </Typography>
                                </Paper>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Section>

                <Section>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2, duration: 1 }}
                    >
                        <Typography
                            variant="body1"
                            align="center"
                            sx={{
                                maxWidth: '800px',
                                margin: '0 auto',
                                lineHeight: 1.8,
                                color: '#dddddd',
                            }}
                        >
                            Developed by <strong>jwdcs</strong>, AHIRO is dedicated to bridging the gap between job seekers and their dream careers through innovative technology and personalized support.
                        </Typography>
                    </motion.div>
                </Section>
            </Box>

            <Section>
                <Stack direction="row" spacing={6} justifyContent="center">
                    <Link href="https://www.linkedin.com/in/james-de-chutkowski/" target="_blank" rel="noopener" aria-label="LinkedIn">
                        <SocialIconButton>
                            <LinkedInIcon fontSize="large" />
                        </SocialIconButton>
                    </Link>
                    <Link href="https://github.com/jwdcs" target="_blank" rel="noopener" aria-label="GitHub">
                        <SocialIconButton>
                            <GitHubIcon fontSize="large" />
                        </SocialIconButton>
                    </Link>
                </Stack>
            </Section>
        </HomePageContainer>
    )
};

export default HomePage;
