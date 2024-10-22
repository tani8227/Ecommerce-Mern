
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { List, ListItem, Typography } from '@mui/material';
import { Box, Card, ThemeProvider, createTheme, CardMedia, } from '@mui/material';
import { Link } from 'react-router-dom';
import useGetItem from '../utility/useGetItem';




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
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));



export default function ImgItemDetailsComponent({ product }) {

    const { data: allItem } = useGetItem('mobile', product.product.modelName);

    return (
        <Box padding={0} width={"100%"}>

            <Grid container padding={0} >
                <Grid item xs={12} md={'auto'} sx={{ display: "flex", flexDirection: "column", }} >

                    <Item square elevation={0}  >
                        <Typography variant='h6' color={'black'} sx={{ padding: 0, margin: 0 }} >

                            {`${product.product.companyName} ${product.product.modelName} (${product.product.color} ${product.product.internalStorage})`}
                        </Typography>
                        <Typography variant='h4' sx={{ color: "black", display: "inline-block" }}>
                            &#8377;0.0

                        </Typography>&nbsp;


                        &#8377;<Typography variant='span' sx={{ color: "green" }}><del>{product.product.price}</del></Typography> <Typography variant='span' sx={{ color: "green" }}>100% off</Typography>



                        <List key={product.product._id} sx={{ padding: 0, margin: 0 , flexWrap:"wrap"}}>
                            <Typography variant='h6' color={'grey'} sx={{ padding: 0, margin: 0, fontWeight: 500, flexWrap:"wrap" }} >

                                Highlights

                                <ListItem sx={{ padding: 0, margin: 0, display: 'list-item', listStyleType: 'disc', }}>
                                    <Typography variant='body2' sx={{ color: "black" }}>
                                        {`${product.product.internalStorage} ROM`}
                                    </Typography>

                                </ListItem>
                                <ListItem sx={{ padding: 0, margin: 0, display: 'list-item', listStyleType: 'disc', }}>
                                    <Typography variant='body2' sx={{ color: "black" }}>
                                        {`${product.product.displaySize}  ${product.product.resolutionType}`}
                                    </Typography>

                                </ListItem>
                                <ListItem sx={{ padding: 0, margin: 0, display: 'list-item', listStyleType: 'disc', }}>
                                    <Typography variant='body2' sx={{ color: "black" }}>
                                        {`${product.product.primaryCamera} | ${product.product.secondaryCamera}`}
                                    </Typography>

                                </ListItem>
                                <ListItem sx={{ padding: 0, margin: 0, display: 'list-item', listStyleType: 'disc',flexWrap:'wrap' }}>
                                    <Typography variant='body2' sx={{ color: "black" }}>
                                        {`${product.product.warranty}`}
                                    </Typography>

                                </ListItem>

                            </Typography>
                        </List>
                    </Item>
                    <Item

                        square
                        elevation={0}
                        padding={0}
                        sx={{

                            display: "flex",
                            flexWrap: 'wrap',
                            justifyContent: { xs: "space-evenly" },
                            alignItems: { xs: "center" }
                        }}
                    >
                        <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", flexWrap: 'wrap', gap: 2, }}>

                            {allItem && allItem.length > 0 &&
                                <Typography variant='body2' sx={{ color: "grey", fontWeight: 600, fontSize: "15px" }}>
                                    Color:
                                </Typography>
                            }
                            {allItem && allItem.map((ele, index) => (

                                <Link key={`${ele._id}`} to={`/Mobile/${ele._id}`}>
                                    <Card
                                        
                                        square
                                        elevation={0}

                                        sx={{ minWidth: "80pxx", border: "1px solid lightgrey", padding: "1px" }}
                                    >
                                        <ThemeProvider theme={theme}>
                                            <CardMedia
                                                className='xs-phone-width'
                                                component="img"
                                                sx={{ margin: "auto", width: "70px", height: "70px", objectFit: "contain" }}
                                                image={`${ele.imgUrl[0].replace("http://", "https://")}`}
                                                onClick={() => { product.handleClickImg(`${ele.imgUrl[0]}`) }}
                                                alt="Color representation"
                                            />
                                        </ThemeProvider>
                                    </Card>
                                </Link>

                            ))}
                        </Box>
                    </Item>

                </Grid>
            </Grid>

        </Box>
    )
}