import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { FormGroup, TextField, Button, Box, styled, Paper , Card, CardMedia } from '@mui/material';
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


export default function AddShoe(props) {

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
            imgUrl: [],
            comboId: '',
            gender: "",
            modelName: "",
            shoeType: "",
            price: '',
            color: '',
            size: '',
            outerMaterial: '',
            closure: '',
            season:'',
            careInstructions: '',
            quantity: ''
        })
     
        useEffect(() => {
            if (defaultVal) {
                setProduct({
                    companyName: defaultVal.companyName || '',
                    seller_ref: user.id,
                    imgUrl: defaultVal.imgUrl || [],
                    comboId: defaultVal.comboId || '',
                    gender: defaultVal.gender || '',
                    modelName: defaultVal.modelName || '',
                    shoeType: defaultVal.shoeType || '',
                    price: defaultVal.price || '',
                    color: defaultVal.color || '',
                    size: defaultVal.size || '',
                    outerMaterial: defaultVal.outerMaterial || '',
                    closure: defaultVal.closure || '',
                    season: defaultVal.season || '',
                    careInstructions: defaultVal.careInstructions || '',
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
                const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_URL}/api/v1/seller/Shoe/update/?prodId=${defaultVal._id}&hasImagesChange=${hasImagesChange}`, {
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

                const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_URL}/api/v1/seller/Shoe/add`, {
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
            imgUrl: [],
            comboId: '',
            gender: "",
            modelName: "",
            shoeType: "",
            price: '',
            color: '',
            size: '',
            outerMaterial: '',
            closure: '',
            season:'',
            careInstructions: '',
            quantity: ''
        })

        setFile([]);
    }

    async function handleChange(e) {
      
        
        let value = e.target.value.trim()
        const name = e.target.name
        // console.log(name)
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
                            Shoe
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
                                        <InputLabel
                                            id="gender-Type-label"
                                            required
                                            sx={{ fontWeight: 500, color: "black", backgroundColor: "transparent" }}
                                        >
                                            Ideal For
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
                                            id="shoe-Type-label"
                                            required
                                            sx={{ fontWeight: 500, color: "black", backgroundColor: "transparent" }}
                                        >
                                            Shoe Type
                                        </InputLabel>
                                        <Select
                                            id='shoe-Type'
                                            variant="standard"
                                            labelId="shoe-Type-label"
                                            name="shoeType"
                                            sx={{ margin: 2, textAlign: 'left' }}
                                            value={product.shoeType}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={"Casual"}>Casual</MenuItem>
                                            <MenuItem value={"Formal"}>Formal</MenuItem>
                                            <MenuItem value={"Sports"}>Sports</MenuItem>

                                        </Select>
                                    </FormControl>
                                    
                                    <FormControl>
                                        <TextField
                                            type='text'
                                            variant="standard"
                                            name='modelName'
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            value={product.modelName}
                                            label="Model Name"
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
                                            name='typeForSports'
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            value={product.typeForSports}
                                            label="type For Sports"
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
                                            type='number'
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
                                                name='outerMaterial'
                                                sx={{ margin: 2, textAlign: 'left', }}
                                                value={product.outerMaterial}
                                                label="Outer Material "
                                                onChange={handleChange}
                                                
                                                InputLabelProps={{
                                                    style: { fontWeight: 500, color: "black" }
                                                }}

                                            />
                                        </FormControl>
                                        <FormControl>
                                            <TextField
                                                type='text'
                                                variant="standard"
                                                name='closure'
                                                sx={{ margin: 2, textAlign: 'left', }}
                                                value={product.closure}
                                                label="Closure "
                                                onChange={handleChange}
                                              
                                                InputLabelProps={{
                                                    style: { fontWeight: 500, color: "black" }
                                                }}

                                            />
                                        </FormControl>

                                        <FormControl>
                                            <TextField
                                                type='text'
                                                variant="standard"
                                                name='packOf'
                                                sx={{ margin: 2, textAlign: 'left', }}
                                                value={product.packOf}
                                                label="Pack-Of"
                                                onChange={handleChange}
                                            
                                                InputLabelProps={{
                                                    style: { fontWeight: 500, color: "black" }
                                                }}

                                            />
                                        </FormControl>

                                        <FormControl>
                                            <TextField
                                                type='text'
                                                variant="standard"
                                                name='season'
                                                sx={{ margin: 2, textAlign: 'left', }}
                                                value={product.season}
                                                label="Season"
                                                onChange={handleChange}
                                            
                                                InputLabelProps={{
                                                    style: { fontWeight: 500, color: "black" }
                                                }}

                                            />
                                        </FormControl>

                                        <FormControl>
                                            <TextField
                                                type='text'
                                                variant="standard"
                                                name='careInstructions'
                                                sx={{ margin: 2, textAlign: 'left', }}
                                                value={product.careInstructions}
                                                label="Care Instructions "
                                                onChange={handleChange}
                                            
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