
import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { Typography, Card, CardMedia, } from '@mui/material';
import { Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useSearchParams } from 'react-router-dom';
import useGetOneItem from '../utility/useGetOneItem';
import useToGetOneOrder from '../utility/useToGetOneOrder'
import CircleIcon from '@mui/icons-material/Circle';
// import { List, ListItem } from '@mui/material';








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
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));



export default function MyOrderDetailsforImgComponent() {

    const [searchParam] = useSearchParams();
    const productCategory = searchParam.get('productCategory')
    const orderItemId = searchParam.get('orderItemId')
    const userId = searchParam.get('userId')
 


    console.log(productCategory, orderItemId, userId);
    const [orderProduct, setOrderProduct] = useState();
    const [userAddress, setUserAddress] = useState();
    const [user, setUser] = useState();
    const product = useGetOneItem(productCategory, orderItemId);
    const address = useToGetOneOrder(productCategory, orderItemId);


    useEffect(() => {
        if (product !== undefined) {
            setOrderProduct(product.item);
        }
    }, [orderProduct, product])
    useEffect(() => {
        if (address !== undefined && address.data !== undefined) {
            setUserAddress(address.data);
            setUser(address.user);
        }
    }, [address, userAddress])
    console.log(orderProduct);
    console.log(userAddress);
    console.log(address);

    return (
        <Box sx={{ flexGrow: 1,padding:1 }}>

            {orderProduct &&

                <Grid container sx={{ xs: { display: 'flex', flexWrap: "wrap" }, justifyContent: "center", gap: 1 }} >

                    <Grid item xs={10} padding={0} sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: { xs: "center", md: "flex-start" }, alignItems: { xs: "center" }, backgroundColor: "white" , borderBottom:'2px solid lightgrey'}}>

                        <Item square elevation={0}  >
                            <Link to={`/${productCategory}`} style={{ textDecoration: "none" }}>
                                <Typography variant='body2' color={'black'} sx={{ padding: 0, margin: 0, textAlign: "left", fontSize: "15px" }} >
                                    {`Buyer's Name :${user && user.name}`}
                                </Typography>
                                <Typography variant='body2' color={'black'} sx={{ padding: 0, margin: 0, textAlign: "left", fontSize: "15px" }} >
                                    {`Delivery Address :${userAddress && userAddress.deliveryAddress} `}
                                </Typography>
                                <Typography variant='body2' color={'black'} sx={{ padding: 0, margin: 0, textAlign: "left", fontSize: "15px" }} >
                                    {`Delivery Date :  ${userAddress&&userAddress.deliveryDate} `}
                                </Typography>
                                <Typography variant='body2' color={'black'} sx={{ padding: 0, margin: 0, textAlign: "left", fontSize: "15px" }} >
                                    {`Order Quantity :  ${userAddress&&userAddress.orderItemQuantity} `}
                                </Typography>
                                <Typography variant='body2' color={'black'} sx={{ padding: 0, margin: 0, textAlign: "left", fontSize: "15px" }} >
                                    {`Price :  ${userAddress&&userAddress.price} `}
                                </Typography>
                                <Typography variant='body2' color={'black'} sx={{ padding: 0, margin: 0, textAlign: "left", fontSize: "15px" }} >
                                    {`Order status :  ${userAddress&&userAddress.status} `}
                                </Typography>
                            </Link>
                        </Item>
                        
                    </Grid>
                  <Grid item xs={10} padding={0} sx={{ display: "flex", flexDirection: { xs: "column",  sm: "row", md:'row' }, justifyContent: { xs: "center",sm: "space-evenly", md: "space-evenly" }, alignItems: { xs: "center" }, backgroundColor: "white", borderBottom:'2px solid lightgrey' }}>
                        <Item square elevation={0} sx={{ position: "relative", justifyContent: { xs: "center" }, alignItems: { xs: "center" }, width: {xs:'90%',sm:"auto"}, }} >

                            <Link to={`/${productCategory}/`} style={{ textDecoration: "none" }}>
                                <Card square elevation={0} sx={{ maxWidth: { xs: "75px" } }}>
                                    <ThemeProvider theme={theme}>
                                        <CardMedia className='xs-phone-width'
                                            component="img"
                                            sx={{ margin: { xs: 'auto', md: "none" }, width: "70px" }}
                                            image={`${orderProduct.imgUrl[0]}`}
                                            alt="Paella dish"
                                        />
                                    </ThemeProvider>
                                </Card>
                            </Link>
                        </Item>
                        <Item square elevation={0} sx={{ width: {xs:'90%',sm:"auto"} }} >
                            <Link to={`/${productCategory}`} style={{ textDecoration: "none", }}>
                                <Typography variant='body2' color={'black'} sx={{ padding: 0, margin: 0, textAlign: "left", fontSize: "15px" }} >
                                    {`${orderProduct.companyName} ${orderProduct.modelName} `}
                                </Typography>
                                <Typography variant='body2' color={'black'} sx={{ padding: 0, margin: 0, textAlign: "left", fontSize: "15px" }} >
                                    {`(${orderProduct.color} ${orderProduct.internalStorage})`}
                                </Typography>
                                <Typography variant='body2' sx={{ padding: 0, margin: 0, textAlign: "left", color: "black", fontSize: "21px", }}>
                                    &#8377;{`${orderProduct.price}`}
                                </Typography>

                            </Link>
                        </Item>
                        <Item square elevation={0}  padding={0} sx={{  display: 'flex', justifyContent: 'space-evenly', alignItems: "center", width: {xs:'90%', sm:'auto', md:'65%'},  }} >
                                  <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: "space-evenly",
                                    alignItems: 'self-end',
                                    width: '100%',
                                    padding:0,
                                }}
                            >
                               
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'center', width: 'auto' }}>
                                    <Typography
                                        variant='body2'
                                        color='black'
                                        sx={{ fontSize: "15px", marginBottom: 1, width: '100%', flexWrap:'nowrap' }}
                                    >
                                        Order Confirmed
                                    </Typography>
                                    <Typography
                                        variant='body2'
                                        color='black'
                                        sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', }}
                                    >
                                        <CircleIcon sx={{ color: 'green' }} />
                                       
                                    </Typography>
                                    <Typography
                                        variant='body2'
                                        color='grey'
                                        sx={{ fontSize: "11px",fontWeight:'600' }}
                                    >
                                        
                                        Your Order Has Been Placed
                                    </Typography>
                                </Box>

                              
                                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', textAlign: 'center' }}>
                                    <Typography
                                        variant='body2'
                                        color='black'
                                        sx={{ fontSize: "15px", marginBottom: 1 }}
                                    >
                                        Shipped
                                    </Typography>

                                    <Typography
                                        variant='body2'
                                        color='black'
                                        sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', }}
                                    >
                                       
                                        <CircleIcon sx={{ color: 'green' }} />
                                       
                                    </Typography>

                                    <Typography
                                        variant='body2'
                                        color='grey'
                                        sx={{ fontSize: "11px",fontWeight:'600' }}
                                    >
                                        
                                        Your Order Has Been Shipped
                                        </Typography>
                                </Box>

                              
                                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', textAlign: 'center' }}>
                                    <Typography
                                        variant='body2'
                                        color='black'
                                        sx={{ fontSize: "15px", marginBottom: 1 }}
                                    >
                                        Out for Delivery
                                    </Typography>
                                    <Typography
                                        variant='body2'
                                        color='black'
                                        sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', }}
                                    >
                                      
                                        <CircleIcon sx={{ color: 'green' }} />
                                       
                                    </Typography>
                                    <Typography
                                        variant='body2'
                                        color='grey'
                                        sx={{ fontSize: "11px",fontWeight:'600' }}
                                    >
                                        
                                        Your Order is Out For Delivery
                                        </Typography>
                                </Box>

                               
                                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', textAlign: 'center', marginLeft: '5px' }}>
                                    <Typography
                                        variant='body2'
                                        color='black'
                                        sx={{ fontSize: "15px", marginBottom: 1 }}
                                    >
                                        Delivered
                                    </Typography>
                                    <Typography
                                        variant='body2'
                                        color='black'
                                        sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', }}
                                    >
                                    
                                        <CircleIcon sx={{ color: 'green' }} />
                                      
                                    </Typography>
                                    <Typography
                                        variant='body2'
                                        color='grey'
                                        sx={{ fontSize: "11px",fontWeight:'600' }}
                                    >
                                        Your Order Has Been Delivered
                                        </Typography>
                                </Box>
                            </Box>  
                        </Item>
                          
                    </Grid> 
                  
                    
                </Grid>

            }
        </Box>
    );
}


