import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Card, CardMedia, CardActions, Box, Typography, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useDispatch, } from 'react-redux';

import { Link } from 'react-router-dom';
const theme = createTheme({
    components: {
        MuiCardMedia: {
            styleOverrides: {
                root: {
                    width: '50%',
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

export default function ImgComponent({data}) {
    
    const [flourData, setFlourData] = useState();
    const dispatch = useDispatch();
   
    useEffect(() => {
        setFlourData(data);
    }, [data, dispatch]);
 console.log(data);
    return (
        <ThemeProvider theme={theme}>
            <Box padding={0} width={"100%"}>
                <Grid
                    container
                    sx={{ xs: { display: 'flex', flexWrap: 'wrap' }, justifyContent: 'center', }}
                >
                    <Grid
                        item
                        xs={12}
                        padding={0}
                        sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}
                    >
                          {flourData&& flourData.slice(0, 4).map((ele, index) => (
                            <Item
                                key={ele._id}
                                square
                                elevation={1}
                                sx={{ position: 'relative', justifyContent: { xs: 'center' }, alignItems: { xs: 'center' }, minWidth: "200px" }}
                            >
                                <CardActions disableSpacing>
                                    <IconButton
                                        aria-label="add to favorites"
                                        sx={{ position: 'absolute', top: '-8px', right: '1px', color: 'lightgrey' }}
                                    >
                                        <FavoriteIcon sx={{ width: { xs: '20px' } }} />
                                    </IconButton>
                                </CardActions>
                                <Link to={`${ele._id}`} style={{ textDecoration: 'none' }}>
                                    <Card square elevation={0} sx={{ idth: { xs: '180px' } }}>
                                        <CardMedia
                                            component="img"
                                            sx={{ margin: 'auto', width: "180px", height:"180px", objectFit:"contain" }}
                                            image={`${ele.imgUrl[0].replace("http://", "https://")}`}
                                            alt={`${ele.companyName}`}
                                        />

                                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '16px', color: 'black' }}>
                                            {`${ele.companyName} ${ele.capacity} (${ele.gender})`}
                                        </Typography>
                                        <Typography variant="h4" sx={{ color: 'green' }}>
                                            &#8377;0.0
                                        </Typography>
                                        <Typography variant="span" sx={{ color: 'green' }}>
                                            <del>{ele.price}</del>
                                        </Typography>
                                        <Typography variant="span" sx={{ color: 'green' }}>100% off</Typography>
                                    </Card>
                                </Link>
                            </Item>
                        ))} 
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}
