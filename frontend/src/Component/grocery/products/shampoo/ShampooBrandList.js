
import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState, useEffect } from 'react';

export default function ShampooBrandList(props) {
 
  const { getBrandName } = props;
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
  },[checkedBrand,getBrandName])


  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox onChange={getCheckBoxValue} name="Clinic Plus" />}
        label="Clinic Plus"
      />
      <FormControlLabel
        control={<Checkbox onChange={getCheckBoxValue} name="L'Oreal-Paris" />}
        label="L'Oreal Paris"
      />
      <FormControlLabel
        control={<Checkbox onChange={getCheckBoxValue} name="PANTENE" />}
        label="PANTENE"
      />
      <FormControlLabel
        control={<Checkbox onChange={getCheckBoxValue} name="HEAD-&-SHOULDERS" />}
        label="HEAD & SHOULDERS"
      />
     
      <FormControlLabel
        control={<Checkbox onChange={getCheckBoxValue} name="Dove" />}
        label="Dove"
      />
    
    </FormGroup>
  );
}