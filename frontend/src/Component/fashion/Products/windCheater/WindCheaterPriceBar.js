import { Box, Slider, Grid, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function WindCheaterPriceBar({getPrice}) {
  const [minRange, setMinRange] = useState([0, 200000]);

 
  const handleSliderChange = (event, newValue) => {
  //  console.log(event.target.value);
    setMinRange(event.target.value);
    
  };
  
  useEffect(()=>{
            if(minRange&&getPrice!==undefined){

              setMinRange(minRange)
              getPrice(minRange)
            }

  },[minRange, getPrice])


  const valuetext = (value) => `${value}`;

  const getAriaLabel = (index) => {
    return index === 0 ? 'Minimum price' : 'Maximum price';
  };

  return (
    <Box sx={{ width: 'auto', padding: 2 }}>
      <Slider
        getAriaLabel={getAriaLabel}
        defaultValue={[0, 200000]}
        value={minRange}
        onChange={handleSliderChange}
        step={25000}
        marks
        min={0}
        max={200000}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />

      <Grid container justifyContent="space-between">
        <Grid item xs={6} sm={3}>
          <Item elevation={0}>
            <Typography variant="span">
              {minRange[0]}&nbsp;
            </Typography>
            <Typography variant="span">
              Min
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Item elevation={0}>
            <Typography variant="body2">
              {minRange[1]}&nbsp;
            </Typography>
            <Typography variant="body2">
              Max
            </Typography>
            
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
