import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { FormGroup, TextField, Button, Box, styled, Paper,Card, CardMedia  } from '@mui/material';
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


export default function AddCooler(props) {

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
            price: '',
            modelName: '',
            color: '',
            coolerType: '',
            bodyMaterial: '',
            numberofSpeeds: '',
            blowerOrFan: '',
            coolingMedia: '',
            remoteSupport: '',
            operatingMode: '',
            capacity: '',
            warranty: '',
            quantity: ''
        })

    useEffect(() => {
        if (defaultVal) {
            setProduct({
                companyName: defaultVal.companyName || '',
                seller_ref: user.id,
                comboId: defaultVal.comboId || '',
                imgUrl: defaultVal.imgUrl || [],
                price: defaultVal.price || '',
                modelName: defaultVal.modelName || '',
                color: defaultVal.color || '',
                coolerType: defaultVal.coolerType || '',
                bodyMaterial: defaultVal.bodyMaterial || '',
                numberofSpeeds: defaultVal.numberofSpeeds || '',
                blowerOrFan: defaultVal.blowerOrFan || '',
                coolingMedia: defaultVal.coolingMedia || '',
                remoteSupport: defaultVal.remoteSupport || '',
                operatingMode: defaultVal.operatingMode || '',
                capacity: defaultVal.capacity || '',
                warranty: defaultVal.warranty || '',
                quantity: defaultVal.quantity || ''
            });
        }
    }, [defaultVal, user.id]);


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
                const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_LOCAL_URL||process.env.REACT_APP_BACKEND_APP_API_URL}/api/v1/seller/Cooler/update/?prodId=${defaultVal._id}&hasImagesChange=${hasImagesChange}`, {
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

                const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_LOCAL_URL||process.env.REACT_APP_BACKEND_APP_API_URL}/api/v1/seller/Cooler/add`, {
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
                price: '',
                modelName: '',
                color: '',
                coolerType: '',
                bodyMaterial: '',
                numberofSpeeds: '',
                blowerOrFan: '',
                coolingMedia: '',
                remoteSupport: '',
                operatingMode: '',
                capacity: '',
                warranty: '',
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
                                            <MenuItem value={"Novamax"}>Novamax</MenuItem>
                                            <MenuItem value={"Bajaj"}>Bajaj</MenuItem>
                                            <MenuItem value={"Symphony"}>Symphony</MenuItem>
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

                                    <FormControl sx={{ width: "400px" }}>
                                        <InputLabel
                                            id="coolerType-name-label"
                                            required
                                            sx={{ fontWeight: 500, color: "black", backgroundColor: "transparent" }}
                                        >
                                            Cooler Type
                                        </InputLabel>
                                        <Select
                                            variant="standard"
                                            labelId="coolerType-name-label"
                                            id="cooler-Type"
                                            name="coolerType"
                                            sx={{ margin: 2, textAlign: 'left' }}
                                            value={product.coolerType}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={"Desert"}>Desert</MenuItem>
                                            <MenuItem value={"Personal/Room"}>Personal/Room</MenuItem>
                                            <MenuItem value={"Tower"}>Tower</MenuItem>
                                            <MenuItem value={"Window"}>Window</MenuItem>
                                        </Select>

                                    </FormControl>

                                    <FormControl>
                                        <TextField
                                            variant="standard"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            name='bodyMaterial'
                                            id="body-Material"
                                            value={product.bodyMaterial}
                                            label="Body Material"
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
                                            name='numberofSpeeds'
                                            id="number-of-Speeds"
                                            value={product.numberofSpeeds}
                                            label="Number of Speeds"
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
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            name='blowerOrFan'
                                            id="blower-Or-Fan"
                                            value={product.blowerOrFan}
                                            label="Blower Or Fan"
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
                                            name='coolingMedia'
                                            id="cooling-Media"
                                            value={product.coolingMedia}
                                            label="Cooling Media"
                                            onChange={handleChange}
                                            InputLabelProps={{
                                                style: { fontWeight: 500, color: "black" }
                                            }}

                                        />
                                    </FormControl>

                                    <FormControl sx={{ width: "400px" }}>
                                        <InputLabel
                                            id="remoteSupport-name-label"
                                            required
                                            sx={{ fontWeight: 500, color: "black", backgroundColor: "transparent" }}
                                        >
                                            Remote Support
                                        </InputLabel>
                                        <Select
                                            variant="standard"
                                            labelId="remoteSupport-name-label"
                                            id="remoteSupport"
                                            name="remoteSupport"
                                            sx={{ margin: 2, textAlign: 'left' }}
                                            value={product.remoteSupport}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={"Yes"}>Yes</MenuItem>
                                            <MenuItem value={"No"}>No</MenuItem>

                                        </Select>
                                    </FormControl>

                                    <FormControl>
                                        <TextField
                                            variant="standard"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            name='operatingMode'
                                            id="operating-Mode"
                                            value={product.operatingMode}
                                            label="Operating Mode"
                                            onChange={handleChange}
                                            InputLabelProps={{
                                                style: { fontWeight: 500, color: "black" }
                                            }}

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