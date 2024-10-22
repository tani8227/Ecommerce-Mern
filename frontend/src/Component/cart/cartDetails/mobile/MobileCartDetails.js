import React, { useEffect, useState } from "react"
import { Typography, Paper, styled, Box } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function MobileCartDetails(props) {

    const [cartItem, setCartItem] = useState();


    useEffect(() => {
        if (cartItem === undefined) {
            setCartItem(props.data.cartItemDetails)
        }
    }, [props, cartItem]);

    console.log(props);
    return (
<Box>
      {cartItem&&cartItem.companyName&&
        <Item square elevation={0}  >
            <Typography variant='body2' color={'black'} sx={{ padding: 0, margin: 0, textAlign: "left", fontSize: "15px" }} >
                {`${cartItem.companyName} ${cartItem.modelName} (${cartItem.color},${cartItem.internalStorage} )`}
            </Typography>

            <Typography variant='body2' sx={{ color: "black", fontSize: "21px" }}>
                &#8377;0.0
            </Typography>
            <Typography variant='span' sx={{ color: "green" }}>
                <del>
                &#8377;{cartItem.price}
                </del>
            </Typography>
            <Typography variant='span' sx={{ color: "green" }}>
                100% off
            </Typography>
        </Item>
        }
</Box>

    )
}











