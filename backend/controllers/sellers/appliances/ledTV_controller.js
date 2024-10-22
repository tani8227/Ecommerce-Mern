
import LedTV from "../../../modal/seller/appliances/ledTV.js";
import { deleteImages } from "../../../middleWare/cloudnaryDelete.js";


export const AddLEDTV=async (req, res)=>
    {

        const {companyName,series,displaySize,hdTechnology,screenType,smartTV,operatingSystem,launchYear}= req.body;
        req.body.comboId=`${companyName}${series!==''?`-${series}`:''}-${displaySize}-${hdTechnology}-${screenType}${smartTV==='Yes'?'-smart':''}-${operatingSystem!=='Google TV'?`${operatingSystem}-tv`:operatingSystem}-${launchYear}`.replace(/[.\s()]/g, "-").replace(/--+/g, "-").toLowerCase();
   
          const data= await LedTV.create(req.body);
          console.log(data);
          if(data)
            {
                return res.status(200).json(
                    {
                        message:"LED is added",
                        data:data
                    })
            }esle
            {
                return res.status(401).json(
                    {
                        message:"error in adding shirt999",
                    
                    })
            }
    }


    
    export const getOneItem = async (req, res) => {

        try {
     
                         
            
            const item = await LedTV.findById(req.params.id);
            if (item) {
                // console.log(item);
    
                return res.status(200).json(
                    {
                        message: "got the item successfully",
                        data: item
                    })
            }
    
            else {
                return res.status(401).json(
                    {
                        message: "item not found",
    
                    })
            }
        } catch (error) {
            return res.status(401).json(
                {
                    message: "error in getting the item",
                    error: error,
    
                })
        }
    
    }

    
export const getAllItemByItemName = async (req, res) => {

    try {

        // console.log(req.params);
        const items = await LedTV.find({productName:req.params.itemName});
        if (items) {
            
            console.log(items, "///you are special for me ");
            return res.status(200).json(
                {
                    message: "got the item successfully",
                    data: items
                })
        }

        else {
            return res.status(401).json(
                {
                    message: "item not found",

                })
        }
    } catch (error) {
        return res.status(401).json(
            {
                message: "error in getting the item",
                error: error,

            })
    }

}

    





    export const getAllItemByCompanyName=async(req, res)=>
        {
            // console.log(req.params.companyName);
            const data= await LedTV.find({companyName:req.params.companyName});
            //   console.log(data);
            if(data)
                {
                          return res.status(200).json(
                            {
                                message:"get the item by companyname",
                                data:data,
                            })
                }
                else
                {
                    return res.status(200).json(
                        {
                            message:" error in getting  the item by companyname",
                           
                        })
                }
        }


        
const getPublicIdFromUrl = (url) => {
    const regex = /\/([^/]+)\/v\d+\/([^/]+)/;
    const matches = url.match(regex);
    return matches ? matches[2].split('.')[0] : null;
};

export const UpdateTShirt = async (req, res) => {
    console.log(req.query, "query");
    const prod = await LedTV.findById(req.query.prodId);

    if (prod && prod.seller_ref.equals(req.user.id)) {
        const publicIds = prod.imgUrl.map(getPublicIdFromUrl);
        if (publicIds.length > 0) {
            deleteImages(publicIds);

            const updatedProd = await LedTV.findByIdAndUpdate(prod._id,
                { $set: req.body },      // Update fields with values from req.body
                { new: true }
            )
            if (updatedProd) {

                console.log(updatedProd);
                return res.status(200).json(
                    {
                        message: "updated product",
                        data: updatedProd
                    })
            }
        } else {
            return res.status(401).json(
                {
                    message: "not updated product",
                    data: updatedProd
                })
        }

    } else {
        return res.status(401).json(
            {
                message: "Invalid Seller",

            })
    }
}



export const UpdateLedTV= async (req, res) => {
    // console.log(req.body, "query");
    const prod = await LedTV.findById(req.query.prodId);

    if (prod && prod.seller_ref.equals(req.user.id)) {
        const publicIds = prod.imgUrl.map(getPublicIdFromUrl);
        if (publicIds.length > 0) {
            deleteImages(publicIds);

            const updatedProd = await LedTV.findByIdAndUpdate(prod._id,
                { $set: req.body },      // Update fields with values from req.body
                { new: true }
            )
            if (updatedProd) {

                // console.log(updatedProd);
                return res.status(200).json(
                    {
                        message: "updated product",
                        data: updatedProd
                    })
            }
        } else {
            return res.status(401).json(
                {
                    message: "not updated product",
                    data: updatedProd
                })
        }

    } else {
        return res.status(401).json(
            {
                message: "Invalid Seller",

            })
    }
}
