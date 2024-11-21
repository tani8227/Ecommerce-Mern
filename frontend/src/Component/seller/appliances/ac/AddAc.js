import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { FormGroup, TextField, Button, Box, styled, Paper } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect } from 'react';
import { uploadImage } from '../../../utility/cloudnaryUpload.js';


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


export default function AddAC() {

    const user = JSON.parse(localStorage.getItem('user')) || "";
    const [file, setFile] = useState([])
    const [product, setProduct] = useState(
        {
            companyName: '',
            seller_ref: `${user.id}`,
            imgUrl: [],
            price: '',
            modelName:'',
            color: '',
            acType : '',
            beeRating: '',
            beeRatingYear: '',
            condenserCoil: '',
            airThrowDistance: '',
            capacity: '',
            warranty: '',
            quantity: ''
        })


    useEffect(() => {
        console.log('Files state updated:', file);
    }, [file]);

    async function handlesubmit(e) {

        e.preventDefault();

        try {

            const uploads = await Promise.all(file.map(ele => uploadImage(ele)));
            product.imgUrl.push(...uploads);
            console.log(product)

            const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_URL}/api/v1/seller/Ac/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(product)
            });

            const data = await response.json();
            console.log(data);
        } catch (error) {

            console.error('Error adding fridge:', error);
        }
        setProduct({
            companyName: '',
            seller_ref: `${user.id}`,
            imgUrl: [],
            price: '',
            modelName:'',
            color: '',
            acType : '',
            beeRating: '',
            beeRatingYear: '',
            condenserCoil: '',
            airThrowDistance: '',
            capacity: '',
            warranty: '',
            quantity: ''
        })
    }
    async function handleChange(e) {


        const value = e.target.value
        const name = e.target.name




        if (e.target.files) {
            setFile(Array.from(e.target.files));


            // console.log(file);
            // console.log(typeof(file))
        }
        else {
            setProduct(
                {
                    ...product,
                    [name]: value
                });
        }

    }


    return (
        <>
            <Box sx={{ padding: 2, backgroundColor: "#00143c" }}>

                <Grid container sx={{ display: "flex", justifyContent: "center" }} >

                    <Grid item xs={8} sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", backgroundColor: "#ffcd00" }}>
                        <Item square elevation={0} >
                            Mobile
                        </Item>
                        <Item square elevation={0} sx={{ backgroundColor: "transparent", padding: 2, width: "100%" }}>
                            <form onSubmit={handlesubmit} method='post' encType="multipart/form-data" style={{ width: "100%" }} >

                                <FormGroup sx={{ width: "400px" }}>
                                     <FormControl sx={{ width: "400px" }}>
                                        <InputLabel
                                            id="company-name-label"
                                            required
                                            sx={{ fontWeight: 500, color: "black", backgroundColor: "transparent" }}
                                            >
                                            Company Name
                                        </InputLabel>
                                        <Select
                                            variant="standard"
                                            labelId="company-name-label"
                                            id="company-name"
                                            name="companyName"
                                            sx={{ margin: 2, textAlign: 'left' }}
                                            value={product.companyName}
                                            onChange={handleChange}
                                            >
                                            <MenuItem value={"Panasonic"}>Panasonic</MenuItem>
                                            <MenuItem value={"Voltas"}>Voltas</MenuItem>
                                            <MenuItem value={"samsung"}>samsung</MenuItem>
                                        </Select>
                                    </FormControl> 

                                    <FormControl>
                                        <HiddenTextField
                                            type='hidden'
                                            variant="standard"
                                            name='user_ref'
                                            id='user_ref'
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            value={`${user.id}`}

                                            onChange={handleChange}
                                            required
                                        />
                                    </FormControl>

                                    <FormControl>
                                        <TextField
                                            type='file'
                                            inputProps={{
                                                multiple: true
                                            }}
                                            variant="standard"
                                            name='imgUrl'
                                            id="file"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            // value={product.imgUrl}
                                            onChange={handleChange}
                                            required
                                        />
                                    </FormControl>

                                    <FormControl>
                                        <TextField
                                            type='number'
                                            variant="standard"
                                            name='price'
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            value={product.price}
                                            label="Price"
                                            id='price'
                                            onChange={handleChange}
                                            required
                                            InputLabelProps={{
                                                style: { fontWeight: 500, color: "black" }
                                            }}
                                        />
                                    </FormControl>

                                    <FormControl>
                                        <TextField
                                            type='text'
                                            variant="standard"
                                            name='modelName'
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            value={product.modelName}
                                            label="Model Name"
                                            id='model-Name'
                                            onChange={handleChange}
                                            required
                                            InputLabelProps={{
                                                style: { fontWeight: 500, color: "black" }
                                            }}
                                        />
                                    </FormControl>


                                   
                                    <FormControl>
                                    <TextField
                                            type='text'
                                            variant="standard"
                                            name='color'
                                            id="Color"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            value={product.color}
                                            label="Color"
                                            onChange={handleChange}
                                            required
                                            InputLabelProps={{
                                                style: { fontWeight: 500, color: "black" }
                                            }}
                                        />
                                    </FormControl>

                                    <FormControl>
                                        <TextField
                                            variant="standard"
                                            id="ac-Type"
                                            label="AC Type"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            name='acType'
                                            value={product.acType}
                                            onChange={handleChange}
                                            InputLabelProps={{
                                                style: { fontWeight: 500, color: "black" }
                                            }}
                                            required
                                        />
                                    </FormControl>

                                    <FormControl>
                                        <TextField
                                            variant="standard"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            name='beeRating'
                                            id="bee-Rating"
                                            value={product.beeRating}
                                            label="BEE Rating"
                                            onChange={handleChange}
                                            InputLabelProps={{
                                                style: { fontWeight: 500, color: "black" }
                                            }}
                                            required

                                        />

                                    </FormControl>

                                    <FormControl>
                                        <TextField
                                           type='number'
                                            variant="standard"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            name='beeRatingYear'
                                            id="bee-Rating-Year"
                                            value={product.beeRatingYear}
                                            label="BEE Rating Year"
                                            onChange={handleChange}
                                            InputLabelProps={{
                                                style: { fontWeight: 500, color: "black" }
                                            }}
                                            required
                                        />
                                    </FormControl>

                                    <FormControl>
                                        <TextField
                                            variant="standard"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            name='condenserCoil'
                                            id="condenser-Coil"
                                            value={product.condenserCoil}
                                            label="Condenser Coil"
                                            onChange={handleChange}
                                            InputLabelProps={{
                                                style: { fontWeight: 500, color: "black" }
                                            }}
                                            required
                                        />
                                    </FormControl>


                                    <FormControl>
                                        <TextField
                                            variant="standard"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            name="capacity"
                                            id="capacity"
                                            label="Capacity"
                                            value={product.capacity}
                                            onChange={handleChange}
                                            InputLabelProps={{
                                                style: { fontWeight: 500, color: "black" }
                                            }}
                                            required
                                            />
                                   </FormControl>
                                    <FormControl>
                                        <TextField
                                            variant="standard"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            name="warranty"
                                            id="warranty"
                                            label="Warranty"
                                            value={product.warranty}
                                            onChange={handleChange}
                                            InputLabelProps={{
                                                style: { fontWeight: 500, color: "black" }
                                            }}
                                            required
                                            />
                                   </FormControl>

                                    <FormControl>
                                        <TextField
                                            type='number'
                                            variant="standard"
                                            name='quantity'
                                            id='Quantity'
                                            label="Quantity"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            value={product.quantity}
                                            onChange={handleChange}
                                            InputLabelProps={{
                                                style: { fontWeight: 500, color: "black" }
                                            }}
                                            required
                                        />
                                    </FormControl>

                                    <FormControl>
                                        <Button
                                            type='submit'
                                            variant="contained">Post</Button>
                                    </FormControl>

                                </FormGroup>

                            </form>

                        </Item>
                    </Grid>
                </Grid>
            </Box >
        </>
    )
}