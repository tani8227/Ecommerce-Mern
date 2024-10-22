
import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import { List, ListItem } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import AddressComponent from './AddressComponent';
import MyProfileInfoComponet from './MyProfileInfoComponent.js'
import useAddress from '../utility/useAddress';
import useTOGetUserDetails from '../utility/useToGetUserDetails.js'
import { useParams, } from 'react-router-dom';



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



export default function MyProfile() {

    const param = useParams();

    console.log(param);
    const [addressList, setAddressList] = useState();
    const [userDetails, setUserDetails] = useState();
    const [toggle, setToggle] = useState(false)


    const userdata = useTOGetUserDetails(`${localStorage.getItem('token')}`, toggle)

    function handleToggle() {
        setToggle(!toggle);
    }

    const allAddress = useAddress(`${localStorage.getItem('token')}`, toggle);
    console.log(allAddress);

    useEffect(() => {
        if (addressList === undefined && allAddress && allAddress.data) {
            setAddressList(allAddress.data)
        }
    }, [allAddress, addressList])

    useEffect(() => {
        if (userdata && userdata.data) {
            setUserDetails(userdata.data)
        }
    }, [userdata,])





    console.log(userDetails);
    return (
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', }}>
                <Grid item xs={3} sx={{ display: { xs: 'none', sm: 'block' } }}  >
                    <Item square sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 1 }} >
                        <Stack direction="row" >


                            <Avatar src="/broken-image.jpg" />


                        </Stack>

                        <Typography>
                           {`${userDetails&&userDetails.name}`}
                        </Typography>

                    </Item>
                    <Item square sx={{ marginTop: "10px", borderBottom: '1px solid lightgrey' }}>
                        <NavLink to={`/buyer/myprofile`} style={{ textDecoration: "none", color:'rgb(0 0 0 / 60%)' }}>
                            <Typography sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>

                                MY PROFILE <PlayArrowIcon sx={{fontSize:'medium'}}/>

                            </Typography>
                        </NavLink>
                    </Item>

                    <Item square sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 2,borderBottom: '1px solid lightgrey' }}>

                        <NavLink to={`/buyer/orderDetails`} style={{ textDecoration: "none", color:'rgb(0 0 0 / 60%)'  }}>
                            <Typography  sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                                
                                MY ORDERS<PlayArrowIcon sx={{fontSize:'medium'}}/>

                            </Typography>
                        </NavLink>
                    </Item>

                    <Item>
                        <NavLink to={`/buyer/Manage-Address`} style={{ textDecoration: "none", color:'rgb(0 0 0 / 60%)' }}>

                            <Typography  sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>

                                MANAGE ADDRESS<PlayArrowIcon sx={{fontSize:'medium'}}/>
                            </Typography>

                        </NavLink>
                    </Item>

                </Grid>
                <Grid item xs={12} sm={8} >

                    <Item>
                        {param.item.toLocaleLowerCase() === 'manage-address' &&
                            <Button onClick={handleToggle}>
                                <AddIcon /> ADD Address
                            </Button>
                        }
                        {param.item.toLocaleLowerCase() === 'myprofile' &&
                            <Button onClick={handleToggle}>
                                <AddIcon /> Edit Profile
                            </Button>
                        }
                        {toggle && param.item.toLocaleLowerCase() === 'manage-address' && <AddressComponent handleToggle={handleToggle} toggle={toggle} allAddress={allAddress} />}
                        {toggle && param.item.toLocaleLowerCase() === 'myprofile' && <MyProfileInfoComponet handleToggle={handleToggle} toggle={toggle} userdata={userdata} />}
                        {/* {toggle && param.item.toLocaleLowerCase() === '' && <MyProfileInfoComponet handleToggle={handleToggle} toggle={toggle} userdata={userdata} />} */}
                    </Item>
                    <Box sx={{ marginTop: '10px' }}>
                        {param.item.toLocaleLowerCase() === 'manage-address' && toggle === 'true' && <AddressComponent toggle={toggle} handleToggle={handleToggle} addressList={addressList} />}
                        {param.item.toLocaleLowerCase() === 'myprofile' && toggle === 'true' && <MyProfileInfoComponet toggle={toggle} handleToggle={handleToggle} userdata={userdata} />}

                        {param.item.toLocaleLowerCase() === 'manage-address' && addressList && addressList.map((ele, index) => (

                            <Item  key={ele._id} square elevation={0} sx={{ borderBottom: '1px solid lightgrey', display: 'flex', justifyContent: 'flex-start' }}>
                                {`${index + 1}. ${ele.address}`}
                            </Item>

                        ))}
                        {param.item.toLocaleLowerCase() === 'myprofile' && userDetails &&

                            <Item square elevation={0} sx={{ borderBottom: '1px solid lightgrey', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                                <Box sx={{ display: 'flex', flexDirection: 'row', margin: 1 }}>

                                    <Typography sx={{ fontSize: '20px', padding: 2 }}>
                                        Name
                                    </Typography>
                                    <Typography sx={{ border: '1px solid lightgrey', fontSize: '20px', padding: 2, minWidth: '5cm', maxWidth: '15cm' }}>
                                        {`${userDetails.name}`}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'row', margin: 1 }}>

                                    <Typography sx={{ fontSize: '20px', padding: 2 }} >
                                        Email :
                                    </Typography>
                                    <Typography sx={{ border: '1px solid lightgrey', fontSize: '20px', padding: 2, minWidth: '5cm', maxWidth: '15cm' }}>
                                        {`${userDetails.email}`}

                                    </Typography>
                                </Box>

                            </Item>

                        }
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}


