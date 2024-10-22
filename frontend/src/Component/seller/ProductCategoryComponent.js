import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { ListSubheader } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(255, 255, 255, .05)',
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));








const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ProductCategory(props) {

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  console.log(props);


  return (
    <Box sx={{ flexGrow: 1,borderTop:'1px solid lightgrey'  }}>
      <Grid container sx={{ display: "flex", flexDirection: { xs: "column", sm: "row", justifyContent: "space-between", padding:3 }, }} >
        <Grid item xs={12}  >
         
        <Item square elevation={0} sx={{ backgroundColor: "white", width: '100%', padding:0 }}>
            <List
              subheader={
                <ListSubheader
                  component="div"
                  id="nested-list-subheader"
                  sx={{
                    display: "flex",
                    flexDirection: 'row',
                    justifyContent: 'center',
                    width: '100%',
                    flexWrap: 'wrap',
                    margin: 'auto',
                    overflowY: 'auto',
                    fontSize: '18px',
                    backgroundColor:'whitesmoke'
                  }}
                >
                  Filter By Category
                </ListSubheader>
              }
            >
              <ListItem
                sx={{
                  display: "flex",
                  flexDirection: 'row',

                  width: '100%',
                  flexWrap: 'wrap',
                   paddingLeft:0,
                   paddingRight:0,
                  overflowY: 'auto'
                }}
              >

                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ width: '100%' }}>
                  <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{  width: '100%' }}>
                    <Typography >Fashion</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ width: '100%', flexDirection: 'column', padding:0  }}>
                    <Link to={'/seller/productManagement/Tshirt'} style={{textDecoration:"none"}}>
                    <Typography component="div" sx={{borderBottom:'1px solid lightgrey', paddingLeft:2 }}>
                      <ListItemText primary="Tshirt" style={{color:'black'}}/>
                    </Typography>
                      
                    </Link>
                    <Link to={'/seller/productManagement/Shirt'} style={{textDecoration:"none"}}>
                    <Typography component="div" sx={{borderBottom:'1px solid lightgrey',paddingLeft:2}}>
                      
                      <ListItemText primary="Shirt" style={{ color: 'black' }}/>
                    </Typography>
                    </Link>
                    <Link to={'/seller/productManagement/Shoe'} style={{textDecoration:"none"}}>
                    <Typography component="div" sx={{borderBottom:'1px solid lightgrey',paddingLeft:2}}>

                      <ListItemText primary="Shoe" style={{ color: 'black' }}/>
                    </Typography>
                    </Link>
                    <Link to={'/seller/productManagement/TrackPant'} style={{textDecoration:"none"}}>
                    <Typography component="div" sx={{borderBottom:'1px solid lightgrey',paddingLeft:2}}>

                      <ListItemText primary="TrackPant" style={{ color: 'black' }}/>
                    </Typography>
                    </Link>
                    <Link to={'/seller/productManagement/Jeans'} style={{textDecoration:"none"}}>
                    <Typography component="div" sx={{borderBottom:'1px solid lightgrey',paddingLeft:2}}>

                      <ListItemText primary="Jeans" style={{ color: 'black' }}/>
                    </Typography>
                    </Link>
                    <Link to={'/seller/productManagement/WindCheater'} style={{textDecoration:"none"}}>
                    <Typography component="div" sx={{borderBottom:'1px solid lightgrey',paddingLeft:2}}>

                      <ListItemText primary="WindCheater" style={{ color: 'black' }}/>
                    </Typography>
                    </Link>
                  </AccordionDetails>
                </Accordion>


                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ width: '100%' }}>
                  <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" sx={{ width: '100%' }}>
                    <Typography >Appliances</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ width: '100%', flexDirection: 'column',  padding:0  }}>
                    
                    <Link to={'/seller/productManagement/Fridge'} style={{textDecoration:"none"}}>
                    <Typography component="div" sx={{borderBottom:'1px solid lightgrey',paddingLeft:2}}>

                      <ListItemText primary="Fridge" style={{ color: 'black' }}/>
                    </Typography>
                    </Link>
                    <Link to={'/seller/productManagement/LedTV'} style={{textDecoration:"none"}}>
                    <Typography component="div" sx={{borderBottom:'1px solid lightgrey',paddingLeft:2}}>
                      
                      <ListItemText primary="LedTV" style={{ color: 'black' }}/>
                    </Typography>
                    </Link>
                    <Link to={'/seller/productManagement/Cooler'} style={{textDecoration:"none"}}>
                    <Typography component="div" sx={{borderBottom:'1px solid lightgrey',paddingLeft:2}}>

                      <ListItemText primary="Cooler" style={{ color: 'black' }}/>
                    </Typography>
                    </Link>
                    <Link to={'/seller/productManagement/WashingMachine'} style={{textDecoration:"none"}}>
                    <Typography component="div" sx={{borderBottom:'1px solid lightgrey',paddingLeft:2}}>

                      <ListItemText primary="WashingMachine" style={{ color: 'black' }}/>
                    </Typography>
                    </Link>
                    <Link to={'/seller/productManagement/AC'} style={{textDecoration:"none"}}>
                    <Typography component="div" sx={{borderBottom:'1px solid lightgrey',paddingLeft:2}}>

                      <ListItemText primary="AC" style={{ color: 'black' }}/>
                    </Typography>
                    </Link>
                    <Link to={'/seller/productManagement/WaterPurifier'} style={{textDecoration:"none"}}>
                    <Typography component="div" sx={{borderBottom:'1px solid lightgrey',paddingLeft:2}}>

                      <ListItemText primary="WaterPurifier" style={{ color: 'black' }}/>
                    </Typography>
                    </Link>
                  </AccordionDetails>
                </Accordion>

              <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{ width: '100%' }}>
                  <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" sx={{ width: '100%' }}>
                    <Typography>Electronics</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ width: '100%', flexDirection: 'column' ,  padding:0  }}>
                    <Link to={'/seller/productManagement/Laptop'} style={{textDecoration:"none"}}>
                    <Typography component="div" sx={{borderBottom:'1px solid lightgrey',paddingLeft:2}}>

                      <ListItemText primary="Laptop" style={{ color: 'black' }}/>
                    </Typography>
                    </Link>
                    <Link to={'/seller/productManagement/Camera'} style={{textDecoration:"none"}}>
                    <Typography component="div" sx={{borderBottom:'1px solid lightgrey',paddingLeft:2}}>

                      <ListItemText primary="Camera" style={{ color: 'black' }}/>
                    </Typography>
                    </Link>
                    <Link to={'/seller/productManagement/Printer'} style={{textDecoration:"none"}}>
                    <Typography component="div" sx={{borderBottom:'1px solid lightgrey',paddingLeft:2}}>

                      <ListItemText primary="Printer" style={{ color: 'black' }}/>
                    </Typography>
                    </Link>
                  </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{ width: '100%' }}>
                  <AccordionSummary aria-controls="panel4d-content" id="panel4d-header" sx={{ width: '100%' }}>
                    <Typography>Grocery</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ width: '100%',  flexDirection: 'row-reverse', padding:0 }}>
                    <Link to={'/seller/productManagement/OralCare'} style={{textDecoration:"none"}}>
                    <Typography component="div" sx={{borderBottom:'1px solid lightgrey',paddingLeft:2}}>

                      <ListItemText primary="OralCare" style={{ color: 'black' }}/>
                    </Typography>
                    </Link>
                    <Link to={'/seller/productManagement/Detergent'} style={{textDecoration:"none"}}>
                    <Typography component="div" sx={{borderBottom:'1px solid lightgrey',paddingLeft:2}}>

                      <ListItemText primary="Detergent" style={{ color: 'black' }}/>
                    </Typography>
                    </Link>
                    <Link to={'/seller/productManagement/CleaningEssentials'} style={{textDecoration:"none"}}>
                    <Typography component="div" sx={{borderBottom:'1px solid lightgrey',paddingLeft:2}}>

                      <ListItemText primary="CleaningEssentials" style={{ color: 'black' }}/>
                    </Typography>
                    </Link>
                    <Link to={'/seller/productManagement/Flour'} style={{textDecoration:"none"}}>
                    <Typography component="div" sx={{borderBottom:'1px solid lightgrey',paddingLeft:2}}>

                      <ListItemText primary="Flour" style={{ color: 'black' }}/>
                    </Typography>
                    </Link>
                    <Link to={'/seller/productManagement/Shampoo'} style={{textDecoration:"none"}}>
                    <Typography component="div" sx={{borderBottom:'1px solid lightgrey',paddingLeft:2}}>

                      <ListItemText primary="Shampoo" style={{ color: 'black' }}/>
                    </Typography>
                    </Link>
                    <Link to={'/seller/productManagement/Pulses'} style={{textDecoration:"none"}}>
                    <Typography component="div" sx={{borderBottom:'1px solid lightgrey',paddingLeft:2}}>

                      <ListItemText primary="Pulses" style={{ color: 'black' }}/>
                    </Typography>
                    </Link>
                  </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} sx={{ width: '100%' }}>
                  <AccordionSummary aria-controls="panel5d-content" id="panel5d-header" sx={{ width: '100%' }}>
                    <Typography>Mobiles</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ width: '100%', flexDirection: 'column',  padding:0  }}>
                    <Link to={'/seller/productManagement/Mobile'} style={{textDecoration:"none"}}>
                    <Typography component="div" sx={{borderBottom:'1px solid lightgrey',paddingLeft:2}}>

                      <ListItemText primary="Mobile" style={{ color: 'black' }}/>
                    </Typography>
                    </Link>
                  </AccordionDetails>
                </Accordion>
              </ListItem>
            </List>
          </Item>


        </Grid>

      </Grid>
    </Box>
  );
}
