import * as React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { Paper, Button, Box } from '@mui/material';
import ImgComponent from './ImgComponent.js';
import '../../index.css';
import useGetAllItemsByComapanyName from '../utility/useGetItemByCompanyName.js';
import { useState, useEffect } from 'react';
// import useGetAllProductByPassingArray from '../utility/useGetAllProductbyPaasingArray.js';/


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function MobileComponent(props) {


    console.log(props)
    const [AllCompanies, setAllCompanies] = useState([])
    const [loader, setLoader]=useState(false);

    const companydata = useGetAllItemsByComapanyName(props.categoryName, props.companies);
    // const Realme = useGetAllItemsByComapanyName('mobile', 'Realme');
    console.log(companydata)

    useEffect(() => {
        if (companydata) {

            setAllCompanies(companydata);
            setLoader(true);
        }
    }, [companydata, AllCompanies]);




    console.log(AllCompanies)
    if(!loader)
        {
            return <h3>Loading...</h3>
        }

    return (

        <>
            {AllCompanies.length > 0 && AllCompanies.map((ele, index) => {

                console.log(ele)
                if (ele[0] === undefined) {

                    return null;
                }
                else {
                    return (
                        <Box key={ele[index] !== undefined ? ele[index].companyName : ""} style={{ className: 'gridColScrollBar' }} >

                            <Grid container spacing={0} sx={{ backgroundColor: "white", borderTop: "1.5px solid lightgrey", marginTop: "0px" }}>
                                <Grid item xs={12} sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <Item square elevation={0}>
                                        <Typography variant='h6'>
                                            {`${ele[0] !== undefined ? ele[0].companyName : ""} SmartPhones`}
                                        </Typography>
                                    </Item>
                                    <Item square elevation={0}>

                                    <Link to={`MobileDetails/${ele[0] !== undefined ? ele[0].companyName :''}`}>

                                            <Button variant="contained">
                                                See All
                                            </Button>
                                        </Link>
                                    </Item>
                                </Grid>
                            </Grid>

                            <Box sx={{ overflowX: "auto", backgroundColor: "white", width: "100%", borderTop: "1px solid lightgrey" }} className="gridRowScrollBar" >
                                <Grid container spacing={0} marginTop={0} sx={{ backgroundColor: "white", flexWrap: 'nowrap', width: { xs: "fit-content", md: "100%" } }}>
                                    <Grid item xs={12} padding={1} sx={{ display: "flex", justifyContent: "space-evenly", width: "100%", }}>
                                        <Item elevation={0} sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", width: "100%" }}>
                                            <ImgComponent data={ele} />
                                        </Item>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    )
                }
            })}
        </>
    )
}
