import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Card, CardMedia, Box, Typography, Button } from '@mui/material';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import { useSearchParams } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { useGetCartItems } from '../utility/useGetCartItems';
import { Actions } from '../../reducers/AuthReducer.js';

import MobileCartDetails from './cartDetails/mobile/MobileCartDetails.js'
import FridgeCartDeatils from './cartDetails/appliances/FridgeCartDetails.js'
import CoolerCartDetails from './cartDetails/appliances/CoolerCartDetails.js'
import ACCartDetails from './cartDetails/appliances/ACCartDeatils.js'
import WashingMachineCartDetails from './cartDetails/appliances/WashingMachineCartDetails.js'
import LedTVCartDetails from './cartDetails/appliances/LedTVCartDetails.js'
import WaterPurifierCartDetails from './cartDetails/appliances/WaterPurifierCartDetails.js'
import LaptopCartDetails from './cartDetails/electronics/LaptopCartDetails.js'
import CameraCartDetails from './cartDetails/electronics/CameraCartDetails.js'
import PrinterCartDetails from './cartDetails/electronics/PrinterCartDetails.js'
import ShirtCartDetails from './cartDetails/fashion/ShirtCartDetails.js'
import TshirtCartDetails from './cartDetails/fashion/TshirtCartDetails.js'
import JeansCartDetails from './cartDetails/fashion/JeansCartDetails.js'
import ShoeCartDetails from './cartDetails/fashion/ShoeCartDetails.js'
import TrackPantCartDetails from './cartDetails/fashion/TrackPantCartDetails.js'
import WindCheaterCartDetails from './cartDetails/fashion/WindCheaterCartDetails.js'
import FlourCartDetails from './cartDetails/grocery/FlourCartDetails.js'
import DetergentCartDetails from './cartDetails/grocery/DetergentCartDetails.js'
import ShampooCartDetails from './cartDetails/grocery/ShampooCartDetails.js'
import OralCareCartDetails from './cartDetails/grocery/OralCareCartDetails.js'
import CleaningEssentialsCartDetails from './cartDetails/grocery/CleaningEssentialsCartDetails.js'
// import PulsesCartDetails from './cartDetails/grocery/PulsesCartDetails.js'

import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';


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



