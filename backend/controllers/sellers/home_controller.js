import mongoose from 'mongoose';
import Mobile from '../../modal/seller/mobiles.js'


export async function getHomePageMobileData(req, res) {
    try {

        console.log("getHomePageMobileData function triggered");

        const mobiles = await Mobile.find({});
        console.log("Mobiles found:", mobiles);
   
        const allMobiles = [];
        mobiles.map((ele) => {
            const flag = allMobiles.some((allele) => allele.companyName === ele.companyName);
            if (!flag) {
                allMobiles.push(ele);
            }
        });

        return res.status(200).json({
            message: "got the mobile list",
            data: { data: allMobiles, modalName: 'Mobile' },
        });
    } catch (error) {
        console.error("Error in getHomePageMobileData:", error);
        return res.status(500).json({
            message: "error in finding the mobiles",
            error,
        });
    }
}

export async function getHomePageFashionData(req, res) {
    try {

        const fashion = ['Shirt', 'Tshirt', 'Jeans', 'Shoe', 'TrackPant', 'WindCheater'];
        const Fashion = fashion.map(async (modelName) => {
            const dynamicModal = mongoose.model(modelName);
            const dynamicData = await dynamicModal.find({});
            if (dynamicData) {
                 
                console.log(dynamicData);
                return {
                    data: dynamicData,
                    modalName: modelName
                };
            }

        });

        const fashionPromise = await Promise.all(Fashion);

        const allFashion = [];
        if (fashionPromise) {
            
            
            console.log(fashionPromise);
            
            fashionPromise.map((ele) => {
                
              
               allFashion.push({data:ele.data,modalName:ele.modalName});
                
            });
            
            console.log(allFashion);

            return res.status(200).json(
                {
                    message: "got the mobile list",
                    data: allFashion

                })

        }
    } catch (error) {
        return res.status(401).json(
            {
                message: "error",
                error: error
            })
    }
}


