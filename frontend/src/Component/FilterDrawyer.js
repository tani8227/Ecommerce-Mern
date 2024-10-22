import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography, Button } from '@mui/material';
import PriceBar from './PriceBar';
import { styled ,} from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import BrandList from './BrandList';




const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    borderBottom: 'none'
  }));

export default function AnchorTemporaryDrawer() {
  const [state, setState] = React.useState({
  
    bottom: false,

  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width:  anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
       <Grid item xs={12} md={9} >
       <Grid item xs={3} sx={{ display: { xs: "none", md: "block" } }}>
          <Item square elevation={0} >
            <Typography variant='h6'>
              Filter

            </Typography>

          </Item>

          <Item square elevation={0} sx={{ borderTop: "1px solid lightgrey" }}>

            <Typography variant='h6'>

              Categories
            </Typography>
            <Typography variant='h6'>
              {`${"Categoryname"}`}
            </Typography>
          </Item>

          <Item square elevation={0}>
            <Typography fontSize={18} sx={{ borderTop: "1px solid lightgrey" }}>
              PRICE
              <PriceBar />

            </Typography>

          </Item>
          <Item square elevation={0} >
            <Typography fontSize={15} sx={{ borderTop: "1px solid lightgrey" }}>
              BRAND

            </Typography>
            <Typography variant='span'>

              <TextField id="standard-basic" label="Search Brand" variant="standard" />

            </Typography>
            <BrandList />


          </Item>

        </Grid>
       

          </Grid>
    </Box>
  );

  return (
    <div>
      {[ 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>

        </React.Fragment>
      ))}
    </div>
  );
}
