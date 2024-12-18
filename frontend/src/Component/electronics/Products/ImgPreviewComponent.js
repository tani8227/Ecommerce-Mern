
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import { Typography } from '@mui/material';
import { Card, CardMedia, Box } from '@mui/material';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import { IconButton } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import ImgPriceComponent from './ImgPriceComponent';
// import ImgItemDetailsComponent from './ImgItemDetailsComponent';
// import ImgComponent from './ImgComponent';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
// import ImgDisplayComponent from './ImgDisplayComponent';
import useGetOneItem from '../../utility/useGetOneItem';
// import { useDispatch } from 'react-redux';
// import { Actions } from '../../reducers/AuthReducer';
import LaptopImgDisplayComponent from './laptop/LaptopImgDisplayComponent.js';
import PrinterImgDisplayComponent from './printer/PrinterImgDisplayComponent';
import CoolerImgDisplayComponent from '../../appliances/Products/cooler/CoolerImgDisplayComponent';



import LaptopImgItemDetailsComponent from './laptop/LaptopImgItemDetailsComponent.js';
import PrinterImgItemDetailsComponent from './printer/PrinterImgItemDetailsComponent';
import CoolerImgItemDetailsComponent from '../../appliances/Products/cooler/CoolerImgItemDetailsComponent';












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



export default function ImgPreviewComponent(props) {



    const param = useParams();
    console.log(props, "kkkkkkkkk");
    console.log(param.id)
    console.log(param, "kkkkkkkkk");
    const [product, setProduct] = useState({});
    const [selectedimgurl, setSelectedimgurl] = useState({});
    const [paramId, setParamId] = useState()

    if (paramId === undefined) {
        setParamId(param.id);
    }

    function handleclickimg(prodId) {

        console.log(prodId);
        setParamId(param.id)
        param.id = prodId;
        console.log(param.id);
    }


    const { item: data } = useGetOneItem(props.ProductCategory, props.oneItemdata.item && props.oneItemdata.item._id);

    console.log(data);


    useEffect(() => {


        if (data && data.imgUrl && data.imgUrl.length > 0) {

            setSelectedimgurl(data.imgUrl[0]);
            setProduct(data);
        }

    }, [data, paramId])


    function handelpreview(imgurl) {
        setSelectedimgurl(imgurl)

    }




    return (

        <Box padding={0} sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: { sm: "flex-start" }, width: "100%", height:"100%",  backgroundColor:"white" }} >

            <Grid container sx={{ display: 'flex', flexDirection: { xs: "column", sm: "column", md: "column" }, justifyContent: { sx: "center", sm: "flex-start", md: "flex-start", lg: "flex-start" }, backgroundColor: "white", gap: 1 }} >
                <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: 'column', md: "row" }, justifyContent: { xs: "center", sm: "center", md: "flex-start" }, alignItems: { xs: "center", md: "flex-start" }, flexWrap: "nowrap", gap: 2, minHeight:'350px' }}>

                    <Grid item xs={12} md={1} padding={0} order={{ xs: 2, sm: 2, md: 1 }} sx={{ display: "flex", flexDirection: { md: "column" }, justifyContent: { xs: "center", sm: "center", md: "flex-start" }, }}>
                        {product.imgUrl && product.imgUrl.map((prod, index) =>
                        (
                            <Item key={prod} square elevation={1} padding={0} sx={{ display: "flex", justifyContent: { xs: "center" }, alignItems: { xs: "center" }, width: "100%" }} >
                                <Card square elevation={0} sx={{ width: "70px", border: " 1px solid lightgrey", padding: "1px" }}>
                                    <ThemeProvider theme={theme}>
                                        <CardMedia className='xs-phone-width'

                                            component="img"
                                            sx={{ margin: "auto", width: "70px", height: "70px", objectFit: "contain", }}
                                            image={`${prod}`}
                                            onClick={() => handelpreview(prod)}

                                            alt="iphome-14"
                                        />

                                    </ThemeProvider>

                                </Card>
                            </Item>
                        ))}
                    </Grid>
                    <Grid elevation={0} item xs={12} sm={12} md={3} order={{ xs: 1, sm: 1, md: 2 }} sx={{ display: "flex", justifyContent: "center", }} >
                        <Item square elevation={0} padding={0} sx={{ display: "flex", justifyContent: { xs: "center" }, alignItems: { xs: "center" }, }} >

                           
                            {props.ProductCategory === 'Laptop' && <LaptopImgDisplayComponent ProductCategory={props.ProductCategory} img={selectedimgurl} id={param.id} />}
                            {props.ProductCategory === 'Printer' && <PrinterImgDisplayComponent ProductCategory={props.ProductCategory} img={selectedimgurl} id={param.id} />}
                            {props.ProductCategory === 'Cooler' && <CoolerImgDisplayComponent ProductCategory={props.ProductCategory} img={selectedimgurl} id={param.id} />}

                        </Item> 
                    </Grid>
                    <Grid item xs={12} md={7} order={{ xs: 3, sm: 3, md: 3 }} sx={{ display: "flex", flexWrap: "wrap", }} >
                        
                        {props.ProductCategory === 'Laptop' && <LaptopImgItemDetailsComponent ProductCategory={props.ProductCategory} product={{ product, handleclickimg }} />}
                        {props.ProductCategory === 'Printer' && <PrinterImgItemDetailsComponent ProductCategory={props.ProductCategory} product={{ product, handleclickimg }} />}
                        {props.ProductCategory === 'Cooler' && <CoolerImgItemDetailsComponent ProductCategory={props.ProductCategory} product={{ product, handleclickimg }} />}
                        
                    </Grid>
                </Box>
            </Grid>
        </Box>
    )
}