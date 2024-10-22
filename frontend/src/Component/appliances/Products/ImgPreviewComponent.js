
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { Card, CardMedia, Box } from '@mui/material';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import { IconButton } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// import ImgItemDetailsComponent from './ImgItemDetailsComponent';
// import ImgComponent from './ImgComponent';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
// import ImgDisplayComponent from './ImgDisplayComponent';
import useGetOneItem from '../../utility/useGetOneItem';
// import { useDispatch } from 'react-redux';
// import { Actions } from '../../reducers/AuthReducer';
import LedTVImgItemDetailsComponent from './LedTV/LedTVImgItemDetailsComponent';
import LedTVImgDisplayComponent from '../Products/LedTV/LedTVImgDisplayComponent';
import FridgeImgItemDetailsComponent from './fridge/FridgeImgItemDetailsComponent';
import FridgeImgDisplayComponent from './fridge/FridgeImgDisplayComponent'
import WashingMachineImgItemDetailsComponent from './washingMachine/WashingMachine_ImgItemDetailsComponent.js'
import WashingMachineImgDisplayComponent from './washingMachine/WashingMachine_ImgDisplayComponent.js'
import CoolerImgDisplayComponent from './cooler/CoolerImgDisplayComponent';
import CoolerImgItemDetailsComponent from './cooler/CoolerImgItemDetailsComponent';
import ACImgDisplayComponent from './ac/ACImgDisplayComponent';
import ACImgItemDetailsComponent from './ac/ACImgItemDetailsComponent';

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
                <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: 'column', md: "row" }, justifyContent: { xs: "center", sm: "center", md: "flex-start" }, alignItems: { xs: "center", md: "flex-start" }, flexWrap: "nowrap", gap: 2 }}>

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

                            {props.ProductCategory === 'LedTV' && <LedTVImgDisplayComponent ProductCategory={props.ProductCategory} img={selectedimgurl} id={param.id} />}
                            {props.ProductCategory === 'Fridge' && <FridgeImgDisplayComponent ProductCategory={props.ProductCategory} img={selectedimgurl} id={param.id} />}
                            {props.ProductCategory === 'WashingMachine' && <WashingMachineImgDisplayComponent ProductCategory={props.ProductCategory} img={selectedimgurl} id={param.id} />}
                            {props.ProductCategory === 'Cooler' && <CoolerImgDisplayComponent ProductCategory={props.ProductCategory} img={selectedimgurl} id={param.id} />}
                            {props.ProductCategory === 'AC' && <ACImgDisplayComponent ProductCategory={props.ProductCategory} img={selectedimgurl} id={param.id} />}
                            {props.ProductCategory === 'WaterPurifier' && <CoolerImgDisplayComponent ProductCategory={props.ProductCategory} img={selectedimgurl} id={param.id} />}

                        </Item> 
                    </Grid>
                    <Grid item xs={12} md={7} order={{ xs: 3, sm: 3, md: 3 }} sx={{ display: "flex", flexWrap: "wrap", }} >
                        
                        {props.ProductCategory === 'Fridge' && <FridgeImgItemDetailsComponent ProductCategory={props.ProductCategory} product={{ product, handleclickimg }} />}
                        {props.ProductCategory === 'LedTV' && <LedTVImgItemDetailsComponent ProductCategory={props.ProductCategory} product={{ product, handleclickimg }} />}
                        {props.ProductCategory === 'WashingMachine' && <WashingMachineImgItemDetailsComponent ProductCategory={props.ProductCategory} product={{ product, handleclickimg }} />}
                        {props.ProductCategory === 'Cooler' && <CoolerImgItemDetailsComponent ProductCategory={props.ProductCategory} product={{ product, handleclickimg }} />}
                        {props.ProductCategory === 'AC' && <ACImgItemDetailsComponent ProductCategory={props.ProductCategory} product={{ product, handleclickimg }} />}
                        {props.ProductCategory === 'WaterPurifier' && <CoolerImgItemDetailsComponent ProductCategory={props.ProductCategory} product={{ product, handleclickimg }} />}
                        
                    </Grid>
                </Box>
            </Grid>
        </Box>
    )
}