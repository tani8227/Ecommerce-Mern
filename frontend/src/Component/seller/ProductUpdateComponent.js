import * as React from 'react';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import useGetOneItem from '../utility/useGetOneItem.js';
import AddTShirt from './fashion/tshirts/AddTShirt.js';
import AddShirt from './fashion/shirts/AddShirt.js';
import AddJeans from './fashion/jeans/AddJeans.js';
import AddShoe from './fashion/shoes/AddShoe.js';
import AddTrackPant from './fashion/trackPant/AddTrackPant.js';
import AddLedTV from './appliances/LedTV/AddLedTV.js';
import AddFridge from './appliances/fridge/AddFridge.js';
import AddWashingMachine from './appliances/WashingMachine/AddWashingMachine.js';
import AddCooler from './appliances/cooler/AddCooler.js';
import AddLaptop from './electronics/laptops/AddLaptop.js';
import AddCamera from './electronics/camera/AddCamera.js';
import AddPrinter from './electronics/printer/AddPrinter.js';
import AddFlour from './grocery/flours/AddFlour.js';
import AddDetergent from './grocery/detergents/AddDetergents.js';
import AddOralCare from './grocery/oralCare/AddOralCare.js';
import AddMobile from './moblies/AddMobile.js';
import AddCleaningEssentials from './grocery/cleaningEssesntials/AddCleaningEssentials.js';
import AddShampoo from './grocery/shampoo/AddShampoo.js';





export default function ProductUpdateComponent() {

  const [searchParam] = useSearchParams();
  const ProductCategory = searchParam.get('ProductCategory')
  const [data, setData]= useState();
  const itemId = searchParam.get('itemId')
  const product = useGetOneItem(ProductCategory,itemId) 
  console.log(product);

  
  useEffect(()=>
    {
      if(product&&product.item!==undefined&&data===undefined)
        {
          setData(product.item)
        }
        
      },[product, ProductCategory, itemId, data])
      
      
     
  console.log(itemId);
  console.log(ProductCategory,);


 



  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
        {ProductCategory==='Tshirt'&&<AddTShirt data={data} />}
        {ProductCategory==='Shirt'&&<AddShirt data={data} />}
        {ProductCategory==='Shoe'&&<AddShoe data={data} />}
        {ProductCategory==='TrackPant'&&<AddTrackPant data={data}/>}
        {ProductCategory==='Jeans'&&<AddJeans data={data}/>}
        {ProductCategory==='Laptop'&&<AddLaptop data={data}/>}
        {ProductCategory==='Printer'&&<AddPrinter data={data}/>}
        {ProductCategory==='Camera'&&<AddCamera data={data}/>}
        {ProductCategory==='LedTV'&&<AddLedTV data={data}/>}
        {ProductCategory==='Fridge'&&<AddFridge data={data}/>}
        {ProductCategory==='Cooler'&&<AddCooler data={data}/>}
        {ProductCategory==='WashingMachine'&&<AddWashingMachine data={data}/>}
        {ProductCategory==='Flour'&&<AddFlour data={data}/>}
        {ProductCategory==='Detergent'&&<AddDetergent data={data}/>}
        {ProductCategory==='CleaningEssentials'&&<AddCleaningEssentials data={data}/>}
        {ProductCategory==='Shampoo'&&<AddShampoo data={data}/>}
        {ProductCategory==='OralCare'&&<AddOralCare data={data}/>}
        {ProductCategory==='Mobile'&&<AddMobile data={data}/>}
    </Box >
  );
}
