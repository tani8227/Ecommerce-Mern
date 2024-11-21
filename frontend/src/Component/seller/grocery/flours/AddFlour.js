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


export default function AddFlours(props) {

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
            comboId: '',
            imgUrl: [],
            flourType: '',
            price: '',
            type: '',
            modelName: '',
            maximumShelfLife: '',
            about: '',
            netWeight: '',
            quantity: ''
        })


    useEffect(() => {
        if (defaultVal) {
            setProduct({
                companyName: defaultVal.companyName || '',
                seller_ref: user.id,
                comboId: defaultVal.comboId || '',
                imgUrl: defaultVal.imgUrl || [],
                flourType: defaultVal.flourType || '',
                price: defaultVal.price || '',
                type: defaultVal.type || '',
                modelName: defaultVal.modelName || '',
                maximumShelfLife: defaultVal.maximumShelfLife || '',
                about: defaultVal.about || '',
                netWeight: defaultVal.netWeight || '',
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
                const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_LOCAL_URL||process.env.REACT_APP_BACKEND_APP_API_URL}/api/v1/seller/Flour/update/?prodId=${defaultVal._id}&hasImagesChange=${hasImagesChange}`, {
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

                const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_LOCAL_URL||process.env.REACT_APP_BACKEND_APP_API_URL}/api/v1/seller/Flour/add`, {
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
        setProduct(
            {
                companyName: '',
                seller_ref: `${user.id}`,
                comboId: '',
                imgUrl: [],
                gender: '',
                productType: "",
                color: '',
                price: '',
                fit: '',
                fabric: '',
                pattern: '',
                sleeve: '',
                size: '',
                neckType: '',
                fabricCare: '',
                packOf: '',
                suitableFor: '',
                quantity: ''
            }
        )
        setFile([]);
    }


    async function handleChange(e) {


        const value = e.target.value
        const name = e.target.name




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
                                            <MenuItem value={"AASHIRVAAD"}>AASHIRVAAD</MenuItem>
                                            <MenuItem value={"PILLSBURY"}>PILLSBURY</MenuItem>
                                            <MenuItem value={"FORTUNE"}>FORTUNE</MenuItem>
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
                                            id="file"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            // value={product.imgUrl}
                                            onChange={handleChange}
                                            required
                                        />
                                    </FormControl>

                                    <FormControl sx={{ width: "400px" }}>
                                        <InputLabel
                                            id="company-name-label"
                                            required
                                            sx={{ fontWeight: 500, color: "black", backgroundColor: "transparent" }}
                                        >
                                            flour Type
                                        </InputLabel>
                                        <Select
                                            variant="standard"
                                            labelId="flour-type-label"
                                            id="flour-type"
                                            name="flourType"
                                            sx={{ margin: 2, textAlign: 'left' }}
                                            value={product.flourType}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={"Wheat"}>Wheat</MenuItem>
                                            <MenuItem value={"Rice"}>Rice</MenuItem>
                                            <MenuItem value={"Corn"}>Corn</MenuItem>
                                        </Select>
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

                                    <FormControl sx={{ width: "400px" }}>
                                        <InputLabel
                                            id="type-label"
                                            required
                                            sx={{ fontWeight: 500, color: "black", backgroundColor: "transparent" }}
                                        >
                                            Type
                                        </InputLabel>
                                        <Select
                                            variant="standard"
                                            labelId="type-label"
                                            id="type"
                                            name="type"
                                            sx={{ margin: 2, textAlign: 'left' }}
                                            value={product.type}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={"Multigrain Flour"}>Multigrain Flour</MenuItem>
                                            <MenuItem value={"Chakki Fresh Atta"}>Chakki Fresh Atta</MenuItem>
                                            <MenuItem value={"Whole-Wheat Flour"}>Whole-Wheat Flour</MenuItem>

                                        </Select>
                                    </FormControl>




                                    <FormControl>
                                        <TextField
                                            type='text'
                                            variant="standard"
                                            name='modelName'
                                            id="Model-Name"
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
                                            variant="standard"
                                            id="maximum-Shel-fLife"
                                            label="Maximum Shelf Life"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            name='maximumShelfLife'
                                            value={product.maximumShelfLife}
                                            onChange={handleChange}
                                            InputLabelProps={{
                                                style: { fontWeight: 500, color: "black" }
                                            }}
                                            required
                                        />
                                    </FormControl>

                                    <FormControl>
                                        <TextField
                                            type='text'
                                            variant="standard"
                                            name='netWeight'
                                            id='netWeight'
                                            label="netWeight"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            value={product.netWeight}
                                            onChange={handleChange}
                                            InputLabelProps={{
                                                style: { fontWeight: 500, color: "black" }
                                            }}
                                            required
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <TextField
                                            type='text'
                                            variant="standard"
                                            name='about'
                                            id='about'
                                            label="about the Product"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            value={product.about}
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