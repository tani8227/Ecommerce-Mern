
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Card, CardMedia, CardActions, Box, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
// import { Actions } from '../../reducers/AuthReducer';
// import { useDispatch, useSelector } from 'react-redux';
// import ImgPriceComponent from './ImgPriceCompoent'
// import ImgDescriptionComponent from './ImgDescriptionComponent';
import { List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';


const theme = createTheme({
    components: {
        MuiCardMedia: {
            styleOverrides: {
                root: {
                    width: "80%",


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


export default function LedTVImgComponentForDetailsPage(props) {

    console.log(props.fridgeList);

    const [fridgeData, setFridgeData] = useState();
 
    const [loader, setLoader]= useState(false);




    useEffect(() => {
        if (props.fridgeList && props.fridgeList.length > 0) {
            setFridgeData(props.fridgeList)
            setLoader(true);
        }

    }, [props.fridgeList])


    if(!loader)
        {
            return <h3>Loading...</h3>
        }

    return (

        <Box padding={0}   >
            <Grid container sx={{ xs: { display: 'flex', flexWrap: "nowrap" }, justifyContent: "center", backgroundColor: "white" }} >
                {fridgeData && fridgeData.map((ele, index) => (
                    <Grid key={ele._id} container sx={{ display: "flex", flexDirection: { xs: "column", sm: "row", flexWrap: "nowrap" }, justifyContent: { xs: "center", md: "space-between" }, alignItems: { xs: "center", sm: "self-start" }, borderTop: "1px solid lightgrey", padding: { xs: 1, sm: 0 } }} >
                        <Grid item xs={12} sm={3} padding={0} sx={{ display: "flex", border: { xs: "1px solid lightgrey", sm: "none" }, flexDirection: { xs: "column", sm: "row" }, justifyContent: { xs: "center", md: "space-evenly" }, alignItems: { xs: "flex-start" } }}>
                            <Item square elevation={0} sx={{ position: "relative", justifyContent: { xs: "center", }, alignItems: { xs: "center" }, width: "280px", }} >
                                <CardActions disableSpacing    >
                                    <IconButton aria-label="add to favorites" sx={{ position: "absolute", top: "-8px", right: "1px", color: "lightgrey" }}>
                                        <FavoriteIcon
                                            sx={{ width: { xs: "20px" } }}
                                        />
                                    </IconButton>
                                </CardActions>
                                <Link to={`/Appliances/${props.ProductCategory}/${ele._id}`} style={{ textDecoration: "none", }}>
                                    <Card square elevation={0} sx={{ width: { xs: "100%", } }}>
                                        <ThemeProvider theme={theme}>
                                            <CardMedia className='xs-phone-width'
                                                component="img"
                                                sx={{ margin: 'auto', maxWidth: "280px", maxHeight: "280px", objectFit: "contain" }}
                                                image={`${ele.imgUrl[0].replace("http://", "https://")}`}
                                                alt="Paella dish"
                                            />
                                        </ThemeProvider>
                                    </Card>
                                </Link>
                            </Item>
                        </Grid>
                        <Grid item xs={10} sm={5} padding={0} sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: { xs: "center", md: "space-evenly" }, alignItems: { xs: "center" }, }}>
                            <Link to={`/Appliances/${props.ProductCategory}/${ele._id}`} style={{ textDecoration: "none" }} >
                                <Item square elevation={0}  >
                                    <Typography variant='h6' color={'black'} sx={{ padding: 0, margin: 0, textAlign: "left" }} >
                                        {`${ele.companyName} ${ele.series} ${ele.displaySize} ${ele.hdTechnology} ${ele.screenType}`}
                                    </Typography>

                                    <Box sx={{ display: "flex" }}>
                                        <Typography
                                            variant="h4"
                                            sx={{ color: "black", padding: 0, margin: 0, textAlign: "left", display: { xs: "block", sm: "none" } }}
                                        >
                                            &#8377;0.0
                                            <sub >
                                                <Box component="del" sx={{ color: "green", fontSize: "14px" }}>
                                                    {ele.price}
                                                </Box>
                                                &nbsp;
                                                <Box component="span" sx={{ color: "green", fontSize: "13px" }}>
                                                    100% off
                                                </Box>
                                            </sub>
                                        </Typography>

                                    </Box>



                                    <List sx={{ padding: 0, marginTop: 2 }}>
                                        <ListItem sx={{ padding: 0, margin: 0, display: 'list-item', listStyleType: 'disc', }}>
                                            <Typography variant='body2' color={"black"}>
                                                {`${ele.series}`} {`${ele.hdTechnology}`}
                                            </Typography>
                                        </ListItem>
                                        <ListItem sx={{ padding: 0, margin: 0, display: 'list-item', listStyleType: 'disc', }}>
                                            <Typography variant='body2' color={"black"}>
                                                {`${ele.displaySize}`} {`${ele.screenType}`}
                                            </Typography>
                                        </ListItem>


                                        <ListItem sx={{ padding: 0, margin: 0, display: 'list-item', listStyleType: 'disc', }}>
                                            <Typography variant='body2' color={"black"}>
                                                {`${ele.warranty}`}
                                            </Typography>
                                        </ListItem>

                                    </List>
                                </Item>
                            </Link>
                        </Grid>
                        <Grid item xs={3} padding={0} sx={{ display: { xs: "none", sm: "flex" }, flexDirection: { xs: "column", sm: "row" }, justifyContent: { xs: "center", md: "space-evenly" }, alignItems: { xs: "center" } }}>
                            <Link to={`/Appliances/${props.ProductCategory}/${ele._id}`} style={{ textDecoration: "none" }}>
                                <Item square elevation={0} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", }} >
                                    <Typography variant='h4' sx={{ color: "black" }}>
                                        &#8377;0.0
                                    </Typography>
                                    <Box sx={{ display: "flex" }}>

                                        <Typography variant='span' sx={{ color: "#878787", fontSize: "14px", fontWeight: 400 }}>
                                            &#8377;
                                            <del>{ele.price}</del>
                                        </Typography>
                                        <Typography variant='span' sx={{ color: "green" }}>
                                            &nbsp; 100% off
                                        </Typography>
                                    </Box>
                                    <Typography variant='h4' sx={{ color: "black", fontSize: "12px", }}>
                                        Free delivery within a week
                                    </Typography>
                                </Item>
                            </Link>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )

    /*
    return (
    <Box padding={0}  >
    <Grid container sx={{ xs: { display: 'flex', flexWrap: "wrap" }, justifyContent: "center", }} >
                 {fridgeData&&fridgeData.map((ele, index) => (
                    <Grid container sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: { xs: "center", md: "space-between" }, alignItems: { xs: "center" }, borderTop: "1px solid lightgrey" }} >          
                    <Grid key={ele._id} item xs={3} padding={0} sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: { xs: "center", md: "space-evenly" }, alignItems: { xs: "center" }}}>
                    <Item square elevation={0} sx={{ position: "relative", justifyContent: { xs: "center" }, alignItems: { xs: "center" }, width: "200px" }} >
                    <CardActions disableSpacing    >
                    <IconButton aria-label="add to favorites" sx={{ position: "absolute", top: "-8px", right: "1px", color: "lightgrey" }}>
                    <FavoriteIcon
                    sx={{ width: { xs: "20px" } }}
                                    />
                                </IconButton>
                                </CardActions>
                                <Link to={`/Appliances/${props.ProductCategory}/${ele._id}`} style={{ textDecoration: "none" }}>
                                <Card square elevation={0} sx={{ maxWidth: { xs: "180px" } }}>
                                <ThemeProvider theme={theme}>
                                <CardMedia className='xs-phone-width'
                                component="img"
                                sx={{ margin: 'auto', width: "180px", height:"180px", objectFit:"contain" }}
                                image={`${ele.imgUrl[0]}`}
                                alt="Paella dish"
                                />
                                </ThemeProvider>
                                </Card>
                                </Link>
                                </Item>
                                </Grid>
                                <Grid key={ele._id} item xs={5} padding={0} sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: { xs: "center", md: "space-evenly" }, alignItems: { xs: "center" }, }}>
                        <Link to={`/Appliances/${props.ProductCategory}/${ele._id}`} style={{ textDecoration: "none" }} >
                        <Item square elevation={0}  >
                        <Typography variant='h6' color={'black'} sx={{ padding: 0, margin: 0, textAlign:"left" }} >
                                   {`${ele.companyName} ${ele.series} ${ele.displaySize} ${ele.hdTechnology} ${ele.screenType}`}
                                </Typography>
                                
                                
                                <List sx={{ padding: 0, marginTop: 2 }}>
                                <ListItem sx={{ padding: 0, margin: 0, display: 'list-item', listStyleType: 'disc', }}>
                                <Typography variant='body2' color={"black"}>
                                {`${ele.series}`} {`${ele.hdTechnology}`} 
                                </Typography>
                                </ListItem>
                                <ListItem sx={{ padding: 0, margin: 0, display: 'list-item', listStyleType: 'disc', }}>
                                        <Typography variant='body2' color={"black"}>
                                        {`${ele.displaySize}`} {`${ele.screenType}`}
                                        </Typography>
                                        </ListItem>
                                        
                                        <ListItem sx={{ padding: 0, margin: 0, display: 'list-item', listStyleType: 'disc', }}>
                                        <Typography variant='body2' color={"black"}>
                                        {`${ele.launchYear?`Launch Year : ${ele.launchYear}`:''}`}
                                        </Typography>
                                        </ListItem>
                                        
                                        
                                        
                                        
                                        </List>
                                        </Item>
                        </Link>
                        </Grid>
                        <Grid key={ele._id} item xs={3} padding={0} sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: { xs: "center", md: "space-evenly" }, alignItems: { xs: "center" },  }}>
                        <Link to={`/Appliances/${props.ProductCategory}/${ele._id}`} style={{ textDecoration: "none" }}>
                        <Item square elevation={0}  >
                        <Typography variant='h4' sx={{ color: "black" }}>
                                    &#8377;0.0
                                </Typography>
                                &#8377;<Typography variant='span' sx={{ color: "green" }}><del>{ele.price}</del></Typography> <Typography variant='span' sx={{ color: "green" }}>100% off</Typography>
                                </Item>
                                </Link>
                                </Grid>
                                </Grid>
                            ))} 
                            </Grid>
                            </Box>
                        )
                        */
}