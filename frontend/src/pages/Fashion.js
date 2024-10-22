import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Card, CardMedia } from '@mui/material';
import { Link } from "react-router-dom";
import Shirt from '../images/FashionCoverImg/Shirt/Shirt.jpeg'
import Tshirt from '../images/FashionCoverImg/Tshirt/Tshirt.webp'
import Shoe from '../images/FashionCoverImg/Shoe/shoe.jpg'
import TrackPant from '../images/FashionCoverImg/TrackPant/TrackPant.jpg'
import Jeans from '../images/FashionCoverImg/Jeans/Jeans.jpeg'
import WindCheater from '../images/FashionCoverImg/WindCheater/WindCheater.jpg'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

function MainFashion(props) {
  console.log("MainFashion component rendered");
  return (
    <Box sx={{ flexGrow: 1, padding: 1 }}>
      <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: "center", backgroundColor: "white", flexWrap: "wrap" }} >
        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: "center" }}>
          <Item square elevation={0}>
            <Link to={`/${props.productCategory}/Shirt`}>
              <Card sx={{ maxWidth: "fit-content" }}>
                <CardMedia
                  component="img"
                  sx={{ maxWidth: '300px', objectFit: "contain" }}
                  image={Shirt}
                  title="green iguana"
                />
              </Card>
            </Link>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: "center" }}>

          <Item square elevation={0}>
            <Link to={`/${props.productCategory}/Tshirt`}>
              <Card sx={{ maxWidth: "fit-content" }}>
                <CardMedia
                  component="img"
                  sx={{ maxWidth: { sm: '350px', xs: '300px' }, maxHeight: '280px', objectFit: "contain" }}
                  image={Tshirt}
                  title="green iguana"
                />
              </Card>
            </Link>
          </Item>
        </Grid>

        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: "center" }}>
          <Item square elevation={0}>
            <Link to={`/${props.productCategory}/TrackPant`}>
              <Card sx={{ maxWidth: "fit-content" }}>
                <CardMedia
                  component="img"
                  sx={{ maxWidth: '300px', objectFit: "contain" }}
                  image={TrackPant}
                  title="green iguana"
                />
              </Card>
            </Link>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: "center" }}>


          <Item square elevation={0}>
            <Link to={`/${props.productCategory}/Shoe`}>
              <Card sx={{ maxWidth: "fit-content" }}>
                <CardMedia
                  component="img"
                  sx={{ maxWidth: '300px', objectFit: "contain" }}
                  image={Shoe}
                  title="green iguana"
                />
              </Card>
            </Link>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: "center" }}>

          <Item square elevation={0}>
            <Link to={`/${props.productCategory}/Jeans`}>
              <Card sx={{ width: "fit-content" }}>
                <CardMedia
                  component="img"
                  sx={{ maxWidth: { md: '350px', xs: '300px' }, objectFit: "contain" }}
                  image={Jeans}
                  title="green iguana"
                />
              </Card>
            </Link>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: "center" }}>

          <Item square elevation={0}>
            <Link to={`/${props.productCategory}/WindCheater`}>
              <Card sx={{ width: "fit-content" }}>
                <CardMedia
                  component="img"
                  sx={{ maxWidth: '300px', objectFit: "contain" }}
                  image={WindCheater}
                  title="green iguana"
                />
              </Card>
            </Link>
          </Item>

        </Grid>
      </Grid>

    </Box>
  )
}

export default MainFashion;