import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { FormGroup, TextField, Button, Box, styled, Paper, Card, CardMedia } from '@mui/material';
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


export default function AddWindCheater() {

    const user = JSON.parse(localStorage.getItem('user')) || "";
    const [file, setFile] = useState([])
    const [product, setProduct] = useState(
        {
            companyName: '',
            seller_ref: `${user.id}`,
            productName: '',
            productType:"",
            imgUrl: [],
            price: '',
            color: '',
            size:'',
            collarType:'',
            quantity:''
        })


    useEffect(() => {
        console.log('Files state updated:', file);
    }, [file]);

    async function handlesubmit(e) {

        e.preventDefault();

        try {

            const uploads = await Promise.all(file.map(ele => uploadImage(ele)));
            product.imgUrl.push(...uploads);
            console.log(product);

            
            const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_LOCAL_URL||process.env.REACT_APP_BACKEND_APP_API_URL}/api/v1/seller/WindCheater/add`, {
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

            console.error('Error adding shirt :', error);
        }
        setProduct(
            {
                companyName: '',
                seller_ref: `${user.id}`,
                productName: '',
                productType:'',
                imgUrl: [],
                price: '',
                color: '',
                size:'',
                collarType:'',
                quantity:'',
            }  
        )
    }
    async function handleChange(e) {


        const value = e.target.value
        const name = e.target.name

 console.log(value);


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
                            Shirt
                        </Item>
                        <Item square elevation={0} sx={{ backgroundColor: "transparent", padding: 2, width: "100%" }}>
                            <form onSubmit={handlesubmit} method='post' encType="multipart/form-data" style={{ width: "100%" }} >

                                <FormGroup sx={{ width: "400px" }}>
                                    <FormControl sx={{ width: "400px" }}>
                                       
                            
                                        <TextField
                                            variant="standard"
                                            label="Company Name"
                                            id="company-name"
                                            name="companyName"
                                            sx={{ margin: 2, textAlign: 'left' }}
                                            value={product.companyName}
                                            onChange={handleChange}
                                            required
                                            InputLabelProps={{
                                                style: { fontWeight: 500, color: "black" }
                                            }}
                                        />
                                            
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
                                            type='text'
                                            variant="standard"
                                            name='productName'
                                            id="product-name"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            value={product.productName}
                                            label="Product Name"
                                            onChange={handleChange}
                                            required
                                            InputLabelProps={{
                                                style: { fontWeight: 500, color: "black" }
                                            }}
                                        />
                                    </FormControl>
                                    <FormControl>
                                    <InputLabel
                                            id="product-Type-label"
                                            required
                                            sx={{ fontWeight: 500, color: "black", backgroundColor: "transparent" }}
                                        >
                                            Product Type
                                        </InputLabel>
                                        <Select
                                            id='product-Type'
                                            variant="standard"
                                            labelId="product-Type-label"
                                            name="productType"
                                            sx={{ margin: 2, textAlign: 'left' }}
                                            value={product.productType}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={"casual"}>Casual</MenuItem>
                                            <MenuItem value={"formal"}>Formal</MenuItem>
                                            <MenuItem value={"partywaer"}>Party Wear</MenuItem>
                                           
                                        </Select>
                                    </FormControl>

                                    <FormControl>
                                        <TextField
                                            type='file'
                                            inputProps={{
                                                multiple: true
                                            }}
                                            variant="standard"
                                            name='imgUrl'
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
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            name='color'
                                            id="Color"
                                            label="Color"
                                            value={product.color}
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

                                            id="Size"
                                            label="Size"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            name='size'
                                            value={product.size}
                                            onChange={handleChange}
                                            InputLabelProps={{
                                                style: { fontWeight: 500, color: "black" }
                                            }}
                                            required

                                        />
                                         
                                         <FormControl>
                                        <TextField
                                            type='text'
                                            variant="standard"
                                            name='collarType'
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            value={product.collarType}
                                            label="Collar Type"
                                            onChange={handleChange}
                                            required
                                            InputLabelProps={{
                                                style: { fontWeight: 500, color: "black" }
                                            }}

                                        />
                                    </FormControl>


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