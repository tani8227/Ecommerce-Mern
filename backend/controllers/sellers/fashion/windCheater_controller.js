import WindCheater from '../../../modal/seller/fashion/windCheater.js';
import { deleteImages } from '../../../middleWare/cloudnaryDelete.js';

export const AddWindCheater=async (req, res)=>
    {
       
          const data= await WindCheater.create(req.body);
       
          if(data)
            {
                return res.status(200).json(
                    {
                        message:"WindCheater is added",
                        data:data
                    })
            }esle
            {
                return res.status(401).json(
                    {
                        message:"error in adding WindCheater",
                    
                    })
            }
    }


    export const getOneItem = async (req, res) => {

        try {
    
          
            const item = await WindCheater.findById(req.params.id);
            // console.log(req.params.id);
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
        const items = await WindCheater.find({productName:req.params.itemName});
        // console.log(items, "///you are special for me ");
        if (items) {

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

    

const getPublicIdFromUrl = (url) => {
    const regex = /\/([^/]+)\/v\d+\/([^/]+)/;
    const matches = url.match(regex);
    return matches ? matches[2].split('.')[0] : null;
};

export const UpdateTShirt = async (req, res) => {
    console.log(req.query, "query");
    const prod = await WindCheater.findById(req.query.prodId);

    if (prod && prod.seller_ref.equals(req.user.id)) {
        const publicIds = prod.imgUrl.map(getPublicIdFromUrl);
        if (publicIds.length > 0) {
            deleteImages(publicIds);

            const updatedProd = await WindCheater.findByIdAndUpdate(prod._id,
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

    export const getAllItemByCompanyName=async(req, res)=>
        {
            console.log(req.params.companyName);
            const windCheater= await WindCheater.find({companyName:req.params.companyName});
              console.log(windCheater);
            if(windCheater)
                {
                          return res.status(200).json(
                            {
                                message:"get the item by companyname",
                                data:windCheater,
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


        
export const UpdateWindCheater = async (req, res) => {
    // console.log(req.body, "query");
    const prod = await WindCheater.findById(req.query.prodId);

    if (prod && prod.seller_ref.equals(req.user.id)) {
        const publicIds = prod.imgUrl.map(getPublicIdFromUrl);
        if (publicIds.length > 0) {
            deleteImages(publicIds);

            const updatedProd = await WindCheater.findByIdAndUpdate(prod._id,
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
