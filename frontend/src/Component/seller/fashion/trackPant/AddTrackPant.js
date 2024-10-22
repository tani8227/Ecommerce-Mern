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


export default function AddTrackPant(props) {


    const [defaultVal, setDefaultVal] = useState()
    const [hasImagesChange, setHashasImagesChange] = useState(false);
    useEffect(() => {
        setDefaultVal(props.data);
    }, [props.data]);
    console.log(defaultVal)

    const user = JSON.parse(localStorage.getItem('user')) || "";
    const [file, setFile] = useState([])
    const [product, setProduct] = useState(
        {
            companyName: '',
            seller_ref: `${user.id}`,
            comboId: 'false',
            imgUrl: [],
            gender: '',
            color: '',
            price: '',
            fabric: '',
            pattern: '',
            closure: '',
            size: '',
            pocketType: '',
            packOf: '',
            fabricCare: '',
            quantity: ''
        })


    useEffect(() => {
        if (defaultVal) {
            setProduct({
                companyName: defaultVal.companyName || '',
                seller_ref: user.id,
                comboId: defaultVal.comboId || '',
                imgUrl: defaultVal.imgUrl || [],
                gender: defaultVal.gender || '',
                color: defaultVal.color || '',
                price: defaultVal.price || '',
                fabric: defaultVal.fabric || '',
                pattern: defaultVal.pattern || '',
                size: defaultVal.size || '',
                closure: defaultVal.closure || '',
                pocketType: defaultVal.pocketType || '',
                packOf: defaultVal.packOf || '',
                fabricCare: defaultVal.fabricCare || '',
                quantity: defaultVal.quantity || ''
            });
        }
    }, [defaultVal,user.id]);



    useEffect(() => {
        console.log('Files state updated:', file);
    }, [file]);



    async function handlesubmit(e) {

        e.preventDefault();
        console.log(product);
        console.log(file)
        try {
            if (hasImagesChange) {
                console.log(product.imgUrl);
                const uploads = await Promise.all(file.map(ele => uploadImage(ele)));
                product.imgUrl = uploads
                console.log(uploads);
            }
            if (hasImagesChange === 'false') {
                // console.log(product);

                product.imgUrl = defaultVal.imgUrl;
            }
            console.log(product);

            if (defaultVal) {
                console.log("uuuuuuuuuu")
                const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_URL}/api/v1/seller/TrackPant/update/?prodId=${defaultVal._id}&hasImagesChange=${hasImagesChange}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    },
                    body: JSON.stringify(product)
                });
                const data = await response.json();
                if (data) {
                    console.log(data,);

                }
            }
            if (defaultVal === undefined) {

                const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_URL}/api/v1/seller/TrackPant/add`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    },
                    body: JSON.stringify(product)
                });
                const data = await response.json();
                console.log(data,);
            }



        } catch (error) {

            console.error('Error adding Tshirt :', error);
        }

        setProduct({
            companyName: '',
            seller_ref: `${user.id}`,
            comboId: 'false',
            imgUrl: [],
            gender: '',
            color: '',
            price: '',
            fabric: '',
            pattern: '',
            closure: '',
            size: '',
            pocketType: '',
            packOf: '',
            fabricCare: '',
            quantity: ''
        })

        setFile([]);
    }



    async function handleChange(e) {


        let value = e.target.value.trim();
        const name = e.target.name

        console.log(value);
        if (name === 'companyName') {
            value = value.trim().replace(/\s+/g, '-');
        }

        if (e.target.files) {
            setFile(Array.from(e.target.files));

            setHashasImagesChange(!hasImagesChange);

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
                                        <HiddenTextField
                                            type='hidden'
                                            variant="standard"
                                            name='comboId'
                                            id='combo-Id'
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            value={`false`}
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
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            // value={product.imgUrl}
                                            onChange={handleChange}
                                            required

                                        />
                                    </FormControl>

                                    {defaultVal && defaultVal.imgUrl.length > 0 &&
                                            <Box sx={{ display: 'flex', marginLeft: 2, marginBottom: 3 }}>

                                                {defaultVal.imgUrl.map((url, index) => (

                                                    <Card key={index} square elevation={0} sx={{ width: "75px", border: "1px solid lightgrey", padding: "1px" }}>

                                                        <CardMedia
                                                            component="img"
                                                            sx={{ margin: "auto", width: "75px", height: "75px", objectFit: "contain" }}
                                                            image={`${url}`}
                                                            alt="iphone-14"
                                                        />

                                                    </Card>
                                                ))}
                                            </Box>
                                        }

                                    <FormControl>
                                        <InputLabel
                                            id="gender-Type-label"
                                            required
                                            sx={{ fontWeight: 500, color: "black", backgroundColor: "transparent" }}
                                        >
                                            Gender
                                        </InputLabel>
                                        <Select
                                            id='gender-Type'
                                            variant="standard"
                                            labelId="gender-Type-label"
                                            name="gender"
                                            sx={{ margin: 2, textAlign: 'left' }}
                                            value={product.gender}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={"Men"}>Men</MenuItem>
                                            <MenuItem value={"Women"}>Women</MenuItem>

                                        </Select>
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
                                        <InputLabel
                                            id="fabric-Type-label"
                                            required
                                            sx={{ fontWeight: 500, color: "black", backgroundColor: "transparent" }}
                                        >
                                            Fabric Type
                                        </InputLabel>
                                        <Select
                                            id='fabric-Type'
                                            variant="standard"
                                            labelId="fabric-Type-label"
                                            name="fabric"
                                            sx={{ margin: 2, textAlign: 'left' }}
                                            value={product.fabric}
                                            onChange={handleChange}
                                        >

                                            <MenuItem value={"Cotton Blend"}>Cotton Blend</MenuItem>
                                            <MenuItem value={"Pure Cotton"}>Pure Cotton</MenuItem>
                                            <MenuItem value={"PolyCotton"}>PolyCotton</MenuItem>
                                            <MenuItem value={"Nylon"}>Nylon</MenuItem>
                                            <MenuItem value={"Polyester"}>Polyester</MenuItem>
                                            <MenuItem value={"Lycra Blend, Polyester"}>Lycra Blend, Polyester</MenuItem>

                                        </Select>
                                    </FormControl>

                                    <FormControl>
                                        <InputLabel
                                            id="pattern-Type-label"
                                            required
                                            sx={{ fontWeight: 500, color: "black", backgroundColor: "transparent" }}
                                        >
                                            Pattern Type
                                        </InputLabel>
                                        <Select
                                            id='pattern-Type'
                                            variant="standard"
                                            labelId="pattern-Type-label"
                                            name="pattern"
                                            sx={{ margin: 2, textAlign: 'left' }}
                                            value={product.pattern}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={"Solid"}>Solid</MenuItem>
                                            <MenuItem value={"Printed"}>Printed</MenuItem>
                                            <MenuItem value={"Washed"}>Washed </MenuItem>
                                            <MenuItem value={"Checkered"}>Checkered </MenuItem>

                                        </Select>
                                    </FormControl>

                                    <FormControl>
                                        <TextField
                                            variant="standard"

                                            id="closure"
                                            label="Closure "
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            name='closure'
                                            value={product.closure}
                                            onChange={handleChange}
                                            InputLabelProps={{
                                                style: { fontWeight: 500, color: "black" }
                                            }}


                                        />
                                    </FormControl>

                                    <FormControl>
                                        <InputLabel
                                            id="size-Type-label"
                                            required
                                            sx={{ fontWeight: 500, color: "black", backgroundColor: "transparent" }}
                                        >
                                            Size
                                        </InputLabel>
                                        <Select
                                            type='number'
                                            id='size-Type'
                                            variant="standard"
                                            labelId="size-Type-label"
                                            name="size"
                                            sx={{ margin: 2, textAlign: 'left' }}
                                            value={product.size}
                                            onChange={handleChange}
                                            required
                                        >

                                            <MenuItem value={"L"}>L</MenuItem>
                                            <MenuItem value={"M"}>M</MenuItem>
                                            <MenuItem value={"S"}>S</MenuItem>


                                        </Select>
                                    </FormControl>

                                    <FormControl>
                                        <TextField
                                            variant="standard"

                                            id="pocketType"
                                            label="pocketType "
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            name='pocketType'
                                            value={product.pocketType}
                                            onChange={handleChange}
                                            InputLabelProps={{
                                                style: { fontWeight: 500, color: "black" }
                                            }}
                                        />
                                    </FormControl>

                                    <FormControl>
                                        <TextField
                                            variant="standard"
                                            id="packOf"
                                            label="packOf "
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            name='packOf'
                                            value={product.packOf}
                                            onChange={handleChange}
                                            InputLabelProps={{
                                                style: { fontWeight: 500, color: "black" }
                                            }}
                                        />
                                    </FormControl>


                                    <FormControl>
                                        <TextField
                                            variant="standard"

                                            id="fabric-Care"
                                            label="fabric Care "
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            name='fabricCare'
                                            value={product.fabricCare}
                                            onChange={handleChange}
                                            InputLabelProps={{
                                                style: { fontWeight: 500, color: "black" }
                                            }}


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