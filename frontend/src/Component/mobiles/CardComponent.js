import { Box } from "@mui/material";
import ImgComponenForDetailsPage from "./ImgComponenForDetailsPage";
// import ImgComponent from "./ImgComponent";
// import ImgPriceComponent from "./ImgPriceComponent";



export default function CardComponent({MobileList}) {


    
    
    return (

        <Box padding={1}  backgroundColor="white" sx={{ display: { xs: "flex" }, justifyContent: "space-evenly", flexDirection:{xs:"column",sm:"row"}, alignItems: "center" }}>
          
            <ImgComponenForDetailsPage MobileList={MobileList}/>
                
        </Box>
    )
}