import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { NavLink, Outlet } from 'react-router-dom';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Titlebar() {
    return (
        <>
            <Box sx={{ flexGrow: 1, overflow: 'auto', backgroundColor: 'white', padding: "2px", marginBottom:"10px"  }} className="gridRowScrollBar">
                <Grid container spacing={2} sx={{ display: 'flex', flexWrap: 'nowrap', justifyContent: { xs: 'flex-start', sm: 'space-evenly' }, alignItems: 'center', backgroundColor: 'white' }}>
                    <Grid item sm={'auto'}  >
                        <NavLink
                            to="/"
                            style={({ isActive }) => ({
                                textDecoration: 'none',
                            })}
                        >
                            {({ isActive }) => (
                                <Item
                                    square
                                    elevation={0}
                                    sx={{
                                        justifyContent: "center",
                                        borderBottom: isActive ? '2px solid blue' : null,
                                        color: isActive ? 'white' : null
                                    }}
                                >
                                    <Typography fontSize={18} sx={{color:"black"}}>
                                        Home
                                    </Typography>
                                </Item>
                            )}
                        </NavLink>
                    </Grid>
                    <Grid item sm={'auto'}  >
                        <Item
                            square
                            elevation={0}

                        >
                            <NavLink
                                to="/Grocery"
                                style={({ isActive }) => ({
                                    textDecoration: 'none',
                                })}
                            >
                                {({ isActive }) => (
                                    <Typography fontSize={18}  sx={{
                                        color:"black",
                                        justifyContent: "center",
                                        borderBottom: isActive ? '2px solid blue' : null,

                                    }}>
                                        Grocery
                                    </Typography>
                                )}
                            </NavLink>
                        </Item>
                    </Grid>
                    <Grid item sm={'auto'}>
                        <Item
                            square
                            elevation={0}

                        >
                            <NavLink
                                to="/Mobile"
                                style={({ isActive }) => ({
                                    textDecoration: 'none',
                                })}
                            >
                                {({ isActive }) => (
                                    <Typography fontSize={18} sx={{
                                        color:"black",
                                        justifyContent: "center",
                                        borderBottom: isActive ? '2px solid blue' : null,

                                    }}>
                                        Mobiles
                                    </Typography>
                                )}
                            </NavLink>
                        </Item>
                    </Grid>
                    <Grid item sm={'auto'}>

                        <Item
                            square
                            elevation={0}

                        >
                            <NavLink
                                to="/Fashion"
                                style={({ isActive }) => ({
                                    textDecoration: 'none',
                                })}
                            >
                                {({ isActive }) => (
                                    <Typography fontSize={18}  sx={{
                                        color:"black",
                                        justifyContent: "center",
                                        borderBottom: isActive ? '2px solid blue' : null,

                                    }}>
                                        Fashion
                                    </Typography>
                                )}
                            </NavLink>
                        </Item>
                    </Grid>
                    <Grid item sm={'auto'}>

                        <Item
                            square
                            elevation={0}

                        >
                            <NavLink
                                to="/Electronics"
                                style={({ isActive }) => ({
                                    textDecoration: 'none',
                                })}
                            >
                                {({ isActive }) => (
                                    <Typography fontSize={18} sx={{
                                        color:"black",
                                        justifyContent: "center",
                                        borderBottom: isActive ? '2px solid blue' : null,

                                    }}>
                                        Electronics
                                    </Typography>
                                )}
                            </NavLink>
                        </Item>
                    </Grid>
                    <Grid item sm={'auto'}>

                        <Item
                            square
                            elevation={0}

                        >
                            <NavLink
                                to="/Appliances"
                                style={({ isActive }) => ({
                                    textDecoration: 'none',
                                })}
                            >
                                {({ isActive }) => (
                                    <Typography fontSize={18}  sx={{
                                        color:"black",
                                        justifyContent: "center",
                                        borderBottom: isActive ? '2px solid blue' : null,

                                    }}>
                                        Appliances
                                    </Typography>
                                )}
                            </NavLink>
                        </Item>
                    </Grid>
                    <Grid item sm={'auto'}>

                        <Item
                            square
                            elevation={0}

                        >
                            <NavLink
                                to="/"
                                style={({ isActive }) => ({
                                    textDecoration: 'none',
                                })}
                            >
                                {({ isActive }) => (
                                    <Typography fontSize={18} sx={{
                                        color:"black",
                                        justifyContent: "center",
                                        borderBottom: isActive ? '2px solid blue' : null,

                                    }}>
                                        Home&nbsp;&&nbsp;Furniture
                                    </Typography>
                                )}
                            </NavLink>
                        </Item>
                    </Grid>

                </Grid>
            </Box>
            <Outlet />
        </>
    );
}

