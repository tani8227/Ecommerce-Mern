
import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState, useEffect } from 'react';

export default function LaptopBrandList(props) {
  const {getBrandName}= props
  const [checkedBrand, setCheckedBrand] = useState([])

  function getCheckBoxValue(event) {
    const { name, checked } = event.target;
    const obj = { name, checked };

    setCheckedBrand((prev) => {
        
      const existingItem = prev.find(item => item.name === obj.name);

      if (existingItem) {
        // console.log(existingItem)
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
      // console.log(checkedBrand);
      
      getBrandName(checkedBrand);

    }
  },[checkedBrand, getBrandName])


  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox onChange={getCheckBoxValue} name="HP" />}
        label="HP"
      />
      <FormControlLabel
        control={<Checkbox onChange={getCheckBoxValue} name="Lenovo" />}
        label="Lenovo"
      />
      <FormControlLabel
        control={<Checkbox onChange={getCheckBoxValue} name="Asus" />}
        label="ASUS"
      />
      <FormControlLabel
        control={<Checkbox onChange={getCheckBoxValue} name="Dell" />}
        label="Dell"
      />
      
    </FormGroup>
  );
}