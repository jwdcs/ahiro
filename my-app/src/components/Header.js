import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Button, IconButton, Avatar, Menu, MenuItem } from '@mui/material/'
import { styled } from '@mui/material/styles';

const StyledLogoText = styled('span')(() => ({
    fontSize: '36px',
    fontWeight: 'bold',
    display: 'inline-block',
    verticalAlign: 'middle',
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


const StyledButton = styled(Button)(({ theme }) => ({
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'inherit',
    textTransform: 'none',
    position: 'relative',
    '&:hover': {
        '&::after': {
            content: '""',
            position: 'absolute',
            left: 0,
            bottom: -2,
            width: '100%',
            height: '2px',
            backgroundColor: '#60B1F3',
        },
    },
}));

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
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

    return (
        <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
            <Toolbar>
                <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
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

                <StyledButton>About</StyledButton>

                <IconButton onClick={handleMenuClick} sx={{ ml: 2 }}>
                    <Avatar alt="Profile" />
                </IconButton>

                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                >
                    <MenuItem>Profile</MenuItem>
                    <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
