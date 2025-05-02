// context/ThemeContext.js
import { createContext, useContext, useState, useMemo } from 'react';
import { ThemeProvider } from '@mui/material';
import PropTypes from 'prop-types';
import { themes } from '../theme';

const ThemeModeContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useThemeMode = () => useContext(ThemeModeContext);

export const ThemeModeProvider = ({ children }) => {
    const [mode, setMode] = useState('dark');

    const toggleTheme = () => {
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    const setTheme = (mode) => {
        setMode(mode)
    }

    const value = useMemo(() => ({ mode, toggleTheme, setTheme }), [mode]);

    return (
        <ThemeModeContext.Provider value={value}>
            <ThemeProvider theme={themes[mode]}>
                {/* <CssBaseline />  <--- Aplica Estilos Globales que MUI recomienda para prevenir bugs, pero que rompen los boxes de las tumbas */}
                {children}
            </ThemeProvider>
        </ThemeModeContext.Provider>
    );
};
ThemeModeProvider.propTypes={
    children: PropTypes.any.isRequired
}
