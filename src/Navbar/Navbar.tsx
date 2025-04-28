import React from 'react';

import './Navbar.scss';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import MenuLink from '../components/MenuLink/MenuLink';

export default function MenuAppBar() {
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <MenuLink to='character-sheet'>Character Sheet</MenuLink>
        <MenuLink to='dice'>Throw Dice</MenuLink>
        <MenuLink to='npc'>NPC tracker</MenuLink>
        <MenuLink to='currency-converter'>Currency Converter</MenuLink>
        <MenuLink to='rules'>Rules</MenuLink>
      </List>
    </Box>
  );

  const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <span className='logo'>rol.tools</span>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
