import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: 'rgba(250,250,250,0.8)',
        },
        text: {
            primary: 'rgba(250,250,250,0.8)',
        },
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

export default theme