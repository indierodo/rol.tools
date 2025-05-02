import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#072cbd',
        },
        secondary: {
            main: '#280e3d',
        },
        background: {
            default: '#121212',
            paper: '#1e1e1e',
        },
        text: {
            primary: '#ffffff',
        },
    },
    typography: {
        fontFamily: "'Oldenburg', serif",
    },
    components: {
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: 'white',
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    color: 'white',
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(250,250,250,0.8)',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white',
                    },
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                icon: {
                    color: 'white',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    color: 'white',
                    borderColor: 'white',
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: 'white',
                },
            },
        },
    },
});

export default darkTheme;
