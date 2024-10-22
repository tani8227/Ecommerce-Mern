import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

import LaptopCOVERIMG from '../../images/ElectronicsCoverImg/Laptop/Laptop.jpeg';
import PrinterCOVERIMG from '../../images/ElectronicsCoverImg/Printer/Printer.avif';
import CameraCOVERIMG from '../../images/ElectronicsCoverImg/Cameras/Camera.jpeg';

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

export default function Electronics(){
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} padding={2} sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Grid item xs={4}>
          <Link to={'Laptop'}>
            <ImageContainer>
              <StyledImage src={LaptopCOVERIMG} alt="Shirt Cover" />
            </ImageContainer>
          </Link>
        </Grid>

        <Grid item xs={4}>
          <Link to={'Printer'}>
            <ImageContainer>
              <StyledImage src={PrinterCOVERIMG} alt="T-Shirt Cover" />
            </ImageContainer>
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link to={'Camera'}>
            <ImageContainer>
              <StyledImage src={CameraCOVERIMG} alt="T-Shirt Cover" />
            </ImageContainer>
          </Link>
        </Grid>
       
      </Grid>
    </Box>
  );
}
