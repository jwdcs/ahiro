// src/components/Header.js
import React, { useState } from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Menu,
    MenuItem,
    Typography,
    Tooltip,
    useMediaQuery,
    useTheme,
    ListItemIcon,
    Button,
    Avatar,
    Grid,
} from '@mui/material/';
import { styled } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const StyledLogoText = styled('span')(() => ({
    fontSize: '32px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
}));

const AhText = styled('span')(() => ({
    color: '#60B1F3',
}));

const IText = styled('span')(() => ({
    color: '#FFFFFF',
}));

const RoText = styled('span')(() => ({
    color: '#FFF594',
}));

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const navigate = useNavigate();
    const location = useLocation();
    const { loginWithRedirect, logout, isAuthenticated, user, isLoading } = useAuth0();

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleNavigation = (path) => {
        navigate(path);
        handleMenuClose();
    };

    const handleSignOut = () => {
        logout({ returnTo: window.location.origin });
    };

    const menuItems = [
        {
            text: 'Profile',
            icon: <AccountCircleIcon fontSize="small" />,
            onClick: () => handleNavigation('/profile'),
            path: '/profile',
        },
        {
            text: 'Settings',
            icon: <SettingsIcon fontSize="small" />,
            onClick: () => handleNavigation('/settings'),
            path: '/settings',
        },
        {
            text: 'Sign Out',
            icon: <LogoutIcon fontSize="small" />,
            onClick: handleSignOut,
            path: '',
        },
    ];

    return (
        <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none' }}>
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid item xs={4} />

                    <Grid item xs={4} display="flex" justifyContent="center">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Box
                                sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                                onClick={() => navigate('/')}
                            >
                                <img
                                    src="/AHIRO.png"
                                    alt="Logo"
                                    style={{ height: '50px', marginRight: '8px' }}
                                />
                                <StyledLogoText>
                                    <AhText>AH</AhText>
                                    <IText>I</IText>
                                    <RoText>RO</RoText>
                                </StyledLogoText>
                            </Box>
                        </motion.div>
                    </Grid>

                    <Grid item xs={4} display="flex" justifyContent="flex-end">
                        {isLoading ? (
                            <Typography variant="body1" color="white">
                                Loading...
                            </Typography>
                        ) : isAuthenticated ? (
                            <>
                                <Tooltip title="Menu">
                                    <IconButton
                                        onClick={handleMenuClick}
                                        sx={{ ml: 2 }}
                                        aria-controls={Boolean(anchorEl) ? 'menu-appbar' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={Boolean(anchorEl) ? 'true' : undefined}
                                    >
                                        <Avatar alt={user.name} src={user.picture} />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleMenuClose}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    PaperProps={{
                                        sx: {
                                            backgroundColor: '#1e1e1e',
                                            color: '#FFFFFF',
                                            mt: 1.5,
                                            minWidth: 180,
                                            borderRadius: '8px',
                                        },
                                    }}
                                >
                                    <Box sx={{ padding: '12px 16px', display: 'flex', alignItems: 'center' }}>
                                        <Avatar alt={user.name} src={user.picture} sx={{ mr: 2 }} />
                                        <Typography variant="subtitle1">Hello, {user.name}</Typography>
                                    </Box>
                                    <Box sx={{ borderBottom: '1px solid #333', marginY: 1 }} />
                                    {menuItems.map((item) => (
                                        <MenuItem
                                            key={item.text}
                                            onClick={item.onClick}
                                            selected={item.path && location.pathname === item.path}
                                        >
                                            <ListItemIcon sx={{ color: '#60B1F3', minWidth: '40px' }}>
                                                {item.icon}
                                            </ListItemIcon>
                                            <Typography variant="inherit">{item.text}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </>
                        ) : (
                            <Button variant="contained" color="primary" onClick={() => loginWithRedirect()}>
                                Login
                            </Button>
                        )}
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
