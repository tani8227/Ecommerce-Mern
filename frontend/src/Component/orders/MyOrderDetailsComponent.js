
import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Typography, Card, CardMedia, } from '@mui/material';
import { Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import useGetAllOrders from '../utility/useToGetAllOrders';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import useToGetAllCardItemDetails from '../utility/useToGetAllCardItemDetails';
import { useSearchParams } from 'react-router-dom';





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



export default function MyOrderDetailsComponent() {

    const [searchParam] = useSearchParams();

    const [allOrder, setAllOrder] = useState();
    const [allOrderItems, setAllOrderItems] = useState();
    const [localUser, setLocalUser] = useState()

  useEffect(()=>
    {
      setLocalUser(JSON.parse(localStorage.getItem('user')));

    },[])

    let productCategory = searchParam.get('productCategory')
    const orderItemId = searchParam.get('orderItemId')
    const userId = searchParam.get('userId')
    const price = searchParam.get('price')

    const orders = useGetAllOrders();
    const orderItem = useToGetAllCardItemDetails(allOrder);

    const [category, setCategory] = useState(productCategory);


    console.log(productCategory, orderItemId, userId, price);

    useEffect(() => {
        if (orders !== undefined && orders.length > 0) {
            setAllOrder(orders);
        }
    }, [allOrder, orders])


    console.log(allOrder)

    useEffect(() => {
        if (allOrder !== undefined && allOrder.length > 0) {
            setAllOrderItems(orderItem);
            if (productCategory === null) {
                setCategory(allOrderItems); 
            }
        }
    }, [orderItem,allOrderItems, allOrder,category, productCategory])


    console.log(allOrder)




    return (
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', }}>
            <Grid item xs={3} sx={{ display: { xs: 'none', sm: 'block' } }}  >
                    <Item square sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 1 }} >
                        <Stack direction="row" >


                            <Avatar src="/broken-image.jpg" />


                        </Stack>

                        <Typography>
                           {`${localUser&&localUser.name}`}
                        </Typography>

                    </Item>
                    <Item square sx={{ marginTop: "10px", borderBottom: '1px solid lightgrey' }}>
                        <NavLink to={`/buyer/myprofile`} style={{ textDecoration: "none", color:'rgb(0 0 0 / 60%)' }}>
                            <Typography sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>

                                MY PROFILE <PlayArrowIcon sx={{fontSize:'medium'}}/>

                            </Typography>
                        </NavLink>
                    </Item>

                    <Item square sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 2,borderBottom: '1px solid lightgrey' }}>

                        <NavLink to={`/buyer/orderDetails`} style={{ textDecoration: "none", color:'rgb(0 0 0 / 60%)'  }}>
                            <Typography  sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                                
                                MY ORDERS<PlayArrowIcon sx={{fontSize:'medium'}}/>

                            </Typography>
                        </NavLink>
                    </Item>

                    <Item>
                        <NavLink to={`/buyer/Manage-Address`} style={{ textDecoration: "none", color:'rgb(0 0 0 / 60%)' }}>

                            <Typography  sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>

                                MANAGE ADDRESS<PlayArrowIcon sx={{fontSize:'medium'}}/>
                            </Typography>

                        </NavLink>
                    </Item>

                </Grid>
                <Grid item xs={12} sm={8} >

                    <Grid container sx={{ xs: { display: 'flex', flexWrap: "wrap" }, flexDirection: 'column', justifyContent: "space-evenly", gap: 2, borderBottom: '2px solid lightgrey', backgroundColor: "white", }} >
                       {allOrder&&allOrder.length===0&&
                         <Item>
                       
 
                             <Typography  sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
 
                                 NO ORDER TO Show !!!
                             </Typography>
 
                       
                     </Item>
                       }
                      
                        {allOrder && allOrder.map((ele, index) =>
                        (

                            <Grid key={ele._id} item xs={12} padding={0} sx={{ display: "flex", flexDirection: { xs: "row", }, justifyContent: { xs: "center", md: 'space-evenly' }, alignItems: "center", borderBottom: '2px solid lightgrey' }}>



                                <Item square elevation={0} sx={{ position: "relative", justifyContent: { xs: "center" }, alignItems: { xs: "center" }, width: "75px", }} >

                                   
                                        <Card square elevation={0} sx={{ maxWidth: { xs: "75px" } }}>
                                            <ThemeProvider theme={theme}>
                                                <CardMedia className='xs-phone-width'
                                                    component="img"
                                                    sx={{ margin: { xs: 'auto', md: "none" }, width: "65px" }}
                                                    image={`${ele.orderItemImg}`}
                                                    alt="Paella dish"
                                                />
                                            </ThemeProvider>
                                        </Card>
                                    
                                </Item>
                                <Item square elevation={0} sx={{ display: "flex", flexDirection: { xs: "row" }, width: "100%", justifyContent: "space-between", alignItems: "center", gap: 2, }} >

                                    <Typography variant='body2' sx={{ color: "black", fontSize: { xs: '16px', sm: '19px', md: "19px" }, }}>
                                        &#8377;{`${ele.price}`}
                                    </Typography>

                                    <Typography variant='body2' sx={{ color: "black", fontSize: { xs: '16px', sm: '19px', md: "19px" }, }}>
                                        {`${ele.status}`}
                                    </Typography>
                                    <Typography variant='body2' sx={{ color: "black", fontSize: { xs: '16px', sm: '19px', md: "19px" }, }}>
                                        {`Delivey Date ${ele.deliveryDate}`}

                                    </Typography>

                                </Item>

                            </Grid>

                        ))}

                    </Grid>


                </Grid>



            </Grid>
        </Box>
    );
}


