import Laptop from "../../../modal/seller/electronics/laptop.js";
import { deleteImages } from "../../../middleWare/cloudnaryDelete.js";


export const AddLaptop = async (req, res) => {


        const {companyName,series,processorBrand,processorName,processorGeneration,type,storageType,storageCapacity,ramType,dedicatedGraphicsMemoryType}= req.body;
        req.body.comboId=`${companyName}${series!==''?`-${series}`:''}-${processorBrand}-${processorName}${processorGeneration!==''?`-${processorGeneration}`:''}-${type}-${storageType}-${storageCapacity}-ramType ${ramType}${dedicatedGraphicsMemoryType!==''?`-dedicatedGraphicsMempryType ${dedicatedGraphicsMemoryType}`:''}`.replace(/[.\s()]/g, "-").replace(/--+/g, "-").replace(/---+/g, "-").toLowerCase();
   
        const data = await Laptop.create(req.body);
        if (data) {
            return res.status(200).json(
                {
                    message: "added laptop !!",
                    data: data,
                })
        } else {
            return res.status(401).json(
                {
                    message: "error in adding laptop !!",

                })
        }
    
    }





export const getOneItem = async (req, res) => {
    try {
        const data = await Laptop.findById(req.params.id);
        // console.log(fridge);
        if (data) {
            return res.status(200).json(
                {
                    message: "got the fridge data",
                    data: data,
                })
        }

    } catch (error) {
        return res.status(422).json(
            {
                message: "error in finding fridge",
                error: error,
            })
    }
}




export const getAllItemByItemName = async (req, res) => {

    try {

        console.log(req.params, "88888888");
        const data = await Laptop.find({comboId:req.params.itemName});
      
        if (data) {

            return res.status(200).json(
                {
                    message: "got the item successfully",
                    data: data
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
    const prod = await Laptop.findById(req.query.prodId);

    if (prod && prod.seller_ref.equals(req.user.id)) {
        const publicIds = prod.imgUrl.map(getPublicIdFromUrl);
        if (publicIds.length > 0) {
            deleteImages(publicIds);

            const updatedProd = await Laptop.findByIdAndUpdate(prod._id,
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



export const getAllItemByCompanyName = async (req, res) => {


    const data = await Laptop.find({ companyName: req.params.companyName });
    console.log(req.params);
    if (data) {
        return res.status(200).json(
            {
                message: "get the item by companyname",
                data: data,
            })
    }
    else {
        return res.status(200).json(
            {
                message: " error in getting  the item by companyname",

            })
    }
}



export const UpdateLaptop = async (req, res) => {
    // console.log(req.body, "query");
    const prod = await Laptop.findById(req.query.prodId);

    if (prod && prod.seller_ref.equals(req.user.id)) {
        const publicIds = prod.imgUrl.map(getPublicIdFromUrl);
        if (publicIds.length > 0) {
            deleteImages(publicIds);

            const updatedProd = await Laptop.findByIdAndUpdate(prod._id,
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








