import Flour from "../../../modal/seller//grocery/flour.js"
import { deleteImages } from "../../../middleWare/cloudnaryDelete.js";


export const AddFlour = async (req, res) => {
    try {
        const flour = await Flour.create(req.body);

        if (flour) {
            return res.status(200).json(
                {
                    message: "flour addded successfully",
                    data: flour,
                })
        }

    } catch (error) {
        return res.status(422).json(
            {
                message: "error in adding flours",
                error: error,
            })
    }
}


export const getOneItem=async(req, res)=>
    {
        try {
            
            const flour= await Flour.findById(req.params.id);
            if(flour)
                {
                    return res.status(200).json(
                        {
                            message:"got the item",
                            data:flour,
                        })
                }

        } catch (error) {
            return res.status(422).json(
                {
                    message:"error in finding the item",
                    error:error,
                })
        }
    }




export const getAllItemByCompanyName = async (req, res) => {
    try {
          
        console.log("u5me")
        const flour = await Flour.find({ companyName: req.params.companyName });

        if (flour) {
            return res.status(200).json(
                {
                    message: "got the All flours",
                    data: flour,
                })
        }
    } catch (error) {
            return res.status(422).json(
                {
                    message:"error in finding the flours",
                    error:error,
                })
    }
}


export const getAllItemByItemName=async(req, res)=>
    {
        try {
            // console.log(req.params);
               const flour= await Flour.find({type:req.params.itemName});
               console.log(flour);
               if(flour)
                {
                    return res.status(200).json(
                        {
                            message:"got the all the items",
                            data:flour
                        })
                }
        } catch (error) {
            return res.status(422).json(
                {
                    message:"error in finding the items",
                    error:error
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
    const prod = await Flour.findById(req.query.prodId);

    if (prod && prod.seller_ref.equals(req.user.id)) {
        const publicIds = prod.imgUrl.map(getPublicIdFromUrl);
        if (publicIds.length > 0) {
            deleteImages(publicIds);

            const updatedProd = await Flour.findByIdAndUpdate(prod._id,
                { $set: req.body },      
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


export const UpdateFlour = async (req, res) => {
    // console.log(req.body, "query");
    const prod = await Flour.findById(req.query.prodId);

    if (prod && prod.seller_ref.equals(req.user.id)) {
        const publicIds = prod.imgUrl.map(getPublicIdFromUrl);
        if (publicIds.length > 0) {
            deleteImages(publicIds);

            const updatedProd = await Flour.findByIdAndUpdate(prod._id,
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

