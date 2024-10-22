import * as React from 'react';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';


import FashionProductListComponent from './fashion/Products/ProductListComponent.js';

import ElectronicsProductListComponent from './electronics/Products/ProductListComponent.js';

import AppliancesProductListComponent from './appliances/Products/ProductListComponent.js';

import GroceryProductListComponent from './grocery/products/ProductListComponent.js';

import MobileProductListComponent from './mobiles/MobileListComponent.js';


import useSearchQuery from './utility/useSearchQuery';
import { useState, useEffect } from 'react';

// const ImageContainer = styled(Box)({
//   width: '100%',
//   height: '100%',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   overflow: 'hidden',
//   padding: "5px",
//   backgroundColor: "white"
// });

// const StyledImage = styled('img')({
//   width: '100%',
//   height: '100%',
//   objectFit: 'contains',
// });

export default function Appliances(props) {
  const param = useParams();
  const [searchData, setsearchData]= useState();
  const handelSearchQuery= useSearchQuery();

  console.log(props)

    useEffect(()=>
    {

      if(props.searchInput!==undefined)
        {
          const data=handelSearchQuery(props.searchInput);
          data.then((val)=>
            {
              setsearchData(val);
            })
        }
    },[props.searchInput,handelSearchQuery])
  
  // const searchData = useSelector((state) => state.Auth.searchData);
  console.log(param, 'hdhdhdhhdhd',  )
  console.log(searchData)
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      {searchData&&searchData.modalName === 'Tshirt' && <FashionProductListComponent ProductCategory={searchData.modalName} data={searchData.data} />}
      {searchData&&searchData.modalName === 'Shirt' && <FashionProductListComponent ProductCategory={searchData.modalName} data={searchData.data} />}
      {searchData&&searchData.modalName === 'Shoe' && <FashionProductListComponent ProductCategory={searchData.modalName} data={searchData.data} />}
      {searchData&&searchData.modalName === 'Jeans' && <FashionProductListComponent ProductCategory={searchData.modalName} data={searchData.data} />}
      {searchData&&searchData.modalName === 'TrackPant' && <FashionProductListComponent ProductCategory={searchData.modalName} data={searchData.data} />}
      {searchData&&searchData.modalName === 'WindCheater' && <FashionProductListComponent ProductCategory={searchData.modalName} data={searchData.data} />}
      {searchData&&searchData.modalName === 'Laptop' && <ElectronicsProductListComponent ProductCategory={searchData.modalName} data={searchData.data} />}
      {searchData&&searchData.modalName === 'Camera' && <ElectronicsProductListComponent ProductCategory={searchData.modalName} data={searchData.data} />}
      {searchData&&searchData.modalName === 'Printer' && <ElectronicsProductListComponent ProductCategory={searchData.modalName} data={searchData.data} />}
      {searchData&&searchData.modalName === 'Fridge' && <AppliancesProductListComponent ProductCategory={searchData.modalName} data={searchData.data} />}
      {searchData&&searchData.modalName === 'AC' && <AppliancesProductListComponent ProductCategory={searchData.modalName} data={searchData.data} />}
      {searchData&&searchData.modalName === 'Cooler' && <AppliancesProductListComponent ProductCategory={searchData.modalName} data={searchData.data} />}
      {searchData&&searchData.modalName === 'WashingMachine' && <AppliancesProductListComponent ProductCategory={searchData.modalName} data={searchData.data} />}
      {searchData&&searchData.modalName === 'LedTV' && <AppliancesProductListComponent ProductCategory={searchData.modalName} data={searchData.data} />}
      {searchData&&searchData.modalName === 'Flour' && <GroceryProductListComponent ProductCategory={searchData.modalName} data={searchData.data} />}
      {searchData&&searchData.modalName === 'Detergent' && <GroceryProductListComponent ProductCategory={searchData.modalName} data={searchData.data} />}
      {searchData&&searchData.modalName === 'Shampoo' && <GroceryProductListComponent ProductCategory={searchData.modalName} data={searchData.data} />}
      {searchData&&searchData.modalName === 'CleaningEssentials' && <GroceryProductListComponent ProductCategory={searchData.modalName} data={searchData.data} />}
      {searchData&&searchData.modalName === 'OralCare' && <GroceryProductListComponent ProductCategory={searchData.modalName} data={searchData.data} />}
      {searchData&&searchData.modalName === 'Mobile' && <MobileProductListComponent ProductCategory={searchData.modalName} data={searchData.data} />}
    </Box>
  );
}



