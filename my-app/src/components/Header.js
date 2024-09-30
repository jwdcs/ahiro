// Header.js
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
} from '@mui/material/';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

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

    const handleSignOut = async () => {
        try {
            // await logout();
            // navigate('/login');
        } catch (error) {
            console.error('Sign-out failed:', error);
        }
        handleMenuClose();
    };

    const menuItems = [
        {
            text: 'Profile',
            icon: <AccountCircleIcon fontSize="small" />,
            onClick: () => handleNavigation('/profile'),
            path: '/profile',
        },
        {
            text: 'About',
            icon: <InfoIcon fontSize="small" />,
            onClick: () => handleNavigation('/about'),
            path: '/about',
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
                <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
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
                                src="AHIRO.png"
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
                </Box>

                <Box>
                    <Tooltip title="Menu">
                        <IconButton
                            onClick={handleMenuClick}
                            sx={{ ml: 2 }}
                            aria-controls={Boolean(anchorEl) ? 'menu-appbar' : undefined}
                            aria-haspopup="true"
                            aria-expanded={Boolean(anchorEl) ? 'true' : undefined}
                        >
                            <MenuIcon sx={{ color: '#FFFFFF' }} />
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
                                mt: 4.0,
                                minWidth: 180,
                            },
                        }}
                    >
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
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
