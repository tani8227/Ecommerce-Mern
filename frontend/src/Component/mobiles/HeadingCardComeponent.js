import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
// import {  createTheme } from '@mui/material/styles';





const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));




export default function HeadingCardComeponent() {

    return (
        <Grid container backgroundColor={'white'} >

            <Grid item xs={12} sx={{ display: { /*xs: "none",*/ md: "block" } }}>
                <Item square elevation={0} sx={{ display: "flex", justifyContent: { xs: "flex-start" } }} >
                    <Typography variant='h6'>

                        <Typography variant='span' sx={{ fontSize: { xs: "14px" } }} color={'black'} >{'Categoryname'} </Typography>&nbsp;<Typography variant='span' sx={{ fontSize: { xs: "12px" } }} > {`(showing 1 - 10 products of 25 products)`}

                        </Typography>
                    </Typography>

                </Item>

            </Grid>
        </Grid>

    )
}