import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import HamburguerMenu from '../img/hamburger.png';
import DrawerMenu from './DrawerMenu';
import { pages } from '../routes/pages';
import { CustomNavButton } from '../components/CustomElements/CustomNavButtons';

const Navbar = () => {
  const theme = useTheme();
  const isMediumOrSmaller = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = useState(false);

  const handleOpenNavMenu = () => setOpen(true);
  const handleCloseNavMenu = () => setOpen(false);

  return (
    <AppBar position="static" sx={{ bgcolor: theme.palette.secondary.main, mb: '10px' }}>
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: 'flex',
            fontWeight: 700,
            color: theme.palette.text.primary,
            textDecoration: 'none',
            fontFamily: 'Oldenburg, serif',
            '&:hover': { color: 'yellow' },
          }}
        >
          Rol.Tools
        </Typography>

        {/* Menú de hamburguesa para pantallas pequeñas */}
        {isMediumOrSmaller ? (
          <>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleOpenNavMenu}
              color="inherit"
              edge="start"
            >
              <img src={HamburguerMenu} style={{ width: '24px' }} />
            </IconButton>
            <DrawerMenu open={open} handleCloseNavMenu={handleCloseNavMenu} />
          </>
        ) : (
          // Botones para pantallas grandes
          <Box sx={{ marginLeft: 'auto' }}>
            {pages.map((page) => (
              <CustomNavButton
                key={page.name}
                href={page.href}
                sx={{ color: theme.palette.text.primary }}
              >
                {page.name}
              </CustomNavButton>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
