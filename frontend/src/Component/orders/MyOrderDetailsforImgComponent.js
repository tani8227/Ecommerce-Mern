
// import * as React from 'react';
// import { useState, useEffect } from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';

// import { Typography, Card, CardMedia, } from '@mui/material';
// import { Link } from 'react-router-dom';
// import { ThemeProvider, createTheme } from '@mui/material/styles';

// // import { List, ListItem } from '@mui/material';




// import { useParams, } from 'react-router-dom';
// import useGetAllOrders from '../utility/useToGetAllOrders';
// import useToGetAllCardItemDetails from '../utility/useToGetAllCardItemDetails';




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


// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     ...theme.applyStyles('dark', {
//         backgroundColor: '#1A2027',
//     }),
// }));



// export default function MyOrderDetailsforImgComponent(props) {
//     const [allOrderItems, setAllOrderItems] = useState();
//     const [productCategory, setProductCategory] = useState(null);
//     const [userId, setUserId] = useState(null);
//     useEffect(() => {
//         if (props.allOrderItems !== undefined && props.allOrderItems.length > 0) {
//             setAllOrderItems(props.allOrderItems);
//             setProductCategory(props.productCategory);
//             setUserId(props.userId);
//         }
//     }, [props])
//     console.log(props);
//     return (
//         <Box sx={{ flexGrow: 1, }}>

//             {props.allOrderItems && props.allOrderItems.map((ele, index) => (
                 
//                 <Grid container sx={{ xs: { display: 'flex', flexWrap: "wrap" }, justifyContent: "flex-start", }} >
               
//                     <Grid item xs={12} padding={0} sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: { xs: "center", md: "flex-start" }, alignItems: { xs: "center" }, }}>
//                         <Item square elevation={0} sx={{ position: "relative", justifyContent: { xs: "center" }, alignItems: { xs: "center" }, width: "75px", }} >

//                             <Link
//                                 to={`/buyer/trackOrder/?productCategory=${productCategory === null ? `${ele.modalName}` : productCategory}&orderItemId=${ele.data._id}&userId=${userId === null ? `${localStorage.getItem('token')}` : userId}`} style={{ textDecoration: "none" }}>
//                                 <Card square elevation={0} sx={{ maxWidth: { xs: "75px" } }}>
//                                     <ThemeProvider theme={theme}>
//                                         <CardMedia className='xs-phone-width'
//                                             component="img"
//                                             sx={{ margin: { xs: 'auto', md: "none" }, width: "70px" }}
//                                             image={`${ele.data.imgUrl[0]}`}
//                                             alt="Paella dish"
//                                         />
//                                     </ThemeProvider>
//                                 </Card>
//                             </Link>
//                         </Item>

//                         <Item square elevation={0}  >
//                         <Link
//                                 to={`/buyer/trackOrder/?productCategory=${productCategory === null ? `${ele.modalName}` : productCategory}&orderItemId=${ele.data._id}&userId=${userId === null ? `${localStorage.getItem('token')}` : userId}`} style={{ textDecoration: "none" }}>
//                                 <Typography variant='body2' color={'black'} sx={{ padding: 0, margin: 0, textAlign: "left", fontSize: "15px" }} >
//                                     {`${ele.data.companyName} ${ele.data.modelName} `}
//                                 </Typography>
//                                 <Typography variant='body2' color={'black'} sx={{ padding: 0, margin: 0, textAlign: "left", fontSize: "15px" }} >
//                                     {`(${ele.data.color} ${ele.data.internalStorage})`}
//                                 </Typography>
//                             </Link>
//                         </Item>
//                     </Grid>
//                 </Grid>
//             ))}
//         </Box>
//     );
// }


