import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography, Dialog, DialogTitle, DialogContent, IconButton, TextField, Slide } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close';
import ProductList from './ProductList.js';
import { useState } from 'react';

import TshirtBrandList from './tshirt/TshirtBrandList.js';
import TshirtPriceBar from './tshirt/TshirtPriceBar.js';

import  TrackPantBrandList from './trackpant/TrackPantBrandList.js';
import TrackPantPriceBar from './trackpant/TrackPantPriceBar.js';

import ShirtBrandList from './shirt/ShirtBrandList.js';
import ShirtPriceBar from './shirt/ShirtPriceBar.js';

import JeansBrandList from './jeans/JeansBrandList.js';
import JeansPriceBar from './jeans/JeansPriceBar.js';

import ShoeBrandList from './shoe/ShoeBrandList.js';
import ShoePriceBar from './shoe/ShoePriceBar.js';

import WindCheaterBrandList from './windCheater/WindCheaterBrandList.js';
import WindCheaterPriceBar from './windCheater/WindCheaterPriceBar.js';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  borderBottom: 'none',
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ProductListComponent(props) {

  console.log(props.data);
  const [open, setOpen] = useState(false);
  const [filterList, setFilterList]= useState(null);
  const [priceRange, setpriceRange]= useState([]);
  
  console.log(props); 
  const handleClickOpen = () => {
    console.log("yes opened")
    setOpen(true);
   
  };

  const handleClose = () => {
    console.log("yes closed")
    setOpen(false);
  };

  function getBrandName(brandName)
  {       

           if(brandName.length>0)
            {
               console.log(brandName); 
              setFilterList(brandName);
            }
           
  }

  function getPrice(price)
  {
    
    
    setpriceRange(price)
   
  }


  return (
    <Box sx={{ flexGrow: 1, padding: 1 }}>
      <Grid container spacing={2} sx={{ display: "flex" }}>
        <Grid item xs={3} sx={{ display: { xs: "none", md: "block" } }}>
          <Item square elevation={0}>
            <Typography variant='h6'>Filter</Typography>
          </Item>

          <Item square elevation={0} sx={{ borderTop: "1px solid lightgrey" }}>
            <Typography variant='h6'>Categories</Typography>
            <Typography variant='body1'>{`${"Categoryname"}`}</Typography>
          </Item>

          <Item square elevation={0}>
            <Typography variant='body1' sx={{ borderTop: "1px solid lightgrey" }}>
              PRICE
            </Typography>
            {props.ProductCategory==='Shirt'&&<ShirtPriceBar getPrice={getPrice}/>}
            {props.ProductCategory==='Tshirt'&&<TshirtPriceBar getPrice={getPrice}/>}
            {props.ProductCategory==='Jeans'&&<JeansPriceBar getPrice={getPrice}/>}
            {props.ProductCategory==='Shoe'&&<ShoePriceBar getPrice={getPrice}/>}
            {props.ProductCategory==='TrackPant'&&<TrackPantPriceBar getPrice={getPrice}/>}
            {props.ProductCategory==='WindCheater'&&<WindCheaterPriceBar getPrice={getPrice}/>}
           
          </Item>

          <Item square elevation={0}>
            <Typography variant='body1' sx={{ borderTop: "1px solid lightgrey" }}>
              BRAND
            </Typography>
            <Box mt={1}>
              <TextField id="standard-basic" label="Search Brand" variant="standard" />
            </Box>
            {props.ProductCategory==='Shirt'&&<ShirtBrandList getBrandName={getBrandName} />}
            {props.ProductCategory==='Tshirt'&&<TshirtBrandList getBrandName={getBrandName} />}
            {props.ProductCategory==='Shoe'&&<ShoeBrandList getBrandName={getBrandName} />}
            {props.ProductCategory==='Jeans'&&<JeansBrandList getBrandName={getBrandName} />}
            {props.ProductCategory==='TrackPant'&&<TrackPantBrandList getBrandName={getBrandName} />}
            {props.ProductCategory==='WindCheater'&&<WindCheaterBrandList getBrandName={getBrandName} />}
       
          </Item>
        </Grid>

        <Grid item xs={12} md={9}>
          <ProductList   ProductCategory={props.ProductCategory}  priceRange ={priceRange} filterList={filterList} data={props.data} />
        </Grid>
      </Grid>

      <IconButton
        color="primary"
        aria-label="filter"
        onClick={handleClickOpen}
        sx={{ display: { xs: 'block', md: 'none' }, position: 'fixed', bottom: 16, right: 16 }}
      >
        <FilterListIcon />
      </IconButton>

      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        PaperProps={{
          sx: { 
            position: 'fixed', 
            bottom: 0, 
            margin: 0, 
            width: '100%', 
            borderTopLeftRadius: 8, 
            borderTopRightRadius: 8 
          }
        }}
      >
        <DialogTitle>
          Filter
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Item square elevation={0} sx={{ borderTop: "none" }}>
            <Typography variant='h6'>Categories</Typography>
            <Typography variant='body1'>{`${"Categoryname"}`}</Typography>
          </Item>

          <Item square elevation={0}>
            <Typography variant='body1' sx={{ borderTop: "1px solid lightgrey" }}>
              PRICE
            </Typography>
            {props.ProductCategory==='Shirt'&&<ShirtPriceBar getPrice={getPrice}/>}
            {props.ProductCategory==='Tshirt'&&<TshirtPriceBar getPrice={getPrice}/>}
            {props.ProductCategory==='Jeans'&&<JeansPriceBar getPrice={getPrice}/>}
            {props.ProductCategory==='Shoe'&&<ShoePriceBar getPrice={getPrice}/>}
            {props.ProductCategory==='TrackPant'&&<TrackPantPriceBar getPrice={getPrice}/>}
            {props.ProductCategory==='WindCheater'&&<WindCheaterPriceBar getPrice={getPrice}/>}
            
            {/* <LedTVPriceBar getPrice={getPrice}/> */}
          </Item>

          <Item square elevation={0}>
            <Typography variant='body1' sx={{ borderTop: "1px solid lightgrey" }}>
              BRAND
            </Typography>
            <Box mt={1}>
              <TextField id="standard-basic" label="Search Brand" variant="standard" />
            </Box>
            {props.ProductCategory==='Shirt'&&<ShirtBrandList getBrandName={getBrandName} />}
            {props.ProductCategory==='Tshirt'&&<TshirtBrandList getBrandName={getBrandName} />}
            {props.ProductCategory==='Shoe'&&<ShoeBrandList getBrandName={getBrandName} />}
            {props.ProductCategory==='Jeans'&&<JeansBrandList getBrandName={getBrandName} />}
            {props.ProductCategory==='TrackPant'&&<TrackPantBrandList getBrandName={getBrandName} />}
            {props.ProductCategory==='WindCheater'&&<WindCheaterBrandList getBrandName={getBrandName} />}
      
            {/* <BrandList getBrandName={getBrandName}/> */}
          </Item>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
