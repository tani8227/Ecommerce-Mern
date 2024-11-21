
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Card, CardMedia, Box, Typography, Button, FormGroup, FormControl, FormControlLabel } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import AddIcon from '@mui/icons-material/Add';
import AddOrderAddress from './AddOrderAddress.js';



import { Link, useNavigate } from 'react-router-dom';
// import { useGetCartItems } from '../utility/useGetCartItems';
import useGetOneItem from '../utility/useGetOneItem';
// import { useParams } from 'react-router-dom';
// import { useSearchParams } from 'react-router-dom';
// import useAddToCard from '../utility/useAddToCard'
import useToGetOneCartItem from '../utility/useGetOneCartItem.js'
import useAddress from '../utility/useAddress.js';
import PaymentComponent from './PaymentComponent.js';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


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

// const HiddenTextField = styled(TextField)({
//     display: 'none',
// });

export default function OrderComponent(props) {

    // const [searchParam] = useSearchParams();
    const [orderPreviewData, setOrderPreviewData] = useState();
    const [cartItem, setCartItem] = useState();
    const [refreshCart, setRefreshCart] = useState(false);
    const [user, setuser] = useState();
    const [userAddress, setUserAddress] = useState();
    const [selectedAddres, setselectedAddres] = useState(null);

    const User = useSelector((state) => state.Auth.AuthUser);
    const navigate = useNavigate();


console.log(props.ProductCategory)

    useEffect(() => {
        if (User && User.email !== undefined) {
            setuser(User);
        }
    }, [User]);

    // console.log(user, User)
    const orderPreviewItem = useGetOneItem(props.ProductCategory, props.id);

    if (orderPreviewItem);

    useEffect(() => {
        if (orderPreviewItem && orderPreviewItem.item !== undefined) {
            setOrderPreviewData(orderPreviewItem.item);
        }
    }, [orderPreviewItem, refreshCart]);

    const cartItemData = useToGetOneCartItem(props.id, refreshCart);

    // console.log(cartItemData,);


    const address = useAddress(`${localStorage.getItem('token')}`, "false")

    useEffect(() => {
        if (address && address.data.length > 0) {
            setUserAddress(address.data);
        }

    }, [address])

    useEffect(() => {
        if (cartItemData && cartItemData !== undefined) {
            setCartItem(cartItemData.cartItem);
        }
    }, [cartItemData, cartItem, refreshCart]);

    console.log(cartItem);
    console.log(orderPreviewData);

    async function handleIncreased(cartItemId) {



        const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_LOCAL_URL || process.env.REACT_APP_BACKEND_APP_API_URL}/api/v1/user/cart/increase-quantity/${cartItemId}`,
            {
                method: 'POST',
                headers:
                {
                    'Content-Type': 'Application/json',
                    'Authorization': `Bearer ${localStorage.getItem(`token`)}`
                }
            })

        if (response.ok) {


            setRefreshCart(!refreshCart);

        } else {
            console.error('Failed to update quantity');
        }

    }


    async function handleDecreased(cartItemId) {

        const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_LOCAL_URL || process.env.REACT_APP_BACKEND_APP_API_URL}/api/v1/user/cart/decrease-quantity/${cartItemId}`,
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

                setRefreshCart(!refreshCart);
            }
        } else {
            console.error('Failed to update quantity');
        }


    }

    async function handleRemoveCartItem(cartItemId) {
        // console.log(cartItemId)
        const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_LOCAL_URL || process.env.REACT_APP_BACKEND_APP_API_URL}/api/v1/user/cart/remove-item/${cartItemId}`,
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

                setRefreshCart(!refreshCart);
            }
        } else {
            console.error('Failed to update quantity');
        }


    }

    function handleChange(e) {

        console.log(e.target.value);
        localStorage.setItem('orderAddress', e.target.value)
        setselectedAddres(e.target.value);
    }
  


    function handleAdd() {
        navigate('/buyer/Manage-Address')
    }




    console.log(address)
    console.log(userAddress);
    console.log(orderPreviewData);


    
    return (

        <Box padding={0} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 1 }} >
            <Grid container item xs={10} sm={10} sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: { xs: "flex-start" }, alignItems: { xs: "center" }, backgroundColor: "white", marginTop: '5px', }} >

                <Grid item xs={10} padding={0} sx={{ display: "flex", flexDirection: { xs: "column", }, justifyContent: { xs: "flex-start" }, alignItems: { xs: "center" }, backgroundColor: 'blue' }}>

                    <Item square elevation={0} sx={{ display: "flex", justifyContent: { xs: "flex-start" }, margin: 0, padding: 0, width: '100%', }}>
                        {user &&
                            <>
                                <Typography sx={{ display: 'flex', justifyContent: 'flex-start', fontSize: '19px', marginLeft: '5px' }}>
                                    LOGIN: {`${user && user.name}`}
                                </Typography>
                            </>
                        }
                    </Item>

                    <Item square elevation={0} sx={{ display: "flex", justifyContent: { xs: "flex-start" }, margin: 0, padding: 0, width: '100%' }}>
                        {user &&
                            <>
                                <Typography sx={{ display: 'flex', justifyContent: 'flex-start', fontSize: '17px', marginLeft: '5px', fontWeight: '500' }}>

                                    {`Email: ${user && user.email}`}

                                </Typography>
                            </>
                        }
                    </Item>
                </Grid>
            </Grid>
            <Grid container sx={{ xs: { display: 'flex', flexWrap: "wrap" }, justifyContent: "center", }} >

                {orderPreviewData !== undefined &&
                    <Grid container item xs={7} sm={10} sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: { xs: "flext-start", md: "flext-start" }, alignItems: { xs: "center" }, borderTop: "1px solid lightgrey", backgroundColor: "white" }} >

                        <Grid item xs={2} padding={0} sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: { xs: "center", md: "center" }, alignItems: { xs: "center" }, }}>
                            <Item square elevation={0} sx={{ position: "relative", justifyContent: { xs: "center" }, alignItems: { xs: "center" }, width: "75px", }} >

                                <Link to={`/${props.ProductCategory}/${orderPreviewData._id}`} style={{ textDecoration: "none" }}>
                                    <Card square elevation={0} sx={{ maxWidth: { xs: "75px" } }}>
                                        <ThemeProvider theme={theme}>
                                            <CardMedia className='xs-phone-width'
                                                component="img"
                                                sx={{ margin: { xs: 'auto', md: "none" }, width: "70px" }}
                                                image={`${orderPreviewData.imgUrl[0]}`}
                                                alt="Paella dish"
                                            />
                                        </ThemeProvider>
                                    </Card>
                                </Link>
                            </Item>
                        </Grid>
                        <Grid item xs={5} padding={0} sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: { xs: "flext-start", md: "flext-start" }, alignItems: { xs: "center" }, }}>
                            <Link to={`/${props.ProductCategory}/${orderPreviewData._id}`} style={{ textDecoration: "none" }}>
                                <Item square elevation={0}  >
                                    <Typography variant='body2' color={'black'} sx={{ padding: 0, margin: 0, textAlign: "left", fontSize: "15px" }} >
                                        {`${orderPreviewData.companyName!==undefined?orderPreviewData.companyName:''} ${orderPreviewData.modelName!==undefined?orderPreviewData.modelName:''} (${orderPreviewData.color!==undefined?orderPreviewData.color:''} ${orderPreviewData.internalStorage!==undefined?orderPreviewData.internalStorage:''})`}
                                    </Typography>

                                    <Typography variant='body2' sx={{ color: "black", fontSize: "21px" }}>
                                        &#8377;0.0
                                    </Typography>
                                    &#8377;<Typography variant='span' sx={{ color: "green" }}><del>{orderPreviewData.price}</del></Typography> <Typography variant='span' sx={{ color: "green" }}>100% off</Typography>
                                </Item>
                            </Link>
                        </Grid>
                        {cartItem !== undefined &&
                            <Grid item xs={2} padding={0} sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: { xs: "center", md: "space-between" }, alignItems: { xs: "center" }, }}>
                                <Item square elevation={0} sx={{ display: "flex", width: "150px", justifyContent: "center", alignItems: "center", gap: 1 }} >
                                    <RemoveCircleOutlineOutlinedIcon onClick={() => handleDecreased(`${cartItem._id}`)} />
                                    <Typography variant='body2' sx={{ color: "black", fontSize: "21px", border: "2px solid lightgery" }}>
                                        {`${cartItem.quantity}`}
                                    </Typography>
                                    <ControlPointOutlinedIcon onClick={() => handleIncreased(`${cartItem._id}`)} />

                                </Item>
                            </Grid>
                        }
                        {cartItem !== undefined &&
                            <Grid item xs={2} padding={0} sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: { xs: "center", md: "space-between" }, alignItems: { xs: "center" }, }}>
                                <Item square elevation={0} sx={{ display: "flex", width: "150px", justifyContent: "center", alignItems: "center", gap: 1 }} >

                                    <Button onClick={() => handleRemoveCartItem(cartItem._id)}>

                                        REMOVE

                                    </Button>
                                </Item>
                            </Grid>
                        }
                    </Grid>

                }


            </Grid>

            <Grid container item xs={10} sm={10} sx={{ display: "flex", flexDirection: { xs: "column" }, justifyContent: { xs: "space-between" }, alignItems: { xs: "flex-start" }, borderTop: "1px solid lightgrey", backgroundColor: "white", gap: 1, marginTop: '5px' }} >

                <Grid item xs={12} padding={0} sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: { xs: "center" }, }}>

                    <Item square elevation={0} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography sx={{ display: 'flex', justifyContent: 'flex-start', fontSize: '19px', fontWeight: '500' }}>

                            Address:
                        </Typography>

                    </Item>
                    <Item square elevation={0} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography sx={{ display: 'flex', justifyContent: 'flex-start', fontSize: '19px', fontWeight: '500' }} >


                            <Button onClick={handleAdd}>
                                <AddIcon />  ADD Address

                            </Button>
                        </Typography>

                    </Item>
                </Grid>

                {userAddress === undefined &&
                    <AddOrderAddress user={user} />
                }
                {userAddress &&
                    <Grid item xs={12} padding={0} sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: { xs: "flext-start", md: "flext-start" }, alignItems: { xs: "center" }, }}>
                        <Item square elevation={0} sx={{ width: '100%' }}>
                            <form style={{ width: "100%" }} >
                                <Typography sx={{ fontSize: '19px', }}>
                                    <FormGroup sx={{ width: "100%" }}>

                                        <FormControl sx={{ width: "100%" }}>
                                            <RadioGroup
                                                aria-labelledby="demo-controlled-radio-buttons-group"
                                                name="controlled-radio-buttons-group"
                                                value={selectedAddres}
                                                onChange={handleChange}
                                            >
                                                {userAddress && userAddress.map((ele, index) => (

                                                    <FormControlLabel key={index} value={ele.address} control={<Radio />} label={ele.address} />

                                                ))}
                                            </RadioGroup>
                                        </FormControl>
                                    </FormGroup>
                                </Typography>
                            </form>
                        </Item>
                    </Grid>
                }

            </Grid>

            <Grid container item xs={10} sm={10} sx={{ display: "flex", flexDirection: { xs: "column", sm: "column" }, justifyContent: { xs: "space-evenly" }, alignItems: { xs: "center" }, borderTop: "1px solid lightgrey", marginTop: '5px' }} >

                <Grid item xs={12} padding={0} sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: { xs: "flex-start", md: "flex-start" }, alignItems: { xs: "center" }, backgroundColor: 'blue', width: "100%" }}>


                    <Item square elevation={0} sx={{ width: '100%' }}>
                        <Typography sx={{ display: 'flex', justifyContent: 'flex-start', fontSize: '19px' }}>

                            Payment Method:
                        </Typography>
                    </Item>

                </Grid>

                   {selectedAddres&&

                       <PaymentComponent cartItem={cartItem} userAddress={userAddress} ProductCategory={props.ProductCategory} orderPreviewData={orderPreviewData} defaultImg={props.defaultImg} />
                   }

            </Grid>

        </Box >
    )
}