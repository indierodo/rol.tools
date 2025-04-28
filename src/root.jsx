import Navbar from './Navbar/Navbar';
import { Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline';

const fontFamily1 = '"Lato", sans-serif'

const theme = createTheme({
  typography: {
    fontFamily: fontFamily1,
    body1: {
      fontFamily: fontFamily1
    }
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#1a1209',
    },
    secondary: {
      main: '#402a17',
    },
    background: {
      default: '#9c7e54',
      paper: '#d8b572',
    },
  },
});

const Root = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
        <Navbar />
        <Container style={{ padding: 24, marginTop: 12 }}>
          <Outlet />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Root;