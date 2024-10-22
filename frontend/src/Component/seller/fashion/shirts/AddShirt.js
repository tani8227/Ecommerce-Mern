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


export default function AddShirt(props) {

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
            comboId:'false',
            imgUrl: [],
            gender: '',
            productType:'',
            color: '',
            price: '',
            fit:'',
            fabric:'',
            sleeve:'',
            pattern:'',
            size:'',
            collarType:'',
            hem:'',
            fabricCare:'',
            suitableFor:'',
            quantity:''
        })

        useEffect(() => {
            if (defaultVal) {
                setProduct({
                    companyName: defaultVal.companyName || '',
                    seller_ref: user.id,
                    comboId: defaultVal.comboId || '',
                    imgUrl: defaultVal.imgUrl || [],
                    gender: defaultVal.gender || '',
                    productType: defaultVal.productType || '',
                    color: defaultVal.color || '',
                    price: defaultVal.price || '',
                    fit: defaultVal.fit || '',
                    fabric: defaultVal.fabric || '',
                    sleeve: defaultVal.sleeve || '',
                    pattern: defaultVal.pattern || '',
                    size: defaultVal.size || '',
                    collarType: defaultVal.collarType || '',
                    hem: defaultVal.hem || '',
                    fabricCare: defaultVal.fabricCare || '',
                    suitableFor: defaultVal.suitableFor || '',
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
                const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_URL}/api/v1/seller/Shirt/update/?prodId=${defaultVal._id}&hasImagesChange=${hasImagesChange}`, {
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

                const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_URL}/api/v1/seller/Shirt/add`, {
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
            comboId:'false',
            imgUrl: [],
            gender: '',
            productType:'',
            color: '',
            price: '',
            fit:'',
            fabric:'',
            sleeve:'',
            pattern:'',
            size:'',
            collarType:'',
            hem:'',
            fabricCare:'',
            suitableFor:'',
            quantity:''
        })

        setFile([]);
    }

    
    async function handleChange(e) {


        let value = e.target.value.trim();
        const name = e.target.name
        if(name==='companyName')
            {
                 value=value.trim().replace(/\s+/g, '-');
            }
 console.log(value);


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
                                            value={'false'}
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
                                            id="fit-Type-label"
                                            required
                                            sx={{ fontWeight: 500, color: "black", backgroundColor: "transparent" }}
                                        >
                                            fit Type
                                        </InputLabel>
                                        <Select
                                            id='fit-Type'
                                            variant="standard"
                                            labelId="fit-Type-label"
                                            name="fit"
                                            sx={{ margin: 2, textAlign: 'left' }}
                                            value={product.fit}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={"Regular"}>Regular</MenuItem>
                                            <MenuItem value={"Slim"}>Slim</MenuItem>
                                           
                                           
                                        </Select>
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
                                            <MenuItem value={"Polyester"}>Polyester</MenuItem>
                                           
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
                                    <InputLabel
                                            id="sleeve-Type-label"
                                            required
                                            sx={{ fontWeight: 500, color: "black", backgroundColor: "transparent" }}
                                        >
                                            Sleeve Type
                                        </InputLabel>
                                        <Select
                                            id='sleeve-Type'
                                            variant="standard"
                                            labelId="sleeve-Type-label"
                                            name="sleeve"
                                            sx={{ margin: 2, textAlign: 'left' }}
                                            value={product.sleeve}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={"Full Sleeve"}>Full Sleeve</MenuItem>
                                            <MenuItem value={"Half Sleeve"}>Half Sleeve</MenuItem>
                                            <MenuItem value={"3/4th Sleeve"}>3/4th Sleeve </MenuItem>
                                           
                                        </Select>
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
                                            id='size-Type'
                                            variant="standard"
                                            labelId="size-Type-label"
                                            name="size"
                                            sx={{ margin: 2, textAlign: 'left' }}
                                            value={product.size}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={"M"}>M</MenuItem>
                                            <MenuItem value={"S"}>S</MenuItem>
                                            <MenuItem value={"L"}>L</MenuItem>
                                           
                                        </Select>
                                    </FormControl>

                                    <FormControl>
                                    <InputLabel
                                            id="collar-Type-label"
                                            required
                                            sx={{ fontWeight: 500, color: "black", backgroundColor: "transparent" }}
                                        >
                                            collar Type
                                        </InputLabel>
                                        <Select
                                            id='collar-Type'
                                            variant="standard"
                                            labelId="collar-Type-label"
                                            name="collarType"
                                            sx={{ margin: 2, textAlign: 'left' }}
                                            value={product.collarType}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={"Spread"}>Spread </MenuItem>
                                            <MenuItem value={"Curved"}>Curved</MenuItem>
                                            <MenuItem value={"Cut Away"}>Cut Away</MenuItem>
                                            <MenuItem value={"Other"}>Other</MenuItem>
                                           
                                        </Select>
                                    </FormControl>


                                    <FormControl>

                                        <TextField
                                            variant="standard"

                                            id="hem"
                                            label="hem"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            name='hem'
                                            value={product.hem}
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
                                            label="Fabric Care"
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
                                            variant="standard"

                                            id="suitable-For"
                                            label="Suitable For"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            name='suitableFor'
                                            value={product.suitableFor}
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