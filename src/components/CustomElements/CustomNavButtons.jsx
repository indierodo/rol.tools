// CustomButton.js
import { Button, ListItemButton } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomItemButton = styled(ListItemButton)(() => ({
    textTransform: 'none',
    color: 'white',
    fontFamily: "'Oldenburg', serif",
    transition: '0.2s',
    '&:hover': {
        color: 'yellow',
    },
}));

const CustomNavButton = styled(Button)(() => ({
    textTransform: 'none',
    color: 'white',
    fontFamily: "'Oldenburg', serif",
    transition: '0.2s',
    '&:hover': {
        color: 'yellow',
    },
}));

export {CustomItemButton, CustomNavButton};