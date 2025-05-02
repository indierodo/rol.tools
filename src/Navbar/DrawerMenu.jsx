import { Drawer, Box, List } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import {CustomItemButton} from '../components/CustomElements/CustomNavButtons';
import { pages } from '../routes/pages';

const DrawerMenu = ({ open, handleCloseNavMenu }) => {
    const theme = useTheme();
    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={handleCloseNavMenu}>
            <List>
                {pages.map((page) => (
                    <CustomItemButton
                        key={page.name}
                        href={page.href}
                        component="a"
                        sx={{ color: theme.palette.text.primary }}
                    >
                        {page.name}
                    </CustomItemButton>
                ))}
            </List>
        </Box>
    );

    return (
        <Drawer
            open={open}
            onClose={handleCloseNavMenu}
            slotProps={{
                paper: {
                    sx: {
                        backgroundColor: alpha(theme.palette.secondary.main, 0.8),
                        borderRadius: '8px',
                        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
                    },
                },
            }}
        >
            {DrawerList}
        </Drawer>
    );
};

DrawerMenu.propTypes = {
    open: PropTypes.bool.isRequired,
    handleCloseNavMenu: PropTypes.func.isRequired,
};



export default DrawerMenu;