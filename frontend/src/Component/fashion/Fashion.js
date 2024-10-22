import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

import ShirtCOVERIMG from '../../images/FashionCoverImg/Shirt/Shirt.jpeg';
import T_ShirtCOVERIMG from '../../images/FashionCoverImg/T-shirt/T-Shirt.webp';
import ShoeCOVERIMG from '../../images/ShoesCoverImg/Shoe/shoe.jpg';
import TrackPantCOVERIMG from '../../images/TrackPantCoverImg/TrackPant/TrackPant.jpg';
import JeansCOVERIMG from '../../images/JeansCoverImg/Jeans/Jeans.jpeg';
import WindCheaterCOVERIMG from '../../images/WindCheaterCoverImg/WindCheater/WindCheater.jpg';

const ImageContainer = styled(Box)({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  padding:"5px",
  backgroundColor:"white"
});

const StyledImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'contains',
});

export default function Appliances() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} padding={2} sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Grid item xs={4}>
          <Link to={'Shirt'}>
            <ImageContainer>
              <StyledImage src={ShirtCOVERIMG} alt="Shirt Cover" />
            </ImageContainer>
          </Link>
        </Grid>

        <Grid item xs={4}>
          <Link to={'Tshirt'}>
            <ImageContainer>
              <StyledImage src={T_ShirtCOVERIMG} alt="T-Shirt Cover" />
            </ImageContainer>
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link to={'TrackPant'}>
            <ImageContainer>
              <StyledImage src={TrackPantCOVERIMG} alt="T-Shirt Cover" />
            </ImageContainer>
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link to={'Shoe'}>
            <ImageContainer>
              <StyledImage src={ShoeCOVERIMG} alt="T-Shirt Cover" />
            </ImageContainer>
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link to={'Jeans'}>
            <ImageContainer>
              <StyledImage src={JeansCOVERIMG} alt="T-Shirt Cover" />
            </ImageContainer>
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link to={'WindCheater'}>
            <ImageContainer>
              <StyledImage src={WindCheaterCOVERIMG} alt="T-Shirt Cover" />
            </ImageContainer>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
