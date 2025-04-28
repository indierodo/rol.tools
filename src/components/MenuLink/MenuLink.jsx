import { Link } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import "./MenuLink.css"

export default function MenuLink(props) {
    return (
        <ListItem disablePadding>
            <ListItemButton>
                <ListItem>
                <Link to={props.to}>
                    { props.children }
                </Link>
                </ListItem>
            </ListItemButton>
        </ListItem>
    )
}