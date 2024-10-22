
import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState, useEffect } from 'react';

export default function CoolerBrandList(props) {
 
  const [checkedBrand, setCheckedBrand] = useState([])

  function getCheckBoxValue(event) {
    const { name, checked } = event.target;
    const obj = { name, checked };

    setCheckedBrand((prev) => {
        
      const existingItem = prev.find(item => item.name === obj.name);

      if (existingItem) {
        console.log(existingItem)
        console.log("existinj;;;;;;;;;jjjjjjjjjjgItem");
        existingItem.checked=!existingItem.checked
        return [...prev]

      } else {
       return [...prev, obj]
      }
      
    }
    )

  }

  useEffect(() => {
    if (checkedBrand&&props.getBrandName!==undefined) {
      // console.log(checkedBrand);
      
      props.getBrandName(checkedBrand);

    }
  },[checkedBrand, props.getBrandName])


  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox onChange={getCheckBoxValue} name="Crompton" />}
        label="Crompton"
      />
      <FormControlLabel
        control={<Checkbox onChange={getCheckBoxValue} name="Bajaj" />}
        label="Bajaj"
      />
      <FormControlLabel
        control={<Checkbox onChange={getCheckBoxValue} name="Novamax" />}
        label="Novamax"
      />
      <FormControlLabel
        control={<Checkbox onChange={getCheckBoxValue} name="Symphony" />}
        label="Symphony"
      />
      
    </FormGroup>
  );
}