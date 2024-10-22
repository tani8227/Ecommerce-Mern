import { Box } from "@mui/material";

// import ImgDescriptionComponent from './ImgDescriptionComponent';
// import ImgComponenForDetailsPage from './ImgComponentForDetailsPage'


import LaptopImgComponentForDetailsPage from "./laptop/LaptopImgComponentForDetailsPage.js";
import PrinterImgComponentForDetailsPage from "./printer/PrinterImgComponentForDetailsPage.js";
import CameraImgComponentForDetailsPage from "./camera/CameraImgComponentForDetailsPage";




export default function CardComponent(props) {
    
    return (

        <Box padding={1}  backgroundColor="white" sx={{ display: { xs: "flex" }, justifyContent: "space-evenly", flexDirection:{xs:"column",sm:"row"}, alignItems: "center" }}>
            

             {props.ProductCategory==='Laptop'&& <LaptopImgComponentForDetailsPage           ProductCategory={props.ProductCategory} fridgeList={props.fridgeList}/>}
             {props.ProductCategory==='Printer'&& <PrinterImgComponentForDetailsPage     ProductCategory={props.ProductCategory} fridgeList={props.fridgeList}/>}
             {props.ProductCategory==='Camera'&& <CameraImgComponentForDetailsPage           ProductCategory={props.ProductCategory} fridgeList={props.fridgeList}/>}
             {/* <ImgComponenForDetailsPage fridgeList={props.fridgeList}/> */}
                
        </Box>
    )
}