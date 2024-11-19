
import * as React from 'react';
import CardComponent from './CardComponent';
// import { Link } from 'react-router-dom';
import HeadingCardComeponent from './HeadingCardComeponent';
import { useDispatch } from 'react-redux';
import { useState, useEffect,  } from 'react';
// import useGetAllItemsByComapanyName from '../utility/useGetItemByCompanyName';
import { useParams } from 'react-router-dom';
import { Actions } from '../../reducers/AuthReducer';
import useFilter from '../utility/useFilters';
import useDefaultParamSearch  from '../utility/useDefaultParamSearch';
import useToGetAllItemsOfAnyModal from '../utility/useToGetAllItemsOfAnyModal';


export default function MobileList(props) {
    
  const [mobileList, setMobileList]= useState(null);
        
  const param = useParams();
  const Dispatch= useDispatch();
  console.log(props);
 
  const mobilesData= useDefaultParamSearch(props.ProductCategory, `${param.companyName}`,props.priceRange );
  const mobilesData1= useFilter(props.ProductCategory, props.filterList, props.priceRange);
  const searchQueryFilterData = useToGetAllItemsOfAnyModal(props.ProductCategory,props.priceRange)

  console.log(mobilesData1);
  useEffect(() => {
     if (props.data === undefined && props.filterList === null) {
         setMobileList(mobilesData);
         Dispatch(Actions.setListData(mobilesData));
     } else if (props.filterList !== null && props.data === undefined) {
         const hasCheckedTrue = props.filterList.some(item => item.checked === true);

         if (!hasCheckedTrue) {
             setMobileList(mobilesData);
         } else {
             setMobileList(mobilesData1);
         }
     }
     else if (props.data!==undefined&&props.filterList === null) {

         setMobileList(searchQueryFilterData);
     }else if(props.data!==undefined&&props.filterList !== null)
         {
             const hasCheckedTrue = props.filterList.some(item => item.checked === true);

         if (!hasCheckedTrue) {
             setMobileList(searchQueryFilterData);
         } else {
             setMobileList(mobilesData1);
         }
         }


 }, [mobilesData, searchQueryFilterData, Dispatch, mobilesData1, props.ProductCategory, props.filterList, props.priceRange, props.data]);

  
 if(mobileList&&mobileList.length===0)
    {
        return <h3 style={{textAlign:'center'}}>No Data To Show!!!</h3>
    }
 
    return (
        <>
            <HeadingCardComeponent MobileList={mobileList}/>
           <CardComponent  MobileList={mobileList} />
        </>
    );
}
