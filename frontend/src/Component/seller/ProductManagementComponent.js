import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ProductCategory from './ProductCategoryComponent.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MobileDetails from './productDetails/mobile/MobileDetails.js'
import FridgeDeatils from './productDetails/appliances/FridgeDetails.js'
import CoolerDetails from './productDetails/appliances/CoolerDetails.js'
import ACDetails from './productDetails/appliances/ACDeatils.js'
import WashingMachineDetails from './productDetails/appliances/WashingMachineDetails.js'
import LedTVDetails from './productDetails/appliances/LedTVDetails.js'
import WaterPurifierDetails from './productDetails/appliances/WaterPurifierDetails.js'
import LaptopDetails from './productDetails/electronics/LaptopDetails.js'
import CameraDetails from './productDetails/electronics/CameraDetails.js'
import PrinterDetails from './productDetails/electronics/PrinterDetails.js'
import ShirtDetails from './productDetails/fashion/ShirtDetails.js'
import TshirtDetails from './productDetails/fashion/TshirtDetails.js'
import JeansDetails from './productDetails/fashion/JeansDetails.js'
import ShoeDetails from './productDetails/fashion/ShoeDetails.js'
import TrackPantDetails from './productDetails/fashion/TrackPantDetails.js'
import WindCheaterDetails from './productDetails/fashion/WindCheaterDetails.js'
import FlourDetails from './productDetails/grocery/FlourDetails.js'
import DetergentDetails from './productDetails/grocery/DetergentDetails.js'
import ShampooDetails from './productDetails/grocery/ShampooDetails.js'
import OralCareDetails from './productDetails/grocery/OralCareDetails.js'
import CleaningEssentialsDetails from './productDetails/grocery/CleaningEssentialsDetails.js'
// import PulsesDetails from './productDetails/grocery/PulsesDetails.js'

import useToGetAllSellerOrderedProduct from '../utility/useToGetAllSellerOrderedProduct.js';
import useToGetAllOrderByModalName from '../utility/useToGetAllOrderByModalName.js';
import useToDeleteItem from '../utility/useToDeleteItem.js'




