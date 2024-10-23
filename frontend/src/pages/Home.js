import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Paper, Card, CardMedia } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import grocery from '../images/porductbarImages/grocery.png';
import fashion from '../images/porductbarImages/fashion.png';
import mobile from '../images/porductbarImages/mobile.png';
import electronics from "../images/porductbarImages/electronics.png";
import appliances from '../images/porductbarImages/appliances.png';
import manymore from '../images/porductbarImages/toy&manyMore.png';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Carousel from '../Component/CarouselComponent.js'; 



import useToGetHomeMobileData from '../Component/utility/useToGetHomeMobileData.js';
import useToGetHomeFashionData from '../Component/utility/useToGetHomeFashionData.js';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Home() {


    const [AllMobileCompanies, setAllMobileCompanies] = useState();
    const [AllFashionCompanies, setAllFashionCompanies] = useState();


    const mobiledata = useToGetHomeMobileData();
    const fashiondata = useToGetHomeFashionData();


    useEffect(() => {
        if (mobiledata) {
            setAllMobileCompanies(mobiledata);
        }
    }, [mobiledata]);

    useEffect(() => {
        if (fashiondata) {
            setAllFashionCompanies(fashiondata);
        }
    }, [fashiondata]);


    console.log(AllMobileCompanies)
    console.log(AllFashionCompanies)
 
    return (
        <Box>
            <Box sx={{ padding: { sm: 2 }, flexGrow: 1, overflowX: 'scroll',  scrollbarWidth: 'none',  msOverflowStyle: 'none',  backgroundColor: { xs: 'white', sm: "#f1f2f4" },  }}>
                <Grid container spacing={0} sx={{ display: 'flex', flexWrap: 'nowrap', justifyContent: { xs: 'flex-start', sm: 'space-evenly' }, alignItems: 'center', backgroundColor: 'white' }}>
                    <Grid item xs={6} sm={1}>
                        <Link to={"/Grocery"} style={{ listStyle: 'none', textDecoration: 'none' }}>
                            <Item square elevation={0} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '90px' }}>
                                <img src={grocery} alt='Grocery' style={{ width: '84px' }} />
                                <Typography fontSize={15} color={'black'}>Grocery</Typography>
                            </Item>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={1}>
                        <Link to={"/Mobile"} style={{ listStyle: 'none', textDecoration: 'none' }}>
                            <Item square elevation={0} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '90px' }}>
                                <img src={mobile} alt='Mobile' style={{ width: '80px' }} />
                                <Typography fontSize={15} color={'black'}>Mobile</Typography>
                            </Item>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={1}>
                        <Link to={"/Fashion"} style={{ listStyle: 'none', textDecoration: 'none' }}>
                            <Item square elevation={0} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '90px' }}>
                                <img src={fashion} alt='Fashion' style={{ width: '66px' }} />
                                <Typography fontSize={15} color={'black'}>Fashion</Typography>
                            </Item>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={1}>
                        <Link to={"/Electronics"} style={{ listStyle: 'none', textDecoration: 'none' }}>
                            <Item square elevation={0} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '90px' }}>
                                <img src={electronics} alt='Electronics' style={{ width: '80px' }} />
                                <Typography fontSize={15} color={'black'}>Electronics</Typography>
                            </Item>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={1}>
                        <Link to={"/Appliances"} style={{ listStyle: 'none', textDecoration: 'none' }}>
                            <Item square elevation={0} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '90px' }}>
                                <img src={appliances} alt='Appliances' style={{ width: '92px' }} />
                                <Typography fontSize={15} color={'black'}>Appliances</Typography>
                            </Item>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={1}>
                        {/* <Link to={"/ManyMore"} style={{ listStyle: 'none', textDecoration: 'none' }}> */}
                            <Item square elevation={0} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '90px' }}>
                                <img src={manymore} alt='ManyMore' style={{ width: '79px' }} />
                                <Typography fontSize={15} color={'black'}>Many More</Typography>
                            </Item>
                        {/* </Link> */}
                    </Grid>
                </Grid>

            </Box>


            <Box sx={{ paddingLeft: { xs: 2 }, paddingRight:{xs:2}, flexGrow: 1, backgroundColor: { xs: 'white', sm: "#f1f2f4" }, borderBottom:{xs: "1px solid lightgrey", sm:'none'}}}>
                <Grid container spacing={0} sx={{ display: 'flex', flexDirection: "column", flexWrap: 'nowrap', alignItems: { xs: 'flex-start', sm: 'space-evenly' },  backgroundColor: 'white' }}>


                    <Grid item xs={12} sx={{ display: 'flex', flexWrap: 'nowrap', justifyContent: { xs: 'flex-start', sm: 'space-evenly' }, alignItems: 'center', backgroundColor: 'white', padding: 1, width: '100%' }}>
                       
                            <Item square  elevation={1} sx={{ position: 'relative', justifyContent: { xs: 'center' }, alignItems: { xs: 'center' }, minWidth: "200px" }}>
                                 <Carousel />
                            </Item>
                   
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ padding: { sm: 2 }, flexGrow: 1, backgroundColor: { xs: 'white', sm: "#f1f2f4" } }}>
                <Grid container spacing={0} sx={{ display: 'flex', flexDirection: "column", flexWrap: 'nowrap', alignItems: { xs: 'flex-start', sm: 'space-evenly' },  backgroundColor: 'white' }}>
                    <Grid item xs={12} sx={{ display: "flex", flexDirection: 'row', justifyContent: "flex-start", width: "100%", borderBottom: "1px solid lightgrey" }}>
                        <Item square elevation={0} sx={{ display: "flex", justifyContent: "flex-start", }}>

                            <Typography variant='h6'>
                                Best Deals on Mobiles
                            </Typography>
                        </Item>
                    </Grid>

                    <Grid item xs={12} sx={{ display: 'flex', overflowX: 'scroll', scrollbarWidth: 'none',  msOverflowStyle: 'none',  flexWrap: 'nowrap', justifyContent: { xs: 'flex-start', sm: 'space-evenly' }, alignItems: 'center', backgroundColor: 'white', padding: 1, width: '100%' }}>
                        {AllMobileCompanies && AllMobileCompanies.data && AllMobileCompanies.data.length > 0 && AllMobileCompanies.data.map((ele, index) =>
                        (
                            <Link key={ele._id || index} to={`/${AllMobileCompanies.modalName}`}>
                                <Item
                                    square

                                    elevation={1}
                                    sx={{ position: 'relative', justifyContent: { xs: 'center' }, alignItems: { xs: 'center' }, minWidth: "200px" }}
                                >

                                    <Card square elevation={0} sx={{ width: { xs: '180px' } }}>
                                        <CardMedia
                                            component="img"
                                            sx={{ margin: 'auto', width: "180px", height: "180px", objectFit: "contain" }}
                                            image={ele.imgUrl[0].replace("http://", "https://")}
                                        />
                                    </Card>
                                </Item>
                            </Link>
                        ))}
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{paddingLeft: { xs: 2 }, paddingRight:{xs:2}, flexGrow: 1, backgroundColor: { xs: 'white', sm: "#f1f2f4" }, gap: '8px' }}>
                <Grid container spacing={0} sx={{ display: 'flex', flexDirection: "column", flexWrap: 'nowrap', justifyContent: { xs: 'flex-start', sm: 'space-evenly' }, alignItems: 'center', backgroundColor: 'white' }}>
                    <Grid item xs={12} sx={{ display: "flex", flexDirection: 'row', justifyContent: "flex-start", width: "100%", borderBottom: "1px solid lightgrey" }}>
                        <Item square elevation={0} sx={{ display: "flex", justifyContent: "flex-start", }}>

                            <Typography variant='h6'>
                                Best Deals on Fashion
                            </Typography>
                        </Item>
                    </Grid>

                    <Grid item xs={12} sx={{ display: 'flex', overflowX: 'scroll', scrollbarWidth: 'none',  msOverflowStyle: 'none',  flexWrap: 'nowrap', justifyContent: { xs: 'flex-start', sm: 'space-evenly' }, alignItems: 'center', backgroundColor: 'white', padding: 1, width: '100%' }}>
                        {AllFashionCompanies && AllFashionCompanies.length > 0 && AllFashionCompanies.map((ele, index) => {

                            if (ele?.data?.length > 0) {
                                return (
                                    <Link key={ele._id || index} to={`/Fashion/${ele.modalName}`}>
                                        <Item

                                            square
                                            elevation={1}
                                            sx={{ position: 'relative', justifyContent: { xs: 'center' }, alignItems: { xs: 'center' }, minWidth: "200px" }}
                                        >
                                            <Card square elevation={0} sx={{ width: { xs: '180px' } }}>
                                                <CardMedia
                                                    component="img"
                                                    sx={{ margin: 'auto', width: "180px", height: "180px", objectFit: "contain" }}
                                                    image={ele.data[0].imgUrl?.[0].replace("http://", "https://")}
                                                    alt={ele?.data[0]?.name}
                                                />
                                            </Card>
                                        </Item>
                                    </Link>
                                );
                            }
                            return null;
                        })}
                    </Grid>
                </Grid>
            </Box> 



        </Box>
    );
}
