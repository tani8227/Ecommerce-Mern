
import * as React from 'react';
import CardComponent from './CardComponent.js';

// import HeadingCardComeponent from './HeadingCardComeponent';
import { useDispatch, } from 'react-redux';
import { useState, useEffect, } from 'react';


import { useParams } from 'react-router-dom';
import { Actions } from '../../../reducers/AuthReducer.js';
import { Typography } from '@mui/material';

import useFilter from '../../utility/useFilters.js'
import useDefaultParamSearch from '../../utility/useDefaultParamSearch.js'
import useToGetAllItemsOfAnyModal  from '../../utility/useToGetAllItemsOfAnyModal.js'



export default function ProductList(props) {
    const [fridgeList, setFridgeList] = useState();

    console.log(props);
    const param = useParams();

    const Dispatch = useDispatch();
    console.log(param);

    const mobilesData = useDefaultParamSearch(props.ProductCategory, `${param.companyName}`, props.priceRange);
    const mobilesData1 = useFilter(props.ProductCategory, props.filterList, props.priceRange);
    const searchQueryFilterData = useToGetAllItemsOfAnyModal(props.ProductCategory,props.priceRange)

    console.log(searchQueryFilterData);
    console.log(mobilesData1);
    console.log(mobilesData);




    useEffect(() => {
        if (props.data === undefined && props.filterList === null) {
            setFridgeList(mobilesData);
            Dispatch(Actions.setListData(mobilesData));
        } else if (props.filterList !== null && props.data === undefined) {
            const hasCheckedTrue = props.filterList.some(item => item.checked === true);

            if (!hasCheckedTrue) {
                setFridgeList(mobilesData);
            } else {
                setFridgeList(mobilesData1);
            }
        }
        else if (props.data!==undefined&&props.filterList === null) {

            setFridgeList(searchQueryFilterData);
        }else if(props.data!==undefined&&props.filterList !== null)
            {
                const hasCheckedTrue = props.filterList.some(item => item.checked === true);

            if (!hasCheckedTrue) {
                setFridgeList(searchQueryFilterData);
            } else {
                setFridgeList(mobilesData1);
            }
            }


    }, [mobilesData, searchQueryFilterData, Dispatch, mobilesData1, props.ProductCategory, props.filterList, props.priceRange, props.data]);


    console.log(fridgeList)

    if(fridgeList&&fridgeList.length===0)
        {
            return <h3 style={{textAlign:'center'}}>No Data To Show!!!</h3>
        }

    return (
        <>
            {/* <HeadingCardComeponent MobileList={mobileList}/> */}
            {fridgeList && fridgeList.length > 0 &&

                <CardComponent ProductCategory={props.ProductCategory} fridgeList={fridgeList} />
            }
            {fridgeList && fridgeList.length ===0 &&

                <Typography>
                    NO Product Avalaible
                </Typography>
            }
        </>
    );
}
