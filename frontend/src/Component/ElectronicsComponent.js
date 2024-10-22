import * as React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { Paper, Button, Box } from '@mui/material';
// import {  createTheme } from '@mui/material/styles';
import ImgComponent from './mobiles/ImgComponent';
import '../index.css'



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



export default function MobileComponent() {


    return (
        <>

            <Grid container spacing={0} bgcolor={'white'} borderTop="1px solid lightgrey" >

                <Grid item xs={12} sx={{ display: "flex", justifyContent: "space-between" }} >
                    <Item square elevation={0}>
                        <Typography variant='h6'>

                            Realme smartphones

                        </Typography>

                    </Item>
                    <Item square elevation={0}>
                        <Link to={"ElectronicsDetails"}>

                            <Button variant="contained">
                                See All
                            </Button>

                        </Link>
                    </Item>

                </Grid>
            </Grid>

            <Box sx={{ overflowX: "auto" }} className="gridRowScrollBar" >

                <Grid container spacing={0} marginTop={0} bgcolor={'white'} borderTop="1px solid lightgrey" flexWrap={'nowrap'}>

                    <Grid item xs={12} sm={4} padding={1} sx={{ display: "flex", justifyContent: "space-evenly", }} >
                
                <ImgComponent/>
                </Grid>
                    <Grid item xs={12} sm={4} padding={1} sx={{ display: "flex", justifyContent: "space-evenly", }} >
                
                <ImgComponent/>
                </Grid>
                    <Grid item xs={12} sm={4} padding={1} sx={{ display: "flex", justifyContent: "space-evenly", }} >
                
                <ImgComponent/>
                </Grid>
                    <Grid item xs={12} sm={4} padding={1} sx={{ display: "flex", justifyContent: "space-evenly", }} >
                
                <ImgComponent/>
                </Grid>
                    <Grid item xs={12} sm={4} padding={1} sx={{ display: "flex", justifyContent: "space-evenly", }} >
                
                <ImgComponent/>
                </Grid>
                   

                </Grid>
                </Box>

        </>


    );
}
