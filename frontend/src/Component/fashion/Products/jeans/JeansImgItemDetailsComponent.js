
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { List, ListItem, Typography } from '@mui/material';
import { Box, Card, ThemeProvider, createTheme, CardMedia, } from '@mui/material';
import { Link } from 'react-router-dom';
import useGetItem from '../../../utility/useGetItem';
import useFindUniqueField from '../../../utility/useFindUniqueField';

// import { useEffect, useState } from 'react';


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



export default function JeansImgItemDetailsComponent(props) {

    // const [Field, setField] = React.useState();
    console.log(props);

    const { data: allItem } = useGetItem(props.ProductCategory, props.product.product.comboId);
    // const field = useFindUniqueField(props.ProductCategory, {});


    // React.useEffect(() => {

    //     if (field) {
    //         setField(field.data);
    //     }
    // }, [field])
    // console.log(Field)
    console.log(allItem)

    if(!allItem)
        {
          
              return<h3>Loading...</h3>
        }


    return (

        <Box padding={0} width={"100%"}>

        <Grid container padding={0} >
            <Grid item xs={12} sx={{ display: "flex", flexDirection: "column", }}  >
                <Item square elevation={0}  >
                    <Typography variant='h6' color={'black'} sx={{ padding: 0, margin: 0 }} >

                    {`${props.product.product.companyName} ${props.product.product.gender} ${props.product.product.fit} ${props.product.product.rise} ${props.product.product.color} ${props.ProductCategory}`}
                    </Typography>

                    <Typography variant='h4' sx={{ color: "black", display: "inline-block" }}>
                        &#8377;0.0

                    </Typography>&nbsp;


                    &#8377;<Typography variant='span' sx={{ color: "green" }}><del>{props.product.product.price}</del></Typography> <Typography variant='span' sx={{ color: "green" }}>100% off</Typography>



                    <List  sx={{ padding: 0, margin: 0 }}>
                        <Typography variant='h6' color={'grey'} sx={{ padding: 0, margin: 0, fontWeight: 500 }} >

                            Highlights

                            <ListItem sx={{ padding: 0, margin: 0, display: 'list-item', listStyleType: 'disc', }}>
                                <Typography variant='body2' sx={{ color: "black" }}>
                                    {`${props.product.product.distressed}`}
                                </Typography>

                            </ListItem>
                            <ListItem sx={{ padding: 0, margin: 0, display: 'list-item', listStyleType: 'disc', }}>
                                <Typography variant='body2' sx={{ color: "black" }}>
                                    {`${props.product.product.fabric}`}
                                </Typography>

                            </ListItem>

                            <ListItem sx={{ padding: 0, margin: 0, display: 'list-item', listStyleType: 'disc', }}>
                                <Typography variant='body2' sx={{ color: "black" }}>
                                    {`${props.product.product.rise}`}
                                </Typography>

                            </ListItem>

                            <ListItem sx={{ padding: 0, margin: 0, display: 'list-item', listStyleType: 'disc' }}>
                                <Typography variant='body2' sx={{ color: "black" }}>
                                    {`${props.product.product.fit} Fit`}
                                </Typography>

                            </ListItem>
                            <ListItem sx={{ padding: 0, margin: 0, display: 'list-item', listStyleType: 'disc', }}>
                                <Typography variant='body2' sx={{ color: "black" }}>
                                    {`${props.product.product.color} | size:${props.product.product.size}`}
                                </Typography>

                            </ListItem>

                        </Typography>
                    </List>
                </Item>

                <Item

                    square
                    elevation={0}
                    padding={0}

                >
                    <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", flexWrap: 'wrap', gap: 2, }}>
                        {allItem && allItem.length > 0 &&
                            <Typography variant='body2' sx={{ color: "grey", fontWeight: 600, fontSize: "15px" }}>
                                Color:
                            </Typography>
                        }
                        {allItem && allItem.map((ele, index) => (

                            <Link key={ele._id} to={`/Fashion/${props.ProductCategory}/${ele._id}`}>
                                <Card
                                   
                                    square
                                    elevation={0}

                                    sx={{ width: "100%", objectFit: "contain", border: "1px solid lightgrey", padding: "1px" }}
                                >
                                    <ThemeProvider theme={theme}>
                                        <CardMedia
                                            className='xs-phone-width'
                                            component="img"
                                            sx={{ margin: "auto", maxWidth: "150px", maxHeight: "150px", minwidth: "80px", minHeight: "80px", objectFit: "contain" }}
                                            image={`${ele.imgUrl[0].replace("http://", "https://")}`}
                                           
                                            alt="Color representation"
                                        />
                                    </ThemeProvider>
                                </Card>
                            </Link>

                        ))}
                    </Box>
                </Item>


                {/* <Item square elevation={0} sx={{ width: "fit-content" }}>
                    <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", flexWrap: 'wrap', gap: 2, }}>
                    {Field && Field.length > 0 &&
                            <Typography variant='body2' sx={{ color: "grey", fontWeight: 600, fontSize: "15px" }}>
                                Capacity:
                            </Typography>
                        }
                        {Field && Field.length > 0 && Field.map((ele, index) => (


                            <Link to={`/Fashion/${props.ProductCategory}/${ele.id}`} style={{ textDecoration: "none", }}>

                                <Typography variant='body2' sx={{ color: "#2874f0", fontWeight: 500, fontSize: "15px", border: "2px solid #2874f0", padding: "2px" }}>
                                    {`${ele.storageCapacity}`}
                                </Typography>


                            </Link>


                        ))}
                    </Box>
                </Item> */}
            </Grid>
        </Grid>

    </Box>
    )

}