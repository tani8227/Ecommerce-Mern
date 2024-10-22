import { Box } from "@mui/material";


// import ImgComponenForDetailsPage from './ImgComponentForDetailsPage'
import LedTVImgComponenForDetailsPage from "./LedTV/LedTVImgComponentForDetailsPage";
import FridgeImgComponentForDetailsPage from "./fridge/FridgeImgComponentForDetailsPage";
import WASHING_MACHINE_IMG_COMPONENT_FOR_DETAILS_PAGE from "./washingMachine/WashingMachine_ImgComponentForDetailsPage";
import CoolerImgComponentForDetailsPage from './cooler/CoolerImgComponentForDetailsPage'



export default function CardComponent(props) {
    
    return (

        <Box padding={1}  backgroundColor="white" sx={{ display: { xs: "flex" }, justifyContent: "space-evenly", flexDirection:{xs:"column",sm:"row"}, alignItems: "center" }}>
            

             {props.ProductCategory==='LedTV'&& <LedTVImgComponenForDetailsPage            ProductCategory={props.ProductCategory} fridgeList={props.fridgeList}/>}
             {props.ProductCategory==='Fridge'&& <FridgeImgComponentForDetailsPage           ProductCategory={props.ProductCategory} fridgeList={props.fridgeList}/>}
             {props.ProductCategory==='WashingMachine'&& <WASHING_MACHINE_IMG_COMPONENT_FOR_DETAILS_PAGE     ProductCategory={props.ProductCategory} fridgeList={props.fridgeList}/>}
             {props.ProductCategory==='Cooler'&& <CoolerImgComponentForDetailsPage      ProductCategory={props.ProductCategory} fridgeList={props.fridgeList}/>}
             {props.ProductCategory==='Ac'&& <LedTVImgComponenForDetailsPage               ProductCategory={props.ProductCategory} fridgeList={props.fridgeList}/>}
             {props.ProductCategory==='WaterFurifier'&& <LedTVImgComponenForDetailsPage     ProductCategory={props.ProductCategory} fridgeList={props.fridgeList}/>}
            {/* <ImgComponenForDetailsPage fridgeList={props.fridgeList}/> */}
                
        </Box>
    )
}