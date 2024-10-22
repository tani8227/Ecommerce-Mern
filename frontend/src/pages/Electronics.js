import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Card, CardMedia } from '@mui/material';
import { Link } from "react-router-dom";
import Laptop from '../images/ElectronicsCoverImg/Laptop/Laptop.jpeg'
import Camera from '../images/ElectronicsCoverImg/Camera/Camera.jpeg'
import Printer from '../images/ElectronicsCoverImg/Printer/Printer.avif'
// import Laptop from '../images/ElectronicsCoverImg/Laptop/Laptop.jpeg'



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

function MainElectronics(props) {
  return (
    <Box sx={{ flexGrow: 1, padding: 1 }}>
      <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: "center", backgroundColor: "white", flexWrap: "wrap" }} >
        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: "center" }}>
          <Item square elevation={0}>
            <Link to={`/${props.productCategory}/Laptop`}>
              <Card sx={{ maxWidth: "fit-content" }}>
                <CardMedia
                  component="img"
                  sx={{ maxWidth: '300px', objectFit: "contain" }}
                  image={Laptop}
                  title="green iguana"
                />
              </Card>
            </Link>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: "center" }}>

          <Item square elevation={0}>
            <Link to={`/${props.productCategory}/Printer`}>
              <Card sx={{ maxWidth: "fit-content" }}>
                <CardMedia
                  component="img"
                  sx={{ maxWidth: { sm: '350px', xs: '300px' }, maxHeight: '280px', objectFit: "contain" }}
                  image={Printer}
                  title="green iguana"
                />
              </Card>
            </Link>
          </Item>
        </Grid>

        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: "center" }}>
          <Item square elevation={0}>
            <Link to={`/${props.productCategory}/Camera`}>
              <Card sx={{ maxWidth: "fit-content" }}>
                <CardMedia
                  component="img"
                  sx={{ maxWidth: '300px', objectFit: "contain" }}
                  image={Camera}
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

export default MainElectronics;