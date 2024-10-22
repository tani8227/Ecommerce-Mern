import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Card, CardMedia } from '@mui/material';
import { Link } from "react-router-dom";
import LedTV from '../images/AppliancesCoverImg/LEDTV/LEDTV.webp'
import Fridge from '../images/AppliancesCoverImg/Fridge/Fridge.webp'
import Cooler from '../images/AppliancesCoverImg/Cooler/Cooler.webp'
import WashingMachine from '../images/AppliancesCoverImg/WashingMachine/WashingMachine.webp'
import AC from '../images/AppliancesCoverImg/AC/AC.webp'
import WaterPurifier from '../images/AppliancesCoverImg/WaterPurifier/WaterPurifier.webp'



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

function MainAppliances(props) {
  return (
    <Box sx={{ flexGrow: 1, padding: 1 }}>
      <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: "center", backgroundColor: "white", flexWrap: "wrap" }} >
        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: "center" }}>
          <Item square elevation={0}>
            <Link to={`/${props.productCategory}/LedTV`}>
              <Card sx={{ maxWidth: "fit-content" }}>
                <CardMedia
                  component="img"
                  sx={{ maxWidth: '300px',maxHeight: '300px', objectFit: "contain" }}
                  image={LedTV}
                  title="green iguana"
                />
              </Card>
            </Link>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: "center" }}>

          <Item square elevation={0}>
            <Link to={`/${props.productCategory}/Fridge`}>
              <Card sx={{ maxWidth: "fit-content" }}>
                <CardMedia
                  component="img"
                  sx={{ maxWidth: '300px',maxHeight: '300px', objectFit: "contain" }}
                  image={Fridge}
                  title="green iguana"
                />
              </Card>
            </Link>
          </Item>
        </Grid>

        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: "center" }}>
          <Item square elevation={0}>
            <Link to={`/${props.productCategory}/Cooler`}>
              <Card sx={{ maxWidth: "fit-content" }}>
                <CardMedia
                  component="img"
                  sx={{ maxWidth: '300px',maxHeight: '300px', objectFit: "contain" }}
                  image={Cooler}
                  title="green iguana"
                />
              </Card>
            </Link>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: "center" }}>


          <Item square elevation={0}>
            <Link to={`/${props.productCategory}/AC`}>
              <Card sx={{ maxWidth: "fit-content" }}>
                <CardMedia
                  component="img"
                  sx={{ maxWidth: '300px',maxHeight: '300px', objectFit: "contain" }}
                  image={AC}
                  title="green iguana"
                />
              </Card>
            </Link>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: "center" }}>

          <Item square elevation={0}>
            <Link to={`/${props.productCategory}/WashingMachine`}>
              <Card sx={{ width: "fit-content" }}>
                <CardMedia
                  component="img"
                  sx={{ maxWidth: '300px',maxHeight: '300px', objectFit: "contain" }}
                  image={WashingMachine}
                  title="green iguana"
                />
              </Card>
            </Link>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: "center" }}>

          <Item square elevation={0}>
            <Link to={`/${props.productCategory}/WaterPurifier`}>
              <Card sx={{ width: "fit-content" }}>
                <CardMedia
                  component="img"
                  sx={{ maxWidth: '300px',maxHeight: '300px', objectFit: "contain" }}
                  image={WaterPurifier}
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

export default MainAppliances;