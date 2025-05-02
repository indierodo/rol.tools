import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled, useTheme } from '@mui/material/styles';
import HamburguerMenu from '../img/hamburger.png'


const CustomButton = styled(Button)(() => ({
    textTransform: 'none',
    color: 'white',
    fontFamily: "'Oldenburg', serif",
    transition: '0.2s',
    '&:hover': {
        color: 'yellow',
    },
}));

const pages = [
    { name: 'Tirar Dados', href: '/' },
    { name: 'NPCs', href: '/#/npc' },
    { name: 'Convertidor de Oro', href: '/#/currency-converter' },
    { name: 'Calcuradora de Velocidad', href: '/#/distance-converter' },
    { name: 'Reglas', href: '/#/rules' },
];

const Navbar = () => {
    const theme = useTheme();
    const isMediumOrSmaller = useMediaQuery(theme.breakpoints.down('md'));

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" sx={{bgcolor: '#280e3d', mb: '10px'}}>
            <Toolbar>
                {/* Logo o título */}
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="#inicio"
                    sx={{
                        mr: 2,
                        display: 'flex',
                        fontWeight: 700,
                        color: 'inherit',
                        textDecoration: 'none',
                        fontFamily: 'Oldenburg, serif',
                        '&:hover': {color: 'yellow'}
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
                            <img src={HamburguerMenu} style={{width: '24px'}} />
                        </IconButton>
                        <Menu
                            anchorEl={anchorElNav}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            slotProps={{
                                paper: {sx: {
                                backgroundColor: '#2c3e50', // Cambia este valor por el color que prefieras
                                borderRadius: '8px', // Agrega bordes redondeados si quieres
                                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)', // Agrega sombra para un efecto más destacado
                                },}
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        <a href={page.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                                            {page.name}
                                        </a>
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </>
                ) : (
                    // Botones para pantallas grandes
                    <Box sx={{ marginLeft: 'auto' }}>
                        {pages.map((page) => (
                            <CustomButton
                                key={page.name}
                                href={page.href}
                                sx={{ color: 'white' }}
                            >
                                {page.name}
                            </CustomButton>
                        ))}
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
