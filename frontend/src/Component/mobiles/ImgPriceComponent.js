
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Typography } from '@mui/material';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';

// import { createTheme } from '@mui/material/styles';





// const theme = createTheme({
//     components: {
//         MuiCardMedia: {
//             styleOverrides: {
//                 root: {
//                     width: "50%",


//                 },
//             },
//         },
//     },
// });



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



export default function ImgPriceComponent() {

    const mobileObj=useSelector((state)=>state.Auth.mobiledata);
    return (
        <Box padding={0} sx={{backgroundColor:"white"}}>
        <Grid container  padding={0} >
            <Grid item xs={12} >   
               {mobileObj.mobiles&&mobileObj.mobiles.map((ele, index)=>
               (     
                   <Item square elevation={0}  >
                    <Typography variant='h4' sx={{color:"green"}}>
                        &#8377;0.0
                    </Typography>
                    &#8377;<Typography variant='span' sx={{color:"green"}}><del>{ele.price}</del></Typography> <Typography variant='span' sx={{color:"green"}}>100% off</Typography>
                </Item>
                ))}
            </Grid>
        </Grid>
        </Box>
    )}