import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';

// import {  createTheme } from '@mui/material/styles';


import { useParams, } from 'react-router-dom';
import useGetOneItem from '../utility/useGetOneItem.js';
import { useEffect, useState } from 'react';
import ImgPreviewComponent from './ImgPreviewComponent.js';


// const theme = createTheme({
//     components: {
//         MuiCardMedia: {
//             styleOverrides: {
//                 root: {
//                     width: "100%",
//                     height: "auto",
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

export default function ItemComponent(props) {

    const [Itemdata, setItemdata] = useState();
   
    console.log(props);
    const param = useParams();
    console.log(param.id);
    const oneItemdata = useGetOneItem(props.ProductCategory,param.id);
      console.log(oneItemdata)

    useEffect(() => {
       
       

            if (Itemdata===undefined&&oneItemdata.item!==undefined) { 
                setItemdata(oneItemdata);

    
            }
            else
            {
                if(Itemdata!==undefined&&Itemdata.id!==oneItemdata.item.id)
                    {
                        setItemdata(oneItemdata);
                       
                    }
            }
            
        
    }, [oneItemdata,Itemdata ]);

    return (

        
        <ImgPreviewComponent oneItemdata={oneItemdata} ProductCategory={props.ProductCategory}/>
    )}
