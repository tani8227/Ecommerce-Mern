
import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState, useEffect } from 'react';

export default function BrandList(props) {

  const [checkedBrand, setCheckedBrand] = useState([])
  const {getBrandName}=props;
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
        control={<Checkbox onChange={getCheckBoxValue} name="Samsung" />}
        label="Samsung"
      />
      <FormControlLabel
        control={<Checkbox onChange={getCheckBoxValue} name="Apple" />}
        label="Apple"
      />
      <FormControlLabel
        control={<Checkbox onChange={getCheckBoxValue} name="Realme" />}
        label="Realme"
      />
      <FormControlLabel
        control={<Checkbox onChange={getCheckBoxValue} name="Redmi" />}
        label="Redmi"
      />
      <FormControlLabel
        control={<Checkbox onChange={getCheckBoxValue} name="Motorola" />}
        label="Motorola"
      />
      <FormControlLabel
        control={<Checkbox onChange={getCheckBoxValue} name="Vivo" />}
        label="Vivo"
      />
      <FormControlLabel
        control={<Checkbox onChange={getCheckBoxValue} name="OnePlus" />}
        label="OnePlus"
      />
    </FormGroup>
  );
}