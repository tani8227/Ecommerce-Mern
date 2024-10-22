import Fridge from '../../../modal/seller/appliances/fridge.js'
import { deleteImages } from '../../../middleWare/cloudnaryDelete.js';


export const AddFridge = async (req, res) => {
    
        const {companyName,capacity,defrostingType,refrigeratorType,type,compressorType,starRating,launchYear} = req.body;
        req.body.comboId=`${companyName}-${capacity}-${defrostingType}-${type}-${compressorType}-${starRating}-${refrigeratorType}-${launchYear}`.replace(/[.\s()]/g, "-").replace(/--+/g, "-").toLowerCase();
        
        const fridge = await Fridge.create(req.body);
        // console.log(fridge);
        if (fridge) {
            return res.status(200).json(
                {
                    message: "fridge added",
                    data: fridge,
                })
        }

       else{ 
        return res.status(422).json(
            {
                message: "error in adding fridge ",
            })
    }
}



export const getAllItemByCompanyName = async (req, res) => {
   
    try {
       
        const fridge = await Fridge.find({companyName:req.params.companyName,});
        
        if (fridge) {
            return res.status(200).json(
                {
                    message: "got the fridge data",
                    data: fridge,
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
    
        const fridge = await Fridge.find({comboId:req.params.itemName});
        // console.log(fridge);
        if (fridge) {
            return res.status(200).json(
                {
                    message: "got the fridge data",
                    data: fridge,
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

export const getOneItem = async (req, res) => {

    try {
        const fridge = await Fridge.findById(req.params.id);
        // console.log(fridge);
        if (fridge) {
            return res.status(200).json(
                {
                    message: "got the fridge data",
                    data: fridge,
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



const getPublicIdFromUrl = (url) => {
    const regex = /\/([^/]+)\/v\d+\/([^/]+)/;
    const matches = url.match(regex);
    return matches ? matches[2].split('.')[0] : null;
};

export const UpdateTShirt = async (req, res) => {
    console.log(req.query, "query");
    const prod = await Fridge.findById(req.query.prodId);

    if (prod && prod.seller_ref.equals(req.user.id)) {
        const publicIds = prod.imgUrl.map(getPublicIdFromUrl);
        if (publicIds.length > 0) {
            deleteImages(publicIds);

            const updatedProd = await Fridge.findByIdAndUpdate(prod._id,
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


export const UpdateFridge = async (req, res) => {
    // console.log(req.body, "query");
    const prod = await Fridge.findById(req.query.prodId);

    if (prod && prod.seller_ref.equals(req.user.id)) {
        const publicIds = prod.imgUrl.map(getPublicIdFromUrl);
        if (publicIds.length > 0) {
            deleteImages(publicIds);

            const updatedProd = await Fridge.findByIdAndUpdate(prod._id,
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

