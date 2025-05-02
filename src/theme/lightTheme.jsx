import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#86460f',
        },
        secondary: {
            main: '#e3bd73',
        },
        background: {
            default: '#fafafa',
            paper: '#ffffff',
        },
        text: {
            primary: '#1a1a1a',
        },
    },
    typography: {
        fontFamily: "'Oldenburg', serif",
    },
});

export default lightTheme;
