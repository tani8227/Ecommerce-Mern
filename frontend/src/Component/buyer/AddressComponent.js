
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

const HiddenTextField = styled(TextField)({
    display: 'none',
});

export default function AddressComponent(props) {


    const user = JSON.parse(localStorage.getItem('user')) || "";
    const [address, setAddress] = useState(
        {
            userId: `${user.id}`,
            address: '',

        })

    async function handlesubmit(e) {

        e.preventDefault();

        try {

            const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_URL||process.env.REACT_APP_BACKEND_APP_API_LOCAL_URL}/api/v1/user/Address/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(address)
            });

            if (response.ok) {
                const data = await response.json();

                console.log(data);
            } else {
                console.log("ppppppp8897456311")

            }
            setAddress(
                {
                    userId: `${user.id}`,
                    address: '',
                });

        }
        catch (error) {
            console.error('Error adding address:', error);
            setAddress(
                {
                    userId: `${user.id}`,
                    address: '',
                });

        }

        props.handleToggle();


    }


    async function handleInputField(e) {
        const value = e.target.value;
        const name = e.target.name
        setAddress(
            {
                ...address,
                [name]: value
            });
    }




    return (
        <Box>


            <Grid size={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Item square elevation={0} onClick={props.handleToggle}>


                    <CancelIcon />

                </Item>
            </Grid>

            <Grid size={12}>


                <Item square elevation={0}>

                    <FormControl component="form" onSubmit={handlesubmit} sx={{ width: { md: '50ch', xs: '40ch' }, height: { xs: '350px' } }} >
                        <FormGroup>

                            <HiddenTextField
                                variant="standard"
                                type='hidden'
                                name='userId'
                                id='userId'
                                value={`${user.id}`}
                                margin='normal'
                                size="large"
                            />
                            <TextField
                                variant="standard"
                                type='text'
                                name='address'
                                id='address'
                                label='Enter address'
                                margin='normal'
                                size="large"
                                sx={{ margin: 2 }}
                                value={user.address}
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
                                Login
                            </Button>
                        </FormGroup>
                    </FormControl>
                </Item>

            </Grid>

        </Box>
    );
}




