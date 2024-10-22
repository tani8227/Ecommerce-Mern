import * as React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { Paper, Button, Box } from '@mui/material';
// import ImgComponent from './ImgComponent.js';
import '../../../index.css';
import useGetAllItemsByComapanyName from '../../utility/useGetItemByCompanyName.js';
import { useState, useEffect } from 'react';
import FridgeImgComponent from './fridge/FridgeImgComponent.js'
import LedImgComponent from './LedTV/LedTVImgComponent.js'
import WashingMachineImgComponent from './washingMachine/WashingMachine_ImgComponent.js'
import CoolerImgComponent from './cooler/CoolerImgComponent.js';
import ACImgComponent from './ac/ACImgComponent.js';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));







export default function ProductComponent(props) {
    
    const [AllCompanies, setAllCompanies] = useState([])
    console.log(props, "88888888/******************************22222222222222222@@@@@@@@@@@@@@@@@@@")

  
    const companydata = useGetAllItemsByComapanyName(props.ProductCategory, props.companies);
   
    console.log(companydata)
    
    useEffect(() => {
        if (companydata) {
            
            setAllCompanies(companydata);
        }
    }, [companydata, AllCompanies]);

      


    return (
        
        <>
            {AllCompanies.map((ele, index) =>
                    <Box key={ele[0].companyName}> 


                    <Grid container spacing={0} sx={{ backgroundColor: "white", borderTop: "1.5px solid lightgrey",  marginTop:"0px"}}>
                        <Grid item xs={12} sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Item square elevation={0}>
                                <Typography variant='h6'>
                     
                                   {`${ele[0].companyName} ${props.ProductCategory}`}
                                </Typography>
                            </Item>
                            <Item square elevation={0}>
                                <Link to={`${props.ProductCategory}Details/${ele[0].companyName}`}>
                                    <Button variant="contained">
                                        See All
                                    </Button>
                                </Link>
                            </Item>
                        </Grid>
                    </Grid>

                    <Box sx={{ overflowX: "auto", backgroundColor:"white" , width:"100%" ,}} className="gridRowScrollBar" >
                        <Grid container spacing={0} marginTop={0} sx={{ backgroundColor: "white", borderTop: "1px solid lightgrey", flexWrap: 'nowrap', width: { xs: "fit-content", md: "100%" } }}>
                            <Grid item xs={12} padding={1} sx={{ display: "flex", justifyContent: "space-evenly", width: "100%",  }}>

                                <Item elevation={0} sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" , width:"100%"}}>
                                {props.ProductCategory==='Fridge'&& <FridgeImgComponent data={ele} ProductCategory={props.ProductCategory} />}
                                {props.ProductCategory==='LedTV'&& <LedImgComponent data={ele} ProductCategory={props.ProductCategory} />}
                                {props.ProductCategory==='WashingMachine'&& <WashingMachineImgComponent data={ele} ProductCategory={props.ProductCategory} />}
                                {props.ProductCategory==='Cooler'&& <CoolerImgComponent data={ele} ProductCategory={props.ProductCategory} />}
                                {props.ProductCategory==='AC'&& <ACImgComponent data={ele} ProductCategory={props.ProductCategory} />}
                                    {/* <ImgComponent data={ele} ProductCategory={props.ProductCategory} /> */}


                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
             </Box>
             )}  
             </>
    )
}

