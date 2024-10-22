
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { Card, CardMedia, CardActions, Box, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import { List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';


const theme = createTheme({
    components: {
        MuiCardMedia: {
            styleOverrides: {
                root: {
                    width: "50%",


                },
            },
        },
    },
});


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export default function ImgComponenForDetailsPage({MobileList}) {
       
    // console.log(MobileList);
   
    const [mobileData, setMobileData] = useState();

    const Dispatch = useDispatch();

    useEffect(() => {
        if(MobileList)
            {
                setMobileData(MobileList)
                   
            }

    }, [MobileList, Dispatch])
   
//   console.log(mobileData);

   





    return (
        <Box padding={0}  >
            <Grid container sx={{ xs: { display: 'flex', flexWrap: "wrap" }, justifyContent: "center", }} >
                 {mobileData&& mobileData.map((ele, index) => (

                    <Grid key={ele._id} item xs={12} padding={0} sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: { xs: "center", sm: "space-between" }, alignItems: { xs: "center" }, borderTop: "1px solid lightgrey" }}>
                        <Item square elevation={0} sx={{ position: "relative", justifyContent: { xs: "center" }, alignItems: { xs: "center" }, width: "180px" }} >
                            <CardActions disableSpacing    >
                                <IconButton aria-label="add to favorites" sx={{ position: "absolute", top: "-8px", right: "1px", color: "lightgrey" }}>
                                    <FavoriteIcon
                                        sx={{ width: { xs: "20px" } }}
                                    />
                                </IconButton>
                            </CardActions>
                            <Link to={`/Mobile/${ele._id}`} style={{ textDecoration: "none" }}>
                                <Card square elevation={0} sx={{ maxWidth: { xs: "150px" } }}>
                                    <ThemeProvider theme={theme}>
                                        <CardMedia className='xs-phone-width'
                                            component="img"
                                            sx={{ margin: { xs: 'auto', md: "none" }, width: "90%" }}
                                            image={`${ele.imgUrl[0].replace("http://", "https://")}`}
                                            alt="Paella dish"
                                        />
                                    </ThemeProvider>
                                </Card>
                            </Link>
                        </Item>
                        <Link to={`/Mobile/${ele._id}`} style={{ textDecoration: "none" }} >
                            <Item square elevation={0}  >
                                <Typography variant='h6' color={'black'} sx={{ padding: 0, margin: 0, textAlign:"left" }} >
                                    {`${ele.companyName} ${ele.modelName} (${ele.color} ${ele.internalStorage})`}
                                </Typography>
                                <List sx={{ padding: 0, marginTop: '15px' }} >
                                    <ListItem sx={{ padding: 0, margin: 0, display: 'list-item', listStyleType: 'disc', }}>
                                        <Typography variant='body2' color={"black"}>
                                            {`${ele.ram === "NA" ? '' : ele.ram} ${ele.ram !== "NA" ? "|" : ''}   ${ele.internalStorage && ele.internalStorage}`}
                                        </Typography>
                                    </ListItem>
                                </List>
                                <List sx={{ padding: 0, margin: 0 }}>
                                    <ListItem sx={{ padding: 0, margin: 0, display: 'list-item', listStyleType: 'disc', }}>
                                        <Typography variant='body2' color={"black"}>
                                            {`${ele.displaySize ? ele.displaySize : ''}  ${ele.displaySize ? "|" : ''}  ${ele.resolutionType ? ele.resolutionType : ''}`}
                                        </Typography>
                                    </ListItem>
                                </List>
                                <List sx={{ padding: 0, margin: 0 }}>
                                    <ListItem sx={{ padding: 0, margin: 0, display: 'list-item', listStyleType: 'disc', }}>
                                        <Typography variant='body2' color={"black"}>
                                            {`${ele.primaryCamera ? ele.primaryCamera : ''}  ${ele.primaryCamera ? "|" : ''}  ${ele.secondaryCamera ? ele.secondaryCamera : ''}`}
                                        </Typography>
                                    </ListItem>
                                </List>
                                <List sx={{ padding: 0, margin: 0 }}>
                                    <ListItem sx={{ padding: 0, margin: 0, display: 'list-item', listStyleType: 'disc', }}>
                                        <Typography variant='body2' color={"black"}>
                                            {`${ele.batteryCapacity ? `${ele.batteryCapacity} Battery` : ''}`}
                                        </Typography>
                                    </ListItem>
                                </List>
                                <List sx={{ padding: 0, margin: 0 }}>
                                    <ListItem sx={{ padding: 0, margin: 0, display: 'list-item', listStyleType: 'disc', }}>
                                        <Typography variant='body2' color={"black"}>
                                            {`${ele.warranty ? ele.warranty : ''}`}
                                        </Typography>
                                    </ListItem>
                                </List>
                            </Item>
                        </Link>
                        <Link to={`/Mobile/${ele._id}`} style={{ textDecoration: "none" }}>
                            <Item square elevation={0}  >
                                <Typography variant='h4' sx={{ color: "black" }}>
                                    &#8377;0.0
                                </Typography>
                                &#8377;<Typography variant='span' sx={{ color: "green" }}><del>{ele.price}</del></Typography> <Typography variant='span' sx={{ color: "green" }}>100% off</Typography>
                            </Item>
                        </Link>
                    </Grid>
                ))} 
            </Grid>
        </Box>
    )
}