import React, { useEffect, useState } from 'react';
import { styled, alpha, } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Applogo from '../../images/navbarImages/logo.png'
import Grid from '@mui/material/Grid';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link, NavLink, Outlet } from 'react-router-dom';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useDispatch, useSelector } from 'react-redux';
import { Actions } from '../../reducers/AuthReducer';




const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '46ch',
    },
    backgroundColor: ''
  },
}));


export default function SellersNavbar() {

 
   useSelector((state) => state.Auth.AuthUser);
  const checkToken = `${localStorage.getItem('token')}`;
   const Dispatch = useDispatch();


   
  const [localUser, setLocalUser] = useState()
  useEffect(()=>
    {
      if(checkToken)
        {
          setLocalUser(JSON.parse(localStorage.getItem('user')));
          console.log(JSON.parse(localStorage.getItem('user'))) 
        }

    },[checkToken])

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

 

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      sx={{ width: 'auto', padding: 0, margin: 0, height: 'auto', top: '30px', left: '25px' }}

    >
      {checkToken !== 'null' &&localUser&&localUser.usertype==='seller'&&
        <MenuItem onClick={handleMenuClose}><NavLink to={'/seller/dashboard'}>My DashBoard</NavLink></MenuItem>
      }
      {checkToken !== 'null' &&localUser&&localUser.usertype==='seller'&&
        <MenuItem onClick={handleMenuClose}><NavLink to={'/seller/productManagement'}>Product Management</NavLink></MenuItem>
      }
      {checkToken !== 'null' &&localUser&&localUser.usertype==='seller'&&
        <MenuItem onClick={handleMenuClose}><NavLink to={'/seller/orderManagement'}>Order Management</NavLink></MenuItem>
      }
        {checkToken==='null'&&
      <MenuItem onClick={handleMenuClose}><NavLink to={'/seller/signin'}>Sign In</NavLink></MenuItem>
      }
      {checkToken==='null'&&
      <MenuItem onClick={handleMenuClose}><NavLink to={'/seller/signup'}>Sign up</NavLink></MenuItem>
      }
      {checkToken !== 'null' &&
        <MenuItem onClick={()=>{Dispatch(Actions.Logout(), handleMenuClose())}}><NavLink to={'/seller/signin'}>Log Out</NavLink></MenuItem>
      }
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box >
      <AppBar position="sticky" sx={{ boxShadow: "none" }}>
        <Toolbar>
          <Grid container sx={{ flexGrow: 1, display: "flex", justifyContent: { xs: 'row' }, alignItems: "center" }}>
            <Grid item xs={0} sm={2} >
              <Item square elevation={0} sx={{ display: { xs: 'none', sm: "block", backgroundColor: "transparent" } }}>
              <Link to={'/'}>

                <img src={Applogo} style={{ width: '4rem' }} alt="App Logo" />

              </Link>
              </Item>
            </Grid>

            <Grid item sx={{ flexWrap: 'wrap', width: { xs: '60%' } }} sm={4} md={5} >
              <Item square elevation={0} sx={{ backgroundColor: "transparent" }}>

                <Search sx={{ color: "white" }} >
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} id="search-bar"
                    name="search-bar" />
                </Search>
              </Item>
            </Grid>
            <Grid item xs={2} sm={5} sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", }}>
              <Item square elevation={0} sx={{ display: { xs: 'block', sm: 'block', backgroundColor: "transparent", color: "white" } }}>
                <IconButton
                  size="medium"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                  <Typography variant="body2" sx={{ fontSize: '16px', display: { xs: 'none', sm: 'block' } }}>
                  {`${localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')).name:"Login"}`}
                  </Typography>
                  <KeyboardArrowDownIcon />
                </IconButton>
              </Item>


              <Item square elevation={0} sx={{ display: { justifyContent: "center", backgroundColor: "transparent", color: "white" } }}>

                <IconButton
                  size="large"
                  edge="end"
                  color="inherit"
                >
                    
                  <NavLink  to={'/buyer/signin'}  style={{ textDecoration: "none", display: "flex", flexDirection: 'row', justifyContent: "center", alignItems: "center", color: "white" }}>
                    <LocalMallIcon sx={{ fontSize: 25, mr: '3px' }} />
                    <Typography variant='body2' sx={{ fontSize: '16px', display: { xs: 'none', sm: "none", md: "block" } }} > 
                      Register as a Buyer
                    </Typography >
                  </NavLink>
                </IconButton>
              </Item>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}

      <Outlet />
    </Box>
  );
}
