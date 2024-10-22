import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

import FlourCOVERIMG from '../../images/GroceryCoverImg/Flour/Flour.webp';
import DetergentCOVERIMG from '../../images/GroceryCoverImg/Detergent/Detergent.webp';
import ShampooCOVERIMG from '../../images/GroceryCoverImg/Shampoo/Shampoo.webp';
import OralCareCOVERIMG from '../../images/GroceryCoverImg/OralCare/OralCare.webp';
import CleaningEssentialCOVERIMG from '../../images/GroceryCoverImg/CleaningEssential/CleaningEssential.webp';
import PulseCOVERIMG from '../../images/GroceryCoverImg/Pulse/Pulse.webp';



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
          <Link to={'Flour'}>
            <ImageContainer>
              <StyledImage src={FlourCOVERIMG} alt="Shirt Cover" />
            </ImageContainer>
          </Link>
        </Grid>

        <Grid item xs={4}>
          <Link to={'Detergent'}>
            <ImageContainer>
              <StyledImage src={DetergentCOVERIMG} alt="T-Shirt Cover" />
            </ImageContainer>
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link to={'Shampoo'}>
            <ImageContainer>
              <StyledImage src={ShampooCOVERIMG} alt="T-Shirt Cover" />
            </ImageContainer>
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link to={'OralCare'}>
            <ImageContainer>
              <StyledImage src={OralCareCOVERIMG} alt="T-Shirt Cover" />
            </ImageContainer>
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link to={'CleaningEssentials'}>
            <ImageContainer>
              <StyledImage src={CleaningEssentialCOVERIMG} alt="T-Shirt Cover" />
            </ImageContainer>
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link to={'Pulse'}>
            <ImageContainer>
              <StyledImage src={PulseCOVERIMG} alt="T-Shirt Cover" />
            </ImageContainer>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
