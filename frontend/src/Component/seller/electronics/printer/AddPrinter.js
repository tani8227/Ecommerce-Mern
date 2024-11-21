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


export default function AddPrinter(props) {

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
            modelName: '',
            printingMethod: '',
            type : '',
            functions: '',
            printingOutput: '',
            refillType:'',
            wirelessSupport:'',
            usbSupport:'',
            salesBox:'',
            voiceAssistantCompatibility:'',
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
                    printingMethod: defaultVal.printingMethod || '',
                    type: defaultVal.type || '',
                    functions: defaultVal.functions || '',
                    printingOutput: defaultVal.printingOutput || '',
                    refillType: defaultVal.refillType || '',
                    wirelessSupport: defaultVal.wirelessSupport || '',
                    usbSupport: defaultVal.usbSupport || '',
                    salesBox: defaultVal.salesBox || '',
                    voiceAssistantCompatibility: defaultVal.voiceAssistantCompatibility || '',
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
                const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_LOCAL_URL||process.env.REACT_APP_BACKEND_APP_API_URL}/api/v1/seller/Printer/update/?prodId=${defaultVal._id}&hasImagesChange=${hasImagesChange}`, {
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

                const response = await fetch(`${process.env.REACT_APP_BACKEND_APP_API_LOCAL_URL||process.env.REACT_APP_BACKEND_APP_API_URL}/api/v1/seller/Printer/add`, {
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
                modelName: '',
                printingMethod: '',
                type : '',
                functions: '',
                printingOutput: '',
                refillType:'',
                wirelessSupport:'',
                usbSupport:'',
                salesBox:'',
                voiceAssistantCompatibility:'',
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
                                            <MenuItem value={"Canon"}>Canon</MenuItem>
                                            <MenuItem value={"HP"}>HP</MenuItem>
                                            <MenuItem value={"Epson"}>Epson</MenuItem>
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
                                            id="model-Name"
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

                                    <FormControl sx={{ width: "400px" }}>
                                        <InputLabel
                                            id="printingMethod-name-label"
                                            required
                                            sx={{ fontWeight: 500, color: "black", backgroundColor: "transparent" }}
                                            >
                                            Pinting Method 
                                        </InputLabel>
                                        <Select
                                            variant="standard"
                                            labelId="printingMethod-name-label"
                                            id="printing-Method"
                                            name="printingMethod"
                                            sx={{ margin: 2, textAlign: 'left' }}
                                            value={product.printingMethod}
                                            onChange={handleChange}
                                            >
                                            <MenuItem value={"Laser"}>Laser</MenuItem>
                                            <MenuItem value={"Ink Tank"}>Ink Tank</MenuItem>
                                            <MenuItem value={"Inkjet"}>Inkjet</MenuItem>
                                        </Select>
                                    </FormControl> 

                                    <FormControl sx={{ width: "400px" }}>
                                        <InputLabel
                                            id="company-name-label"
                                            required
                                            sx={{ fontWeight: 500, color: "black", backgroundColor: "transparent" }}
                                            >
                                            Printer Type
                                        </InputLabel>
                                        <Select
                                            variant="standard"
                                            labelId="type-label"
                                            id="Type"
                                            name="type"
                                            sx={{ margin: 2, textAlign: 'left' }}
                                            value={product.type}
                                            onChange={handleChange}
                                            >
                                           
                                            <MenuItem value={"Multi-function"}>Multi-function</MenuItem>
                                            <MenuItem value={"Not Multi-function"}>Not Multi-function</MenuItem>
                                        </Select>
                                    </FormControl> 


                                    <FormControl>
                                        <TextField
                                            variant="standard"
                                            sx={{ margin: 2, textAlign: 'left', }}
                                            name='functions'
                                            id="functions"
                                            value={product.functions}
                                            label="Functions"
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
                                            name='printingOutput'
                                            id="printing-Output"
                                            value={product.printingOutput}
                                            label="Printing Output"
                                            onChange={handleChange}
                                            InputLabelProps={{
                                                style: { fontWeight: 500, color: "black" }
                                            }}
                                            required
                                        />
                                    </FormControl>

                                    <FormControl sx={{ width: "400px" }}>
                                        <InputLabel
                                            id="refillType-name-label"
                                            required
                                            sx={{ fontWeight: 500, color: "black", backgroundColor: "transparent" }}
                                            >
                                            Refill Type
                                        </InputLabel>
                                        <Select
                                            variant="standard"
                                            labelId="refillType-name-label"
                                            id="refill-Type"
                                            name="refillType"
                                            sx={{ margin: 2, textAlign: 'left' }}
                                            value={product.refillType}
                                            onChange={handleChange}
                                            >
                                            <MenuItem value={"Ink Bottle"}>Ink Bottle</MenuItem>
                                            <MenuItem value={"Ink Cartridge"}>Ink Cartridge</MenuItem>
                                            <MenuItem value={"Refillable Ink Tank"}>Refillable Ink Tank</MenuItem>
                                            <MenuItem value={"Toner Cartridge"}>Toner Cartridge</MenuItem>
                                        </Select>
                                    </FormControl>


                                    <FormControl sx={{ width: "400px" }}>
                                        <InputLabel
                                            id="wirelessSupport-name-label"
                                            required
                                            sx={{ fontWeight: 500, color: "black", backgroundColor: "transparent" }}
                                            >
                                            Wireless Support 
                                        </InputLabel>
                                        <Select
                                            variant="standard"
                                            labelId="wirelessSupport-name-label"
                                            id="usb-Support"
                                            name="wirelessSupport"
                                            sx={{ margin: 2, textAlign: 'left' }}
                                            value={product.wirelessSupport}
                                            onChange={handleChange}
                                            >
                                            <MenuItem value={"Yes"}>Yes</MenuItem>
                                            <MenuItem value={"No"}>No</MenuItem>
                                            
                                        </Select>
                                    </FormControl> 

                                    <FormControl sx={{ width: "400px" }}>
                                        <InputLabel
                                            id="usbSupport-name-label"
                                            required
                                            sx={{ fontWeight: 500, color: "black", backgroundColor: "transparent" }}
                                            >
                                            USB Support 
                                        </InputLabel>
                                        <Select
                                            variant="standard"
                                            labelId="usbSupport-name-label"
                                            id="usb-Support"
                                            name="usbSupport"
                                            sx={{ margin: 2, textAlign: 'left' }}
                                            value={product.usbSupport}
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
                                            name='voiceAssistantCompatibility'
                                            id="voice-Assistant-Compatibility"
                                            value={product.voiceAssistantCompatibility}
                                            label="Voice Assistant Compatibility"
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
                                            name='salesBox'
                                            id="sales-Box"
                                            value={product.salesBox}
                                            label="In Sales Box"
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