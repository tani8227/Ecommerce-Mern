import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Card, CardMedia, CardActions, Box,  Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import useGetOneItem from '../utility/useGetOneItem';
import useAddToCard from '../utility/useAddToCard';
// import { useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';



const theme = createTheme({
    components: {
        MuiCardMedia: {
            styleOverrides: {
                root: {
                    width: 'fit-content',
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

export default function ImgDisplayComponent(props) {

    console.log(props);
    const [defaultImg, setDefaultImg] = useState()
    const [product, setProduct]= useState();
    const { item: data } = useGetOneItem(props.ProductCategory,props.id);
    const handleAddToCart = useAddToCard();
    const [isClicked, setIsClicked]= useState(false);
    const [loader, setLoader]=useState(false);
   
       console.log(data);
    useEffect(() => {
        function get()
        {

            if (data && data.imgUrl && data.imgUrl.length > 0) {
               
                setProduct(data);
                setDefaultImg(data.imgUrl[0]);
                setLoader(true)
               
            }
        }
        get()
    }, [data, product]); 



      function addToCard(mainCategory,schemaCollectionName,prodId , type)
      {
        handleAddToCart(mainCategory,schemaCollectionName,prodId, type); 
      }



const handleClick = () => {
    if (!isClicked) {

        console.log("yes clicked ");
      handleAddToCart('Mobile',props.ProductCategory, props.id, 'orderpreview');
      setIsClicked(true);
    }
  };
         
  if(!loader)
    {
        return <h3 style={{textAlign:'center'}}></h3>
    }


  
    return (

        <ThemeProvider theme={theme}>
            <Box padding={0}>
                <Grid

                    container
                    sx={{ xs: { display: 'flex', flexWrap: 'wrap' }, justifyContent: 'center', }}
                >
                    <Grid
                        item
                        xs={12}
                        padding={0}
                        sx={{ display: 'flex' }}
                    >
                        <Item

                            square
                            elevation={1}
                            sx={{ position: 'relative', justifyContent: { xs: 'center' }, alignItems: { xs: 'center' } }}
                        >

                            <Card square elevation={0} sx={{ width:"100%", objectFit:"contain"}}>
                                <CardMedia
                                    component="img"
                                    sx={{ margin: 'auto',minWidth:"220px", maxWidth:"250px", maxHeight:"250px", objectFit:"contain" }}
                                    image={`${props.img&&props.img.length === undefined ? defaultImg : props.img}`.replace("http://", "https://")}
                                    alt={`iphone-14`}
                                />
                            </Card>
                            <CardActions sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: { xs: "center" }, justifyContent: { sm: "center" } }}>
                               
                                <Button variant='contained' sx={{ backgroundColor: "#ff9f00", fontSize:"small" }} onClick={()=>{addToCard('Mobile',props.ProductCategory,data._id,'cartpreview' )}}>

                                    ADD TO CART
                                </Button>
                   
                                &nbsp;
                                <Link to={`/product/preview/?ProductCategory=${props.ProductCategory}&id=${props.id}&img=${props.img}`}>
                                <Button 
                                variant='contained' 
                                sx={{ backgroundColor: "#fb641b" }} 
                                onClick={handleClick} 
                                disabled={isClicked} 
                                >

                                    BUY NOW
                                </Button>
                                </Link>

                            </CardActions>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider >

    );
}
