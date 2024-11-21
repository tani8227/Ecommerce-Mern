import React, { useEffect, useState } from "react";
import { Grid, styled, Paper, Typography, Box, Button } from "@mui/material";
import { FormControl, FormGroup,  TextField, FormControlLabel, } from "@mui/material";
import { Radio, RadioGroup } from "@mui/material";
import useToPlaceOrder from "../utility/useToPlaceOrder";
import { useNavigate } from "react-router-dom";






const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const HiddenTextField = styled(TextField)({
    display: 'none',
});


const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captcha;
};

export default function PaymentComponent(props) {

    const [selectedPayment, setSelectedPayment] = useState('')
    const [userCaptcha, setUserCaptcha] = useState('')
    const [captcha, setCaptcha] = useState(generateCaptcha())
    const [upi, setUpi] = useState('')
    const handlePlaceOrder = useToPlaceOrder();
    const navigate = useNavigate();

    const dateObj = new Date();
    dateObj.setDate(dateObj.getDate() + 7);

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const day = dateObj.getDate();
    const month = monthNames[dateObj.getMonth()];
    const year = dateObj.getFullYear();

    const formattedDate = `${day} ${month} ${year}`;
    console.log(props);

    const [order, setOrder] = useState({

        orderItemId: '',
        userId: '',
        sellerId: 'false',
        modalName: `${props.ProductCategory}`,
        orderItemImg: `${props.defaultImg}`,
        paymentMode: `${selectedPayment}`,
        deliveryAddress: '',
        orderItemQuantity: '',
        price: '',
        upiId: `${upi}`,
        deliveryDate: formattedDate,
        status: 'Order Placed',

    });

    console.log(localStorage.getItem('orderAddress'));

    useEffect(() => {
        if (props.cartItem !== undefined) {
            setOrder(

                {
                    orderItemId: props.orderPreviewData && props.orderPreviewData._id ? props.orderPreviewData._id : '',
                    userId: props.cartItem && props.cartItem.user_ref ? props.cartItem.user_ref : '',
                    sellerId: props.orderPreviewData && props.orderPreviewData.seller_ref ? props.orderPreviewData.seller_ref : '',
                    modalName: `${props.ProductCategory}`,
                    orderItemImg: `${props.defaultImg}`,
                    paymentMode: `${selectedPayment}`,
                    deliveryAddress: `${localStorage.getItem('orderAddress')}`,
                    orderItemQuantity: props.cartItem && props.cartItem.quantity ? props.cartItem.quantity : '',
                    price: props.orderPreviewData && props.orderPreviewData.price ? props.orderPreviewData.price : '',
                    upiId: `${upi === '' ? 'NA' : upi}`,
                    deliveryDate: formattedDate,
                    status: 'Order Placed',
                }
            )
        }
    }, [props,formattedDate,selectedPayment,upi])

    

    function handleSelectedPayment(e) {
        console.log(e.target.value)
        setSelectedPayment(e.target.value);
    }
    function handleUserCaptcha(e) {
        console.log(e.target.value)
        setUserCaptcha(e.target.value);
    }

    // to do later when payment gatway integrate
    function handleUpi(e) {
        console.log(e.target.value)
        setUpi(e.target.value);
    }

   

    console.log(order);

    function handlesubmit(e) {
        e.preventDefault();
        if (selectedPayment === 'Cash on Delivery' && userCaptcha !== captcha) {
            alert("Incorrect CAPTCHA. Please try again.");
            setCaptcha(generateCaptcha());
            setUserCaptcha('');
            return;
        }
        if (selectedPayment === 'Cash on Delivery' && userCaptcha === captcha) {

            console.log(order);
            const orderPlaced = handlePlaceOrder(order);
            console.log(orderPlaced);
            if (orderPlaced) {

                setUserCaptcha('');
                const queryParams = new URLSearchParams({
                    productCategory: props.ProductCategory,
                    orderItemId: order.orderItemId,
                    userId: order.userId,
                    price: order.price,
                }).toString();


                navigate(`/buyer/orderDetails?${queryParams}`);
            }

        }
        if (selectedPayment === 'upi') {


            console.log(order);
            handleUpi()
            handlePlaceOrder(order);
        }

    }


    return (

        <Grid item xs={12} padding={0} sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: { xs: "flex-start", md: "flex-start" }, alignItems: { xs: "center" }, backgroundColor: 'white', borderTop: "1px solid lightgrey", width: "100%" }}>


            <Item square elevation={0} sx={{ display: "flex", justifyContent: "flex-start", width: "100%" }}>
                <FormControl component="form" onSubmit={handlesubmit} sx={{ width: "100%" }} >
                    <FormGroup>

                            <FormControl>
                                <HiddenTextField
                                    type='hidden'
                                    variant="standard"
                                    name='sellerId'
                                    id='seller-Id'
                                    sx={{ margin: 2, textAlign: 'left', }}
                                    value={`${order.sellerId}`}

                                    required
                                />
                            </FormControl>

                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    onChange={handleSelectedPayment}
                                    value={`${selectedPayment}`}
                                    name="radio-buttons-group"

                                >


                                    <FormControlLabel value="Cash on Delivery" control={<Radio />} label="Cash on Delivery" sx={{ marginTop: '0px', }} />
                                    {selectedPayment === 'Cash on Delivery' &&
                                        <Box sx={{ display: 'flex', width: '100%', alignItems: "center", justifyContent: "center", }}>
                                            <Typography
                                                sx={{ fontSize: '20px', color: "#8b808e", fontWeight: 500, border: '2px solid lightgrey', }}
                                            >
                                                {captcha}

                                            </Typography>
                                            &nbsp;
                                            &nbsp;




                                            <TextField
                                                type="text"
                                                name='userCaptcha'
                                                label="Enter CAPTCHA CODE"
                                                value={`${userCaptcha}`}
                                                onChange={handleUserCaptcha}
                                            >


                                            </TextField>

                                            <Button
                                                type="submit"
                                                variant="contained"
                                                size="larger"
                                                sx={{ margin: 3, backgroundColor: '#fb641b' }}
                                                padding={2}

                                            >
                                                Confirmed Order
                                            </Button>
                                        </Box>



                                    }
                                    <FormControlLabel value="upi" control={<Radio />} label="UPI" sx={{ marginTop: '5px', borderTop: '1px solid lightgrey' }} />
                                    {selectedPayment === 'upi' &&
                                        <Box sx={{ display: 'flex', width: '100%', alignItems: "center", justifyContent: "center", }}>




                                            <TextField
                                                type="text"
                                                name='upi'
                                                label="Enter UPI ID"
                                                value={`${upi !== '' ? upi : "NA"}`}
                                                onChange={handleSelectedPayment}
                                                disabled
                                            >


                                            </TextField>

                                            <Button
                                                type="submit"
                                                variant="contained"
                                                size="larger"
                                                sx={{ margin: 3, backgroundColor: '#fb641b' }}
                                                padding={2}

                                            >
                                                Confirmed Order
                                            </Button>
                                        </Box>
                                    }
                                </RadioGroup>
                            </FormControl>


                    </FormGroup>
                </FormControl>
            </Item>

        </Grid>

    )
}