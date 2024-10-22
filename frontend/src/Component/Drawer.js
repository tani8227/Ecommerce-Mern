import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useDispatch } from 'react-redux';
import { Actions } from '../reducers/AuthReducer';
import { Link } from 'react-router-dom';









export default function TemporaryDrawer() {


    const [open, setOpen] = React.useState(false);
    const Dispatch = useDispatch();

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    const DrawerList = (
        <Box sx={{ width: '100%' }} role="presentation" onClick={toggleDrawer(false)}>
        <List sx={{ minWidth: '150px' }}>
            {['user', 'My Account', 'Cart', 'Orders', 'Logout', 'Sign Up', 'Sign In', 'Become a seller'].map((text, index) => (
                text === 'user' ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '10px', gap: '2px' }} key={text + index}>
                        <ListItem disablePadding>
                            {localStorage.getItem('user') && <AccountCircle />}
                            <ListItemText
                                primary={
                                    localStorage.getItem('user')
                                        ? JSON.parse(localStorage.getItem('user')).name
                                        : ''
                                }
                            />
                        </ListItem>
                    </Box>
                ) : text === 'Cart' ? (
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginLeft: '10px', width: '100%' }} key={text + index}>
                        <ListItem disablePadding>
                            <Link to={'/buyer/cartDetails'} style={{ textDecoration: "none", color: "black" }}>
                                <ListItemText
                                    primary={localStorage.getItem('user') ? text : ''}
                                />
                            </Link>
                        </ListItem>
                    </Box>
                ) : text === 'My Account' ? (
                    <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', marginLeft: '10px', width: '100%' }} key={text + index}>
                        <ListItem disablePadding>
                            <Link to={'/buyer/myprofile'} style={{ textDecoration: "none", color: "black" }}>
                                <ListItemText
                                    primary={localStorage.getItem('user') ? text : ''}
                                />
                            </Link>
                        </ListItem>
                    </Box>
                ) : text === 'Orders' ? (
                    <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', marginLeft: '10px', width: '100%' }} key={text + index}>
                        <ListItem disablePadding>
                            <Link to={'/buyer/orderDetails'} style={{ textDecoration: "none", color: "black" }}>
                                <ListItemText
                                    primary={localStorage.getItem('user') ? text : ''}
                                />
                            </Link>
                        </ListItem>
                    </Box>
                ) : text === 'Logout' ? (
                    <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', marginLeft: '10px', width: '100%' }} key={text + index}>
                        <ListItem disablePadding>
                            <Link to={'/'} style={{ textDecoration: "none", color: "black" }}>
                                <ListItemText
                                    onClick={() => { Dispatch(Actions.Logout()) }}
                                    primary={localStorage.getItem('user') ? text : ''}
                                />
                            </Link>
                        </ListItem>
                    </Box>
                ) : text === 'Sign Up' ? (
                    <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', marginLeft: '10px', width: '100%' }} key={text + index}>
                        <ListItem disablePadding>
                            <Link to={'/buyer/signup'} style={{ textDecoration: "none", color: "black" }}>
                                <ListItemText
                                    primary={!localStorage.getItem('user') ? 'Sign up' : ''}
                                />
                            </Link>
                        </ListItem>
                    </Box>
                ) : text === 'Sign In' ? (
                    <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', marginLeft: '10px', width: '100%' }} key={text + index}>
                        <ListItem disablePadding>
                            <Link to={'/buyer/signin'} style={{ textDecoration: "none", color: "black" }}>
                                <ListItemText
                                    primary={!localStorage.getItem('user') ? 'Sign in' : ''}
                                />
                            </Link>
                        </ListItem>
                    </Box>
                ) : text === 'Become a seller' ? (
                    <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', marginLeft: '10px', width: '100%' }} key={text + index}>
                        <ListItem disablePadding>
                            <Link to={'/seller/signin'} style={{ textDecoration: "none", color: "black" }}>
                                <ListItemText primary={text} />
                            </Link>
                        </ListItem>
                    </Box>
                ) : null
            ))}
        </List>
    </Box>
    );


    return (
        <>

            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer(true)}
                sx={{ display: { sm: 'none' } }}
            >
                <MenuIcon />

            </IconButton>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </>

    );
}

