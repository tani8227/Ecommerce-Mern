
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { TextField, Button, Box } from '@mui/material'
import { useState } from 'react';
import { FormControl, FormGroup, Grid, } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';



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


export default function MyprofileInfoComponent(props) {

      console.log(props);
    
      const [inputFlag, setInputFlag]= useState(false)
    const [user, setUser] = useState(
        {
            name:`${inputFlag!==true?props.userdata.data.name:''}`,
            email:`${inputFlag!==true?props.userdata.data.email:''}`,

        });

    async function handlesubmit(e) {

        console.log("hhhhh", user)
        e.preventDefault();
        try {

            const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_URL||process.env.REACT_APP_BACKEND_APP_API_LOCAL_URL}/api/v1/user/Details/edit`,
                {
                    method: "POST",
                    headers:
                    {
                        "Content-Type": "application/json",
                          "Authorization": `Bearer ${localStorage.getItem('token')}`
                    },
                    body: JSON.stringify(user),
                })

            if (response.ok) {
                const data = await response.json();
                console.log(data);
            }
            setUser({
                name: "",
                email: "",

            })

         
        }
        catch (err) {
            console.log("user ppp", err);
        }

        props.handleToggle();
    }
    function handleInputField(e) {
        
        setInputFlag(true);

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
        <Box>


            <Grid size={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Item square elevation={0} onClick={props.handleToggle}>


                    <CancelIcon />

                </Item>
            </Grid>

            <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: "center", alignContent: "center", padding: 2 }}>
                <Grid item xs={12} sm={6} md={8} sx={{ display: 'flex', justifyContent: 'center' }} >

                    <Item square elevation={0} height={'400px'}>
                        <FormControl component="form" onSubmit={handlesubmit} sx={{ width: { md: '50ch', xs: '40ch' }, height: { xs: '350px' } }} >
                            <FormGroup>
                                <TextField
                                    variant="standard"
                                    type='text'
                                    name='name'
                                    id='name'
                                    label='Enter Name'
                                    margin='normal'
                                    size="20px"
                                    sx={{ margin: 2 }}
                                    value={inputFlag!==true?props.userdata.data.name:user.name}
                                    onChange={handleInputField}
                                    required
                                />
                                <TextField
                                    variant="standard"
                                    type='text'
                                    name='email'
                                    id='email'
                                    label='Enter Email'
                                    margin='normal'
                                    size="20px"
                                    sx={{ margin: 2 }}
                                    value={inputFlag!==true?props.userdata.data.email:user.email}
                                    onChange={handleInputField}
                                    required
                                />


                                <Button
                                    type="submit"
                                    variant="contained"
                                    size="large"
                                    sx={{ margin: 3, backgroundColor: '#fb641b' }}
                                    padding={2}
                                >
                                    Save
                                </Button>
                            </FormGroup>
                        </FormControl>





                    </Item>


                </Grid>


            </Grid>


        </Box>
    );
}




