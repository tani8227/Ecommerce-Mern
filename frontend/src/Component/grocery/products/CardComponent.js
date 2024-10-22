import { Box } from "@mui/material";


// import ImgComponenForDetailsPage from './ImgComponentForDetailsPage'
import FlourImgComponentForDetailsPage from './flours/FlourImgComponentForDetailsPage.js'
import ShampooImgComponentForDetailsPage from './shampoo/ShampooImgComponentForDetailsPage.js'
import DetergentImgComponentForDetailsPage from './detergents/DetergentImgComponentForDetailsPage.js'
import OralCareImgComponentForDetailsPage from './oralcare/OralCareImgComponentForDetailsPage.js'
import CleaningEssesntialsImgComponentForDetailsPage from './cleaningessentials/CleaningEssesntialsImgComponentForDetailsPage.js'
import PulsesImgComponentForDetailsPage from './pulses/PulsesImgComponentForDetailsPage.js'


export default function CardComponent(props) {
    
    return (

        <Box padding={1}  backgroundColor="white" sx={{ display: { xs: "flex" }, justifyContent: "space-evenly", flexDirection:{xs:"column",sm:"row"}, alignItems: "center" }}>
            

             {props.ProductCategory==='Flour'&& <FlourImgComponentForDetailsPage            ProductCategory={props.ProductCategory} fridgeList={props.fridgeList}/>}
             {props.ProductCategory==='Detergent'&& <DetergentImgComponentForDetailsPage           ProductCategory={props.ProductCategory} fridgeList={props.fridgeList}/>}
             {props.ProductCategory==='Shampoo'&& <ShampooImgComponentForDetailsPage     ProductCategory={props.ProductCategory} fridgeList={props.fridgeList}/>}
             {props.ProductCategory==='CleaningEssentials'&& <CleaningEssesntialsImgComponentForDetailsPage           ProductCategory={props.ProductCategory} fridgeList={props.fridgeList}/>}
             {props.ProductCategory==='OralCare'&& <OralCareImgComponentForDetailsPage               ProductCategory={props.ProductCategory} fridgeList={props.fridgeList}/>}
             {props.ProductCategory==='Pulses'&& <PulsesImgComponentForDetailsPage     ProductCategory={props.ProductCategory} fridgeList={props.fridgeList}/>} 
            {/* <ImgComponenForDetailsPage fridgeList={props.fridgeList}/> */}
                
        </Box>
    )
}