export default function ProductManagement() {

  const param = useParams();
  console.log(param.item);
  const [allProduct, setAllProduct] = useState();
  const [flg, setFlg] = useState(false);
  const [allParamsProducct, setAllParamsProducct] = useState();
  const products = useToGetAllSellerOrderedProduct(flg)
  const paramsProduct = useToGetAllOrderByModalName(param.item, flg)
  const handleDeleteProduct=useToDeleteItem();



  useEffect(() => {
    if (products) {
      setAllProduct(products);
    }
  }, [allProduct, products, flg]);

  useEffect(() => {
    if (paramsProduct !== undefined) {
      setAllParamsProducct(paramsProduct);
    }
   
  }, [allParamsProducct, paramsProduct, flg]);

  function handledelete(modalName, itemId)
  {
          handleDeleteProduct(modalName, itemId)
          
              
          setFlg(!flg);       
  }



  console.log(allProduct);
  console.log(paramsProduct);

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container sx={{ display: "flex", flexDirection: { xs: "column", sm: "row", justifyContent: "space-between", position: "relative" }, backgroundColor:'white' }} >
        <Grid item xs={12} sm={4} md={4} sx={{ flexWrap: "wrap"}} >
         
         <ProductCategory  allProduct={allProduct}/>
          
       
        </Grid>
        <Grid item xs={12} sm={8} sx={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", backgroundColor: "gainsboro", padding: 0, borderLeft:'1px solid lightgrey' }}>
          {param.item===undefined&&allProduct && allProduct.map((prod, index) =>
          (            
           
             <Grid key={prod._id||index} container  sx={{ display: 'flex', flexDirection: { xs: "column", sm: "column", md: "column" }, justifyContent: { sx: "center", sm: "flex-start", md: "flex-start", lg: "flex-start" }, backgroundColor: "white", padding: 0 }} >
              {param.item === undefined && prod.modalName === 'Mobile' && <MobileDetails data={prod.products} modalName={prod.modalName} handledelete={handledelete} />}
              {param.item === undefined && prod.modalName === 'Fridge' && <FridgeDeatils data={prod.products} modalName={prod.modalName} handledelete={handledelete}/>}
              {param.item === undefined && prod.modalName === 'LedTV' && <LedTVDetails data={prod.products} modalName={prod.modalName} handledelete={handledelete}/>}
              {param.item === undefined && prod.modalName === 'Cooler' && <CoolerDetails data={prod.products} modalName={prod.modalName} handledelete={handledelete}/>}
              {param.item === undefined && prod.modalName === 'AC' && <ACDetails data={prod.products} modalName={prod.modalName} handledelete={handledelete}/>}
              {param.item === undefined && prod.modalName === 'WaterPurifier' && <WaterPurifierDetails data={prod.products} modalName={prod.modalName} handledelete={handledelete}/>}
              {param.item === undefined && prod.modalName === 'WashingMachine' && <WashingMachineDetails data={prod.products} modalName={prod.modalName} handledelete={handledelete}/>}
              {param.item === undefined && prod.modalName === 'Shirt' && <ShirtDetails data={prod.products} modalName={prod.modalName} handledelete={handledelete}/>}
              {param.item === undefined && prod.modalName === 'Tshirt' && <TshirtDetails data={prod.products} modalName={prod.modalName} handledelete={handledelete}/>}
              {param.item === undefined && prod.modalName === 'Jeans' && <JeansDetails data={prod.products} modalName={prod.modalName} handledelete={handledelete}/>}
              {param.item === undefined && prod.modalName === 'Shoe' && <ShoeDetails data={prod.products} modalName={prod.modalName} handledelete={handledelete}/>}
              {param.item === undefined && prod.modalName === 'TrackPant' && <TrackPantDetails data={prod.products} modalName={prod.modalName} handledelete={handledelete}/>}
              {param.item === undefined && prod.modalName === 'WindCheater' && <WindCheaterDetails data={prod.products} modalName={prod.modalName} handledelete={handledelete}/>}
              {param.item === undefined && prod.modalName === 'Laptop' && <LaptopDetails data={prod.products} modalName={prod.modalName} handledelete={handledelete} />}
              {param.item === undefined && prod.modalName === 'Camera' && <CameraDetails data={prod.products} modalName={prod.modalName} handledelete={handledelete}/>}
              {param.item === undefined && prod.modalName === 'Printer' && <PrinterDetails data={prod.products} modalName={prod.modalName} handledelete={handledelete}/>}
              {param.item === undefined && prod.modalName === 'Flour' && <FlourDetails data={prod.products} modalName={prod.modalName} handledelete={handledelete}/>}
              {param.item === undefined && prod.modalName === 'Detergent' && <DetergentDetails data={prod.products} modalName={prod.modalName} handledelete={handledelete}/>}
              {param.item === undefined && prod.modalName === 'Shampoo' && <ShampooDetails data={prod.products} modalName={prod.modalName} handledelete={handledelete}/>}
              {param.item === undefined && prod.modalName === 'OralCare' && <OralCareDetails data={prod.products} modalName={prod.modalName} handledelete={handledelete}/>}
              {param.item === undefined && prod.modalName === 'CleaningEssentials' && <CleaningEssentialsDetails data={prod.products} modalName={prod.modalName} handledelete={handledelete}/>} 

            </Grid>
          
          ))}

          {param.item &&
            <Grid   container sx={{ display: 'flex', flexDirection: { xs: "column", sm: "column", md: "column" }, justifyContent: { sx: "center", sm: "flex-start", md: "flex-start", lg: "flex-start" }, backgroundColor: "white", padding: 0 }} >
              {param.item === 'Mobile' && <MobileDetails data={paramsProduct} handledelete={handledelete}  modalName={param.item}/>}
              {param.item === 'Fridge' && <FridgeDeatils data={paramsProduct} handledelete={handledelete}  modalName={param.item}/>}
              {param.item === 'LedTV' && <LedTVDetails data={paramsProduct} handledelete={handledelete}  modalName={param.item}/>}
              {param.item === 'Cooler' && <CoolerDetails data={paramsProduct} handledelete={handledelete}  modalName={param.item}/>}
              {param.item === 'AC' && <ACDetails data={paramsProduct} handledelete={handledelete}  modalName={param.item}/>}
              {param.item === 'WaterPurifier' && <WaterPurifierDetails data={paramsProduct} handledelete={handledelete}  modalName={param.item}/>}
              {param.item === 'WashingMachine' && <WashingMachineDetails data={paramsProduct} handledelete={handledelete}  modalName={param.item}/>} 
              {param.item === 'Shirt' && <ShirtDetails data={paramsProduct} handledelete={handledelete}  modalName={param.item}/>}
              {param.item === 'Tshirt' && <TshirtDetails data={paramsProduct} handledelete={handledelete}  modalName={param.item}/>}
              {param.item === 'Jeans' && <JeansDetails data={paramsProduct} handledelete={handledelete}  modalName={param.item}/>}
              {param.item === 'Shoe' && <ShoeDetails data={paramsProduct} handledelete={handledelete}  modalName={param.item}/>}
              {param.item === 'TrackPant' && <TrackPantDetails data={paramsProduct} handledelete={handledelete}  modalName={param.item}/>}
              {param.item === 'WindCheater' && <WindCheaterDetails data={paramsProduct} handledelete={handledelete}  modalName={param.item}/>}
              {param.item === 'Laptop' && <LaptopDetails data={paramsProduct} handledelete={handledelete}  modalName={param.item}/>}
              {param.item === 'Camera' && <CameraDetails data={paramsProduct} handledelete={handledelete}  modalName={param.item}/>}
              {param.item === 'Printer' && <PrinterDetails data={paramsProduct} handledelete={handledelete}  modalName={param.item}/>}
              {param.item === 'Flour' && <FlourDetails data={paramsProduct} handledelete={handledelete}  modalName={param.item}/>}
              {param.item === 'Detergent' && <DetergentDetails data={paramsProduct} handledelete={handledelete}  modalName={param.item}/>}
              {param.item === 'Shampoo' && <ShampooDetails data={paramsProduct} handledelete={handledelete}  modalName={param.item}/>}
              {param.item === 'OralCare' && <OralCareDetails data={paramsProduct} handledelete={handledelete}  modalName={param.item}/>}
              {param.item === 'CleaningEssentials' && <CleaningEssentialsDetails data={paramsProduct} handledelete={handledelete}  modalName={param.item}/>} 
            </Grid>
          }

        </Grid>
      </Grid>

    </Box >
  );
}
