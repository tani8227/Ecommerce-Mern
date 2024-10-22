import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Card, CardMedia } from '@mui/material';
import { Link } from "react-router-dom";
import Flour from '../images/GroceryCoverImg/Flour/Flour.webp'
import Detergent from '../images/GroceryCoverImg/Detergent/Detergent.webp'
import CleaningEssentials from '../images/GroceryCoverImg/CleaningEssentials/CleaningEssentials.webp'
import OralCare from '../images/GroceryCoverImg/OralCare/OralCare.webp'
import Shampoo from '../images/GroceryCoverImg/Shampoo/Shampoo.webp'
import Pulses from '../images/GroceryCoverImg/Pulses/Pulses.webp'


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

function MainGrocery(props) {
  return (
    <Box sx={{ flexGrow: 1, padding: 1 }}>
      <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: "center", backgroundColor: "white", flexWrap: "wrap" }} >
        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: "center" }}>
          <Item square elevation={0}>
            <Link to={`/${props.productCategory}/Flour`}>
              <Card sx={{ maxWidth: "fit-content" }}>
                <CardMedia
                  component="img"
                  sx={{ maxWidth: '300px', objectFit: "contain" }}
                  image={Flour}
                  title="green iguana"
                />
              </Card>
            </Link>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: "center" }}>

          <Item square elevation={0}>
            <Link to={`/${props.productCategory}/Detergent`}>
              <Card sx={{ maxWidth: "fit-content" }}>
                <CardMedia
                  component="img"
                  sx={{ maxWidth: { sm: '350px', xs: '300px' }, maxHeight: '280px', objectFit: "contain" }}
                  image={Detergent}
                  title="green iguana"
                />
              </Card>
            </Link>
          </Item>
        </Grid>

        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: "center" }}>
          <Item square elevation={0}>
            <Link to={`/${props.productCategory}/Shampoo`}>
              <Card sx={{ maxWidth: "fit-content" }}>
                <CardMedia
                  component="img"
                  sx={{ maxWidth: '300px', objectFit: "contain" }}
                  image={Shampoo}
                  title="green iguana"
                />
              </Card>
            </Link>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: "center" }}>


          <Item square elevation={0}>
            <Link to={`/${props.productCategory}/CleaningEssentials`}>
              <Card sx={{ maxWidth: "fit-content" }}>
                <CardMedia
                  component="img"
                  sx={{ maxWidth: '300px', objectFit: "contain" }}
                  image={CleaningEssentials}
                  title="green iguana"
                />
              </Card>
            </Link>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: "center" }}>

          <Item square elevation={0}>
            <Link to={`/${props.productCategory}/OralCare`}>
              <Card sx={{ width: "fit-content" }}>
                <CardMedia
                  component="img"
                  sx={{ maxWidth: { md: '350px', xs: '300px' }, objectFit: "contain" }}
                  image={OralCare}
                  title="green iguana"
                />
              </Card>
            </Link>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: "center" }}>

          <Item square elevation={0}>
            <Link to={`/${props.productCategory}/Pulses`}>
              <Card sx={{ width: "fit-content" }}>
                <CardMedia
                  component="img"
                  sx={{ maxWidth: '300px', objectFit: "contain" }}
                  image={Pulses}
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

export default MainGrocery;