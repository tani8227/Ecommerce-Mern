
import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState, useEffect } from 'react';

export default function DetergentBrandList(props) {
 
  const { getBrandName } = props;
  const [checkedBrand, setCheckedBrand] = useState([])
console.log(props)
  function getCheckBoxValue(event) {
    const { name, checked } = event.target;
    const obj = { name, checked };
    
    setCheckedBrand((prev) => {
        
      const existingItem = prev.find(item => item.name === obj.name);

     
      if (existingItem) {
        existingItem.checked=!existingItem.checked
        return [...prev]

      } else {
        
       return [...prev, obj]
      }
      
    }
    )

  }

  useEffect(() => {
    if (checkedBrand&&getBrandName!==undefined) {
      console.log(checkedBrand);
      
      getBrandName(checkedBrand);

    }
  },[checkedBrand,getBrandName])


  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox onChange={getCheckBoxValue} name="Tide" />}
        label="Tide"
      />
      <FormControlLabel
        control={<Checkbox onChange={getCheckBoxValue} name="Surf-Excel" />}
        label="Surf excel"
      />
      <FormControlLabel
        control={<Checkbox onChange={getCheckBoxValue} name="Henko" />}
        label="Henko"
      />
      <FormControlLabel
        control={<Checkbox onChange={getCheckBoxValue} name="Ariel" />}
        label="Ariel"
      />
     
    </FormGroup>
  );
}