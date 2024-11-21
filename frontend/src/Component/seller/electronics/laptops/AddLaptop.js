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


export default function AddLaptop(props) {

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
            comboId:'',
            imgUrl: [],
            price: '',
            type: '',
            modelName: '',
            color: '',
            series: '',
            displaySize: '',
            processorBrand: '',
            processorName: '',
            processorGeneration: '',
            storageType: '',
            storageCapacity: '',
            ram: '',
            ramType: '',
            dedicatedGraphicsMemoryType: '',
            operatingSystem: '',
            batteryBackup: '',
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
                    type: defaultVal.type || '',
                    modelName: defaultVal.modelName || '', 
                    color: defaultVal.color || '',
                    series: defaultVal.series || '',
                    displaySize: defaultVal.displaySize || '',
                    processorBrand: defaultVal.processorBrand || '', 
                    processorName: defaultVal.processorName || '', 
                    processorGeneration: defaultVal.processorGeneration || '',
                    storageType: defaultVal.storageType || '',
                    storageCapacity: defaultVal.storageCapacity || '',
                    ram: defaultVal.ram || '',
                    ramType: defaultVal.ramType || '',
                    dedicatedGraphicsMemoryType: defaultVal.dedicatedGraphicsMemoryType || '',
                    operatingSystem: defaultVal.operatingSystem || '',
                    batteryBackup: defaultVal.batteryBackup || '',
                    warranty: defaultVal.warranty || '',
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
                product.imgUrl =uploads
                console.log(uploads);
            }
            if (hasImagesChange==='false') {
                // console.log(product);

                product.imgUrl = defaultVal.imgUrl;
            }
            console.log(product);

            if (defaultVal) {
                console.log("uuuuuuuuuu")
                const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_LOCAL_URL||process.env.REACT_APP_BACKEND_APP_API_URL}/api/v1/seller/Laptop/update/?prodId=${defaultVal._id}&hasImagesChange=${hasImagesChange}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem('token')}`
                    },
                    body: JSON.stringify(product)
                });
                const data = await response.json();
                if(data)
                    {
                        console.log(data,);

                    }
            }
            if (defaultVal===undefined) {

                const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_LOCAL_URL||process.env.REACT_APP_BACKEND_APP_API_URL}/api/v1/seller/Laptop/add`, {
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
                comboId:'',
                imgUrl: [],
                price: '',
                type: '',
                modelName: '',
                color: '',
                series: '',
                displaySize: '',
                processorBrand: '',
                processorName: '',
                processorGeneration: '',
                storageType: '',
                storageCapacity: '',
                ram: '',
                ramType: '',
                dedicatedGraphicsMemoryType: '',
                operatingSystem: '',
                batteryBackup: '',
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
                                            <MenuItem value={"HP"}>HP</MenuItem>
                                            <MenuItem value={"Lanavo"}>Lanavo</MenuItem>
                                            <MenuItem value={"Asus"}>Asus</MenuItem>
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

                                    <FormControl sx={{ width: "400px" }}>
                                        <InputLabel
                                            id="type-name-label"
                                            required
                                            sx={{ fontWeight: 500, color: "black", backgroundColor: "transparent" }}
                                            >
                                            Laptop Type
                                        </InputLabel>
                                        <Select
                                            variant="standard"
                                            labelId="type-name-label"
                                            id="type"
                                            name="type"
                                            sx={{ margin: 2, textAlign: 'left' }}
                                            value={product.type}
                                            onChange={handleChange}
                                            >
                                            <MenuItem value={"Gaming Laptop"}>Gaming Laptop</MenuItem>
                                            <MenuItem value={"Laptop"}>Laptop</MenuItem>
                                            <MenuItem value={"Thin And Light Laptop"}>Thin And Light Laptop</MenuItem>
                                            <MenuItem value={"Notebook"}>Notebook</MenuItem>
                                        </Select>
                                    </FormControl>
                                            
                                    <FormControl>
                                        <TextField
                                            type='text'
                                            variant="standard"
                                            name='modelName'
                                            id="Model-name"
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
                                            type='text'
                                            variant="standard"
                                            name='series'
                                            id="series"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            value={product.series}
                                            label="Series"
                                            onChange={handleChange}
                                           
                                            InputLabelProps={{
                                                style: { fontWeight: 500, color: "black" }
                                            }}
                                        />
                                    </FormControl>




                                            <FormControl>
                                                <TextField
                                                    variant="standard"
                                                    id="displaySize"
                                                    label="DisplaySize "
                                                    sx={{ margin: 2, textAlign: 'left', }}
                                                    name='displaySize'
                                                    value={product.displaySize}
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
                                            name='processorBrand'
                                            id="processor-Brand"
                                            value={product.processorBrand}
                                            label="Processor Brand"
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
                                            name='processorName'
                                            id="processor-Name"
                                            value={product.processorName}
                                            label="Processor Name"
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
                                            name='processorGeneration'
                                            id="processor-Generation"
                                            value={product.processorGeneration}
                                            label="Processor Generation"
                                            onChange={handleChange}
                                            InputLabelProps={{
                                                style: { fontWeight: 500, color: "black" }
                                            }}
                                           
                                        />

                                    </FormControl>
                                     
                                    <FormControl sx={{ width: "400px" }}>
                                        <InputLabel
                                            id="storageType-name-label"
                                            required
                                            sx={{ fontWeight: 500, color: "black", backgroundColor: "transparent" }}
                                            >
                                            Storage Type 
                                        </InputLabel>
                                        <Select
                                            variant="standard"
                                            labelId="storageType-name-label"
                                            id="storage-Type"
                                            name="storageType"
                                            sx={{ margin: 2, textAlign: 'left' }}
                                            value={product.storageType}
                                            onChange={handleChange}
                                            >
                                            <MenuItem value={"SSD"}>SSD</MenuItem>
                                            <MenuItem value={"HDD"}>HDD</MenuItem>
                                            
                                        </Select>
                                    </FormControl> 

                                    <FormControl>
                                        <TextField
                                            type='text'
                                            variant="standard"
                                            name='storageCapacity'
                                            id='storage-Capacity'
                                            label="Storage Capacity"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            value={product.storageCapacity}
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
                                            name='ram'
                                            id='ram'
                                            label="Ram"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            value={product.ram}
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
                                            name='ramType'
                                            id='ram-Type'
                                            label="Ram Type"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            value={product.ramType}
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
                                            name='dedicatedGraphicsMemoryType'
                                            id='dedicated-GraphicsMemory-Type'
                                            label="Dedicated Graphics Memory Type"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            value={product.dedicatedGraphicsMemoryType}
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
                                            name='operatingSystem'
                                            id='operating-System'
                                            label="Operating System"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            value={product.operatingSystem}
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
                                            name='batteryBackup'
                                            id='battery-Backup'
                                            label="Battery Backup"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            value={product.batteryBackup}
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
                                            name='warranty'
                                            id='warranty'
                                            label="Warranty"
                                            sx={{ margin: 2, textAlign: 'left', }}
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