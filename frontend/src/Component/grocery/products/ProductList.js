
import * as React from 'react';
import CardComponent from './CardComponent.js';
// import { Link } from 'react-router-dom';
// import HeadingCardComeponent from './HeadingCardComeponent';
import { useDispatch,  } from 'react-redux';
import { useState, useEffect,  } from 'react';
// import useGetAllItemsByComapanyName from '../../utility/useGetItemByCompanyName.js';
import useDefaultParamSearch from '../../utility/useDefaultParamSearch.js'
import useFilter from '../../utility/useFilters.js'
import { useParams } from 'react-router-dom';
import { Actions } from '../../../reducers/AuthReducer.js';
import { Typography } from '@mui/material';
import useToGetAllItemsOfAnyModal from '../../utility/useToGetAllItemsOfAnyModal.js';

// import { createTheme } from '@mui/material/styles';


// const theme = createTheme({
//     components: {
//         MuiCardMedia: {
//             styleOverrides: {
//                 root: {
//                     width: "100%",


//                 },
//             },
//         },
//     },
// });



// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

export default function ProductList(props) {
     const [fridgeList, setFridgeList]= useState();
        
     const param = useParams();
     const Dispatch= useDispatch();
     console.log(props);
    
     const mobilesData= useDefaultParamSearch(props.ProductCategory, `${param.companyName}`,props.priceRange );
     const mobilesData1= useFilter(props.ProductCategory, props.filterList, props.priceRange);
     const searchQueryFilterData = useToGetAllItemsOfAnyModal(props.ProductCategory,props.priceRange)

     console.log(mobilesData1);
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
    )
}