export default function CartComponent() {
    const [searchParam] = useSearchParams();
    console.log(searchParam);
    const mainCategory = searchParam.get('mainCategory');
    console.log(mainCategory);

    const [refreshCart, setRefreshCart] = useState(false);
    const [cartItemData, setCartItemData] = useState(null);

    const cartData = useGetCartItems(refreshCart);
    const Dispatch = useDispatch();

    useEffect(() => {
        if (cartData && cartData.AllcartItems) {
            console.log(cartData.AllcartItems, "{{}{}{}{}{}}}}{{{}{}")
            setCartItemData(cartData);
            Dispatch(Actions.setCartCount(cartData.AllcartItems.length))
            localStorage.setItem('cartCount', cartData.AllcartItems.length);
        }else
        {
            setCartItemData(cartData);
            Dispatch(Actions.setCartCount(0))
            localStorage.setItem('cartCount', cartData.length);
            
        }
    }, [cartData, refreshCart, Dispatch]);

    useEffect(() => {
        if (cartItemData) {

            console.log("Updated localCartData:", cartItemData);

        }
    }, [cartItemData]);

    async function handleIncreased(cartItemId) {


        const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_URL}/api/v1/user/cart/increase-quantity/${cartItemId}`,
            {
                method: 'POST',
                headers:
                {
                    'Content-Type': 'Application/json',
                    'Authorization': `Bearer ${localStorage.getItem(`token`)}`
                }
            })

        if (response.ok) {


            setRefreshCart((prev) => !prev);


        } else {
            console.error('Failed to update quantity');
        }

    }


    async function handleDecreased(cartItemId) {

        const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_URL}/api/v1/user/cart/decrease-quantity/${cartItemId}`,
            {
                method: "POST",
                headers:
                {
                    'Content-Type': "Application/json",
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })

        if (response.ok) {
            const data = await response.json();
            if(data)
                {

                    setRefreshCart((prev) => !prev);
                }
        } else {
            console.error('Failed to update quantity');
        }


    }

    async function handleRemoveCartItem(cartItemId) {
        console.log(cartItemId)
        const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_URL}/api/v1/user/cart/remove-item/${cartItemId}`,
            {
                method: "POST",
                headers:
                {
                    'Content-Type': "Application/json",
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })

        if (response.ok) {
            const data = await response.json();
            if (data) {

                setRefreshCart((prev) => !prev);
                if(cartData.length===0)
                    {

                        localStorage.setItem('cartCount', cartData.length);
                    }else
                    {

                        localStorage.setItem('cartCount', cartData.AllcartItems.length);
                    }
                toast.success('Product Removed Successfully',
                    {
                        position: 'top-right',
                        autoClose: 1500
                    })
            }
        } else {
            toast.error('Error Removing the Product',
                {
                    position: 'top-right',
                    autoClose: 1500
                })
            console.error('Failed to update quantity');
        }

    }
    
    
    return (

        <Box padding={0}  >

            <Grid container sx={{ xs: { display: 'flex', flexWrap: "wrap" }, justifyContent: "center", }} >

            {cartItemData && cartItemData.cartItemList.length==0&&
             <Item square elevation={0} sx={{ display: "flex", width: "150px", justifyContent: "center", alignItems: "center", gap: 1 }} >
             <Typography variant='body2' sx={{ color: "black", fontSize: "21px", border: "2px solid lightgery" }}>
                NO PRODUCT TO SHOW
             </Typography>
         </Item>
            
            }
                {cartItemData && cartItemData.cartItemList.length>0 && cartItemData.cartItemList.map((ele, index) => (

                    <Grid key={ele._id || index} container item xs={10} sm={10} sx={{ display: "flex", flexDirection: { xs: "row", sm: "row" }, justifyContent: { xs: "center", md: "flext-start" }, alignItems: { xs: "center" }, borderTop: "1px solid lightgrey", backgroundColor: "white" }} >

                        <Grid item xs={10} sm={2} padding={0} sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: { xs: "center", md: "center" }, alignItems: { xs: "center" }, }}>
                            <Item square elevation={0} sx={{ position: "relative", justifyContent: { xs: "center" }, alignItems: { xs: "center" }, width: "75px", }} >

                                <Link to={`/${ele.mainCategory}/${cartItemData.AllcartItems[index].modalName}/${ele.cartItemDetails._id}`} style={{ textDecoration: "none" }}>
                                    <Card square elevation={0} sx={{ maxWidth: { xs: "75px" } }}>
                                        <ThemeProvider theme={theme}>
                                            <CardMedia className='xs-phone-width'
                                                component="img"
                                                sx={{ margin: { xs: 'auto', md: "none" }, width: "70px" }}
                                                image={`${ele.cartItemDetails.imgUrl[0]}`}
                                                alt="Paella dish"
                                            />
                                        </ThemeProvider>
                                    </Card>
                                </Link>
                            </Item>
                        </Grid> 
                        <Grid item xs={12} sm={5} padding={0} sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: { xs: "flext-start", md: "flext-start" }, alignItems: { xs: "center" }, }}>
                            <Link to={`/${ele.mainCategory}/${cartItemData.AllcartItems[index].modalName}/${ele.cartItemDetails._id}`} style={{ textDecoration: "none" }}>
                                {cartItemData.AllcartItems[index].modalName === 'Mobile' && <MobileCartDetails data={ele} />}
                                {cartItemData.AllcartItems[index].modalName === 'Fridge' && <FridgeCartDeatils data={ele} />}
                                {cartItemData.AllcartItems[index].modalName === 'LedTV' && <LedTVCartDetails data={ele} />}
                                {cartItemData.AllcartItems[index].modalName === 'Cooler' && <CoolerCartDetails data={ele} />}
                                {cartItemData.AllcartItems[index].modalName === 'AC' && <ACCartDetails data={ele} />}
                                {cartItemData.AllcartItems[index].modalName === 'WaterPurifier' && <WaterPurifierCartDetails data={ele} />}
                                {cartItemData.AllcartItems[index].modalName === 'WashingMachine' && <WashingMachineCartDetails data={ele} />}
                                {cartItemData.AllcartItems[index].modalName === 'Shirt' && <ShirtCartDetails data={ele} />}
                                {cartItemData.AllcartItems[index].modalName === 'Tshirt' && <TshirtCartDetails data={ele} />}
                                {cartItemData.AllcartItems[index].modalName === 'Jeans' && <JeansCartDetails data={ele} />}
                                {cartItemData.AllcartItems[index].modalName === 'Shoe' && <ShoeCartDetails data={ele} />}
                                {cartItemData.AllcartItems[index].modalName === 'TrackPant' && <TrackPantCartDetails data={ele} />}
                                {cartItemData.AllcartItems[index].modalName === 'WindCheater' && <WindCheaterCartDetails data={ele} />}
                                {cartItemData.AllcartItems[index].modalName === 'Laptop' && <LaptopCartDetails data={ele} />}
                                {cartItemData.AllcartItems[index].modalName === 'Camera' && <CameraCartDetails data={ele} />}
                                {cartItemData.AllcartItems[index].modalName === 'Printer' && <PrinterCartDetails data={ele} />}
                                {cartItemData.AllcartItems[index].modalName === 'Flour' && <FlourCartDetails data={ele} />}
                                {cartItemData.AllcartItems[index].modalName === 'Detergent' && <DetergentCartDetails data={ele} />}
                                {cartItemData.AllcartItems[index].modalName === 'Shampoo' && <ShampooCartDetails data={ele} />}
                                {cartItemData.AllcartItems[index].modalName === 'OralCare' && <OralCareCartDetails data={ele} />}
                                {cartItemData.AllcartItems[index].modalName === 'CleaningEssentials' && <CleaningEssentialsCartDetails data={ele} />}


                            </Link>
                        </Grid>
                        <Grid item xs={10} sm={2} padding={0} sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: { xs: "center", md: "space-between" }, alignItems: { xs: "center" }, }}>
                            <Item square elevation={0} sx={{ display: "flex", width: "150px", justifyContent: "center", alignItems: "center", gap: 1 }} >
                                <RemoveCircleOutlineOutlinedIcon onClick={() => handleDecreased(`${cartItemData.AllcartItems[index]._id}`)} />
                                <Typography variant='body2' sx={{ color: "black", fontSize: "21px", border: "2px solid lightgery" }}>
                                    {`${cartItemData.AllcartItems[index].quantity}`}
                                </Typography>
                                <ControlPointOutlinedIcon onClick={() => handleIncreased(`${cartItemData.AllcartItems[index]._id}`)} />

                            </Item>
                        </Grid>
                        <Grid item xs={10} sm={2} padding={0} sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: { xs: "center", md: "space-between" }, alignItems: { xs: "center" }, }}>
                            <Item square elevation={0} sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: { xs: "center", md: "space-between" }, alignItems: { xs: "center" }, gap: 1 }} >

                                <Button onClick={() => handleRemoveCartItem(cartItemData.AllcartItems[index]._id)}>

                                    REMOVE
                                </Button>


                            </Item>
                        </Grid>

                    </Grid>


                ))}

            </Grid>




        </Box>
    )
}