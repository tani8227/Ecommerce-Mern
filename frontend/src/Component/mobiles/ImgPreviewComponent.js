
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import { Typography } from '@mui/material';
import { Card, CardMedia, Box } from '@mui/material';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import { IconButton } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import ImgItemDetailsComponent from './ImgItemDetailsComponent';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import ImgDisplayComponent from './ImgDisplayComponent';
import useGetOneItem from '../utility/useGetOneItem';
// import { useDispatch } from 'react-redux';
// import { Actions } from '../../reducers/AuthReducer';

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
    console.log(props);
    // const dispatch= useDispatch();
    const [product, setProduct] = useState({});
    const [selectedimgurl, setSelectedimgurl] = useState();
    const { item: data } = useGetOneItem(props.ProductCategory, props.oneItemdata.item && props.oneItemdata.item._id);

    useEffect(() => {
        if (selectedimgurl === undefined && props.oneItemdata && props.oneItemdata.item && props.oneItemdata.item.imgUrl && props.oneItemdata.item.imgUrl.length > 0) {
            setSelectedimgurl(props.oneItemdata.item.imgUrl[0]);
        }
    }, [selectedimgurl, props.oneItemdata])

    useEffect(() => {

        function get() {

            if (data && data.imgUrl && data.imgUrl.length > 0) {

                if (selectedimgurl === undefined && data.imgUrl.length > 0) {
                    setSelectedimgurl(data.imgUrl[0]);


                } else {
                    if (product && product.id !== data.id) {
                        setSelectedimgurl(data.imgUrl[0])

                    }
                }
                setProduct(data);

            }


        }
        get();
    }, [data, product, selectedimgurl])

    function handleClickImg(imgurl) {

        setSelectedimgurl(imgurl);
    }

    return (
        <Box padding={0} sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: { sm: "flex-start" }, width: "100%", height: "100%", backgroundColor: "white" }} >

            <Grid container sx={{ display: 'flex', flexDirection: { xs: "column", sm: "column", md: "column" }, justifyContent: { sx: "center", sm: "flex-start", md: "flex-start", lg: "flex-start" }, backgroundColor: "white", gap: 1 }} >
                <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: 'column', md: "row" }, justifyContent: { xs: "center", sm: "center", md: "flex-start" }, alignItems: { xs: "center", md: "flex-start" }, flexWrap: "nowrap", gap: 2, minHeight:'350px' }}>

                    <Grid item xs={12} md={1} padding={0} order={{ xs: 2, sm: 2, md: 1 }} sx={{ display: "flex", flexDirection: { md: "column" }, justifyContent: { xs: "center", sm: "center", md: "flex-start", flexWrap: 'nowrap' }, }}>
                        {product.imgUrl && product.imgUrl.map((prod, index) =>
                        (
                            <Item key={prod} square elevation={1} padding={0} sx={{ display: "flex", justifyContent: { xs: "center" }, alignItems: { xs: "center" }, width: "100%" }} >
                                <Card square elevation={0} sx={{ width: "70px", border: " 1px solid lightgrey", padding: "1px", flexWrap: 'nowrap' }}>
                                    <ThemeProvider theme={theme}>
                                        <CardMedia className='xs-phone-width'

                                            component="img"
                                            sx={{ margin: "auto", width: "70px", height: "70px", objectFit: "contain", }}
                                            image={`${prod.replace("http://", "https://")}`}
                                            onClick={() => handleClickImg(prod)}

                                            alt="iphome-14"
                                        />

                                    </ThemeProvider>

                                </Card>
                            </Item>
                        ))}
                    </Grid>
                    <Grid elevation={0} item xs={12} sm={12} md={3} order={{ xs: 1, sm: 1, md: 2 }} sx={{ display: "flex", justifyContent: "center", flexWrap: 'nowrap' }} >
                        <Item square elevation={0} padding={0} sx={{ display: "flex", justifyContent: { xs: "center" }, alignItems: { xs: "center" }, flexWrap: 'nowrap' }} >

                            <ImgDisplayComponent img={selectedimgurl} id={param.id} ProductCategory={props.ProductCategory} />

                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} order={{ xs: 3, sm: 3, md: 3 }} sx={{ display: "flex", flexWrap: "wrap", }} >

                        <ImgItemDetailsComponent product={{ product, handleClickImg }} />

                    </Grid>
                </Box>
            </Grid>
        </Box>
    )
}