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

const HomePageContainer = styled(Box)(({ theme }) => ({
    maxHeight: '91vh',
    backgroundColor: '#121212',
    color: '#ffffff',
    padding: theme.spacing(4),
    boxSizing: 'border-box',
}));

const Section = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(6),
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
    color: '#60B1F3',
    transition: 'transform 0.3s, color 0.3s',
    '&:hover': {
        color: '#ffffff',
        transform: 'scale(1.1)',
    },
}));

const HomePage = () => {
    return (
        <HomePageContainer>
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
                    WELCOME TO AHIRO!
                </Typography>
            </motion.div>

            <Section>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <Typography
                        variant="h6"
                        align="center"
                        sx={{
                            maxWidth: '800px',
                            margin: '0 auto',
                            lineHeight: 1.6,
                        }}
                    >
                        At AHIRO, we empower job seekers with comprehensive tools and personalized assistance to navigate the competitive job market. Whether you're preparing for interviews, polishing your resume, or seeking tailored job-search strategies powered by AI, AHIRO is your trusted partner in achieving career success.
                    </Typography>
                </motion.div>
            </Section>

            <Section>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} md={4}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Paper
                                elevation={3}
                                sx={{
                                    padding: 3,
                                    backgroundColor: '#1e1e1e',
                                    borderRadius: '12px',
                                    textAlign: 'center',
                                }}
                            >
                                <Typography variant="h5" gutterBottom>
                                    Interview Prep
                                </Typography>
                                <Typography variant="body1">
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
                                elevation={3}
                                sx={{
                                    padding: 3,
                                    backgroundColor: '#1e1e1e',
                                    borderRadius: '12px',
                                    textAlign: 'center',
                                }}
                            >
                                <Typography variant="h5" gutterBottom>
                                    Resume Polishing
                                </Typography>
                                <Typography variant="body1">
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
                                elevation={3}
                                sx={{
                                    padding: 3,
                                    backgroundColor: '#1e1e1e',
                                    borderRadius: '12px',
                                    textAlign: 'center',
                                }}
                            >
                                <Typography variant="h5" gutterBottom>
                                    Job-Searching Assistance
                                </Typography>
                                <Typography variant="body1">
                                    Leverage AI-powered strategies to identify opportunities, optimize your applications, and track your job search progress.
                                </Typography>
                            </Paper>
                        </motion.div>
                    </Grid>
                </Grid>
            </Section>

            <Section>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    <Typography
                        variant="body1"
                        align="center"
                        sx={{
                            maxWidth: '800px',
                            margin: '0 auto',
                            lineHeight: 1.6,
                        }}
                    >
                        Developed by <strong>jwdcs</strong>, AHIRO is dedicated to bridging the gap between job seekers and their dream careers through innovative technology and personalized support.
                    </Typography>
                </motion.div>
            </Section>

            <Section>
                <Stack direction="row" spacing={4} justifyContent="center">
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
    );
};

export default HomePage;
