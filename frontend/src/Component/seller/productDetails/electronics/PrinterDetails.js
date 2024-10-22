import React, { useEffect, useState } from "react"
import { Typography, Paper, styled, Box, Card, createTheme, CardMedia, ThemeProvider, Grid, Button } from '@mui/material';
import { Link } from "react-router-dom";


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

export default function MobileDetails(props) {
 

    const [cartItem, setCartItem] = useState();
    
 
    // const order = useToGetAllOrderForSeller(props.data)

    console.log(props)
    useEffect(() => {
        if(props.data!==undefined)
        {
            setCartItem(props.data)
           
        }
        
    }, [props, cartItem , ]);

   

    console.log(cartItem);
    return (
        <>
             {cartItem && cartItem.map((ele, index) => (

                <Box key={ele._id} sx={{ display: "flex", flexDirection: { xs: "column", sm:'column-reverse', md: "row" }, justifyContent: { xs: "center", sm: "center", md: "space-evenly" }, alignItems: { xs: "center",sm:'center', md: "center" }, flexWrap: "nowrap", borderBottom: '1px solid lightgrey', padding: 1 }}>
                 <Grid item xs={12} sm={12} md={3} padding={0} order={{ xs: 2, sm: 2, md: 1 }} sx={{ display: "flex", justifyContent: { xs: "center", sm: "center", md: "flex-start" } }}>
                        <Card square elevation={0} sx={{ width: "100px", border: "1px solid lightgrey", padding: "1px" }}>
                            <ThemeProvider theme={theme}>
                                <CardMedia
                                    component="img"
                                    sx={{ margin: "auto", width: "100px", height: "100px", objectFit: "contain" }}
                                    image={`${ele.imgUrl[0]}`}
                                    alt="iphone-14"
                                />
                            </ThemeProvider>
                        </Card>
                    </Grid> 

                    <Grid item xs={12} sm={12} md={4} order={{ xs: 1, sm: 1, md: 2 }} sx={{ display: "flex", flexDirection: { xs: "column", sm: 'column', md: "row" }, justifyContent: { xs: "center", sm: "center", md: "space-evenly" }, alignItems: { xs: "center", md: "flex-start" }, gap: 1 }}>
                        <Item square elevation={0} >
                            <Typography variant='body2' sx={{ padding: 0, textAlign: "left", fontSize: "15px" }}>
                            {`${ele.companyName} ${ele.modelName} ${ele.type} Printer `}
                            </Typography>
                            <Typography variant='body2' sx={{ color: "black", fontSize: "21px", display: 'flex', justifyContent: { xs: "center", sm: 'flex-start' } }}>
                                &#8377;0.0
                            </Typography>
                            <Typography variant='span' sx={{ color: "green", display: 'flex', justifyContent: { xs: "center", sm: 'flex-start' } }}>
                                <del>
                                    {ele.price}
                                </del>
                            </Typography>
                            <Typography variant='span' sx={{ color: "green", display: 'flex', justifyContent: { xs: "center", sm: 'flex-start' } }}>
                                100% off
                            </Typography>
                        </Item>
                        <Item square elevation={0}>
                            <Typography variant='body2' sx={{ padding: 0, textAlign: "left", fontSize: "15px" }}>
                                {`Qty ${ele.quantity} In Stock`}
                            </Typography>
                        </Item>
                    </Grid>
                      <Grid item xs={12} sm={12} md={4} order={{ xs: 1, sm: 1, md: 2 }} sx={{ display: "flex",flexDirection: { xs: "column", sm: 'column', md: "row" }, justifyContent: { xs: "center", sm: "center", md: "space-evenly" }, alignItems: { xs: "center",sm:'center', md: "flex-start" }, gap: 1 }}>
                      <Item square elevation={0}>
                      <Link to={`/seller/productManagement/updateProduct/${props.modalName}/?ProductCategory=${props.modalName}&itemId=${ele._id}`}>
                            <Button
                              variant='contained' 
                              sx={{ backgroundColor: "#fb641b" }} 
                              
                              >
                               Update                                 
                            </Button>
                                </Link>
                        </Item>
                        <Item square elevation={0}>
                            <Button
                                 variant='contained' 
                                 sx={{ backgroundColor: "#fb641b" }} 
                                 onClick={()=>{props.handledelete(props.modalName,ele._id)}} 
                            >
                                Delete
                            </Button>
                        </Item>
                    </Grid>  
                
                </Box>
            ))}
        </> 
    )
}











