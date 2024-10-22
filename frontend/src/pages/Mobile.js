import * as React from 'react';
import Mobile from '../Component/mobiles/MobileComponent.js';



function MainMobile(props) {
  return (
  
       <Mobile categoryName={'Mobile'} companies={['Apple', 'Samsung', 'Motorola', 'Realme']}/>
  )
}

export default MainMobile;