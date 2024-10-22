import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom'

import LEDCOVERIMG from '../../images/AppliancesCoverImg/LEDTV/LEDTV.webp'
import FRIDGECOVERIMG from '../../images/AppliancesCoverImg/Fridge/Fridge.webp'
import COOLERCOVERIMG from '../../images/AppliancesCoverImg/Cooler/Cooler.webp'
import ACCOVERIMG from '../../images/AppliancesCoverImg/AC/AC.webp'
import WASHINGMACHINECOVERIMG from '../../images/AppliancesCoverImg/WashingMachine/WashingMachine.webp'
import WATERPURIFIERCOVERIMG from '../../images/AppliancesCoverImg/WaterFurifier/WaterFurifier.webp'


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
      <Grid container spacing={1} padding={1} sx={{display:"flex", justifyContent:"space-evenly"}}>
        
       
       
        <Grid item xs={4}>
        <Link to={'LedTV'}>
            <ImageContainer>
              <StyledImage src={LEDCOVERIMG} alt="Shirt Cover" />
            </ImageContainer>
          </Link>

        </Grid>
         
        <Grid item xs={4}>
        <Link to={'Fridge'}>
            <ImageContainer>
              <StyledImage src={FRIDGECOVERIMG} alt="Shirt Cover" />
            </ImageContainer>
          </Link>
        </Grid>
         
        <Grid item xs={4}>
        <Link to={'Cooler'}>
            <ImageContainer>
              <StyledImage src={COOLERCOVERIMG} alt="Shirt Cover" />
            </ImageContainer>
          </Link>
        </Grid>
         
        <Grid item xs={4}>
        <Link to={'AC'}>
            <ImageContainer>
              <StyledImage src={ACCOVERIMG} alt="Shirt Cover" />
            </ImageContainer>
          </Link>
        </Grid>
         
        <Grid item xs={4}>
        <Link to={'WashingMachine'}>
            <ImageContainer>
              <StyledImage src={WASHINGMACHINECOVERIMG} alt="Shirt Cover" />
            </ImageContainer>
          </Link>
        </Grid>
         
        <Grid item xs={4}>
        <Link to={'WaterFurifier'}>
            <ImageContainer>
              <StyledImage src={WATERPURIFIERCOVERIMG} alt="Shirt Cover" />
            </ImageContainer>
          </Link>
        </Grid>  
      </Grid>
    </Box>
  );
}



