import { Box } from "@mui/material";


// import ImgComponenForDetailsPage from './ImgComponentForDetailsPage'
import ShirtImgComponentForDetailsPage from './shirt/ShirtImgComponentForDetailsPage.js'
import TshirtImgComponentForDetailsPage from './tshirt/TshirtImgComponentForDetailsPage.js'
import ShoeImgComponentForDetailsPage from './shoe/ShoeImgComponentForDetailsPage.js'
import JeansImgComponentForDetailsPage from './jeans/JeansImgComponentForDetailsPage.js'
import TrackPantImgComponentForDetailsPage from './trackpant/TrackPantImgComponentForDetailsPage.js'
import WindCheaterImgComponentForDetailsPage from './windCheater/WindCheaterImgComponentForDetailsPage.js'


export default function CardComponent(props) {
    
    return (

        <Box padding={1}  backgroundColor="white" sx={{ display: { xs: "flex" }, justifyContent: "space-evenly", flexDirection:{xs:"column",sm:"row"}, alignItems: "center" }}>
            

             {props.ProductCategory==='Shirt'&& <ShirtImgComponentForDetailsPage            ProductCategory={props.ProductCategory} fridgeList={props.fridgeList}/>}
             {props.ProductCategory==='Tshirt'&& <TshirtImgComponentForDetailsPage           ProductCategory={props.ProductCategory} fridgeList={props.fridgeList}/>}
             {props.ProductCategory==='Jeans'&& <JeansImgComponentForDetailsPage     ProductCategory={props.ProductCategory} fridgeList={props.fridgeList}/>}
             {props.ProductCategory==='Shoe'&& <ShoeImgComponentForDetailsPage           ProductCategory={props.ProductCategory} fridgeList={props.fridgeList}/>}
             {props.ProductCategory==='TrackPant'&& <TrackPantImgComponentForDetailsPage               ProductCategory={props.ProductCategory} fridgeList={props.fridgeList}/>}
             {props.ProductCategory==='WindCheater'&& <WindCheaterImgComponentForDetailsPage     ProductCategory={props.ProductCategory} fridgeList={props.fridgeList}/>}
            {/* <ImgComponenForDetailsPage fridgeList={props.fridgeList}/> */}
                
        </Box>
    )
}