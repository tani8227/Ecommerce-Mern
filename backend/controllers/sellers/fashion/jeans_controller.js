import Jeans from '../../../modal/seller/fashion/jeans.js';
import { deleteImages } from '../../../middleWare/cloudnaryDelete.js';

export const AddJeans = async (req, res) => {

    const {companyName,gender,fit,fabric,pattern,rise,distressed,size,pocketType,salesPackage,stretchable,faded,fly,fabricCare,suitableFor}= req.body;
    req.body.comboId=`${companyName}-${gender}-${fit}-Fit-${fabric}-${pattern}-${rise}-${distressed}-${size}${pocketType===''?`-${pocketType}`:''}${salesPackage===''?`-${salesPackage}`:''}-${stretchable}-${faded}${fly===''?`-${fly}`:''}${fabricCare!==''?`-${fabricCare}`:''}${suitableFor!==''?`-${suitableFor}`:''}`.replace(/[.\s()]/g, "-").replace(/--+/g, "-").replace(/---+/g, "-").toLowerCase();
   

    const data = await Jeans.create(req.body);

    if (data) {
        return res.status(200).json(
            {
                message: "jeans is added",
                data: data
            })
    } esle
    {
        return res.status(401).json(
            {
                message: "error in adding jeans999",

            })
    }
}


export const getOneItem = async (req, res) => {

    try {
        const item = await Jeans.findById(req.params.id);
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
        const items = await Jeans.find({ comboId: req.params.itemName });
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
    const prod = await Jeans.findById(req.query.prodId);

    if (prod && prod.seller_ref.equals(req.user.id)) {
        const publicIds = prod.imgUrl.map(getPublicIdFromUrl);
        if (publicIds.length > 0) {
            deleteImages(publicIds);

            const updatedProd = await Jeans.findByIdAndUpdate(prod._id,
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
    // console.log(req.params.companyName);
    const data = await Jeans.find({companyName:  req.params.companyName});
    // console.log(data);
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

export const UpdateJeans = async (req, res) => {
    // console.log(req.body, "query");
    const prod = await Jeans.findById(req.query.prodId);

    if (prod && prod.seller_ref.equals(req.user.id)) {
        const publicIds = prod.imgUrl.map(getPublicIdFromUrl);
        if (publicIds.length > 0) {
            deleteImages(publicIds);

            const updatedProd = await Jeans.findByIdAndUpdate(prod._id,
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