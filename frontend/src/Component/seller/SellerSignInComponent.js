import * as React from 'react';
import { Grid, Paper, styled, TextField, Button, FormControl, FormGroup, Typography } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import { UserValue } from '../../userContext';
import {useDispatch} from 'react-redux'
import { Actions } from '../../reducers/AuthReducer';
import { toast } from 'react-toastify';




const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const HiddenTextField = styled(TextField)({
    display: 'none',
});



export const SellerSignInComponent = () => {

    //    const {Authuser , setAuthUser}= UserValue();
       const navigate = useNavigate();
       const Dispatch = useDispatch();
 
     

    const [user, setUser] = useState(
        {
            email: "",
            password: "",
            usertype: "seller",
        });

    async function handlesubmit(e) {

     
        e.preventDefault();
        try {

            const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_URL}/api/v1/seller/create-session`,
                {
                    method: "POST",
                    headers:
                    {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user),
                })

           
                if (response.ok) {
                    const data= await response.json();
                   
                    localStorage.setItem('user', JSON.stringify(data.data.user));
                    localStorage.setItem('token', data.data.token);
                    Dispatch(Actions.setAuthUser(data.data.user))
                    Dispatch(Actions.setAuthUserToken(data.data.token))
                    
                    if(data.data.user.usertype==="seller")
                        {
                           console.log(data.data.user)
                        navigate('/seller/dashboard')
                    }else
                    {
                        
                        navigate('/');
                    }

                    toast.success('Login successfully ', {
                        position: "top-right", 
                        autoClose: 3000,
                    });
                }
       
            
            setUser(
                {
                    email: "",
                    password: "",
                    usertype: "seller",
                })

        }
        catch (err) {
            toast.error('Wrong Username/Password', {
                position: "top-right", 
                autoClose: 3000,
            });
            console.log("user ppp", err);
        }

    }
    function handleInputField(e) {

        let value = e.target.value;
        let name = e.target.name;

        // console.log("user",user);
        setUser(
            {
                ...user,
                [name]: value
            })
        // console.log( "updated", user);


    }

    return (
        <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: "center", alignContent: "center", padding: 2 }}>
            <Grid item xs={12} sm={6} md={8} sx={{ display: 'flex', justifyContent: 'center' }} >
                <Item square elevation={0} sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'column', justifyContent: "center", height: '400px', bgcolor: 'orange' }} >

                    <Typography variant='h4' sx={{ width: { md: '400px', xs: '250px' }, fontSize: { md: 38, sm: 25 } }} color={'white'} padding={1}>
                        Login!
                    </Typography>

                    <Typography variant='h4' sx={{ width: { md: '400px', xs: '250px' }, fontSize: { md: 18, sm: 16 }, fontStyle: { color: 'beige' } }} color={'white'} padding={1}  >
                        Get access to your selling dashborad and start selling your products
                    </Typography>

                </Item>
                <Item square elevation={0} height={'400px'} >
                    <FormControl component="form" onSubmit={handlesubmit} sx={{ width: { md: '50ch', xs: '40ch' }, height: { xs: '350px' } }} >
                        <FormGroup>
                            <TextField
                                variant="standard"
                                type='text'
                                name='email'
                                id='email'
                                label='Enter Email'
                                margin='normal'
                                size="20px"
                                sx={{ margin: 2 }}
                                value={user.email}
                                onChange={handleInputField}
                                required
                            />
                            <TextField
                                variant="standard"
                                type='password'
                                name='password'
                                id='password'
                                label='Enter Password'
                                margin='normal'
                                size="large"
                                sx={{ margin: 2 }}
                                value={user.password}
                                onChange={handleInputField}
                                required
                            />
                            <HiddenTextField
                                variant="standard"
                                type='hidden'
                                name='usertype'
                                id='usertype'
                                value='seller'
                                margin='normal'
                                size="large"
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                sx={{ margin: 3, backgroundColor: '#fb641b' }}
                                padding={2}
                            >
                                Login
                            </Button>
                        </FormGroup>
                    </FormControl>

                    <Typography variant='h6' sx={{ fontSize: { xs: 18, sm: 22 } }} >

                        <NavLink to={'/seller/signup'}
                            style={{
                                color: 'blue',
                                textDecoration: 'none',
                            }}
                        >
                            New Seller? Sign up
                        </NavLink>
                    </Typography>
                </Item>

            </Grid>

        </Grid>

    )
}