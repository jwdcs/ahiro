import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled, keyframes } from '@mui/material/styles';

const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blinkCaret = keyframes`
  from, to { border-color: transparent; }
  50% { border-color: black; }
`;

const TypingEffect = styled('span')(({ theme }) => ({
    fontSize: '16px',
    color: '#FFFFFF',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    borderRight: '3px solid',
    width: '0',
    display: 'inline-block',
    animation: `${typing} 2s steps(20, end) forwards, ${blinkCaret} 0.75s step-end infinite`,
}));

const StyledLogoText = styled('span')(() => ({
    fontSize: '24px',
    fontWeight: 'bold',
    display: 'inline-block',
    verticalAlign: 'middle',
}));

const AhText = styled('span')(() => ({
    color: '#60B1F3', // blue
}));

const IText = styled('span')(() => ({
    color: '#FFFFFF', // white
}));

const RoText = styled('span')(() => ({
    color: '#FFF594', // yellowish color
}));

const ClickableBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    textTransform: 'none',
    padding: 0,
    color: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer',
    position: 'relative',
    '&:hover': {
        textDecoration: 'underline',
    },
}));

const HoverTextBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '60px', // adjust this depending on your layout
    left: '100%', // ensures it shows to the right of the ClickableBox
    color: '#FFF',
    backgroundColor: '#333',
    padding: '5px 10px',
    borderRadius: '4px',
    opacity: 0, // Start as invisible
    transition: 'opacity 0.3s ease-in-out', // Smooth transition for hover
    whiteSpace: 'nowrap',
    '&.visible': {
        opacity: 1, // Become visible on hover
    }
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
                    <ClickableBox onClick={() => console.log("Logo or AHiro clicked!")}>
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

                        {/* Hoverable typing text */}
                        <HoverTextBox>
                            <TypingEffect>— start a new session</TypingEffect>
                        </HoverTextBox>
                    </ClickableBox>
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
