import Cooler from '../../../modal/seller/appliances/cooler.js';
import { deleteImages } from '../../../middleWare/cloudnaryDelete.js';


export const AddCooler = async (req, res) => {

    const {companyName,modelName,capacity,coolerType,remoteSupport,coolingMedia,operatingMode} = req.body;
    req.body.comboId=`${companyName}-${modelName}-${capacity}-${coolerType}'air cooler'${remoteSupport==='Yes'?`-with-remote-support`:''}${coolingMedia!==''?`-${coolingMedia}`:''}${operatingMode!==''?`-${operatingMode}`:''}`.replace(/[.\s()]/g, "-").replace(/--+/g, "-").toLowerCase();
    const cooler = await Cooler.create(req.body);
       
    if (cooler) {
        return res.status(200).json(
            {
                message: "cooler added",
                data: cooler,
            })
    }

    else {
        return res.status(422).json(
            {
                message: "error in adding cooler ",
            })
    }
}





export const getAllItemByCompanyName = async (req, res) => {
   
    try {
       
        const cooler = await Cooler.find({companyName:req.params.companyName});
        
        if (cooler) {
            return res.status(200).json(
                {
                    message: "got the Cooler data",
                    data: cooler,
                })
        }

    } catch (error) {
        return res.status(422).json(
            {
                message: "error in finding Cooler",
                error: error,
            })
    }



}

export const getAllItemByItemName = async (req, res) => {
   
    try {
    
        const cooler = await Cooler.find({comboId:req.params.itemName});
        
        if (cooler) {
            return res.status(200).json(
                {
                    message: "got the WahingMachine data",
                    data: cooler,
                })
        }

    } catch (error) {
        return res.status(422).json(
            {
                message: "error in finding Cooler",
                error: error,
            })
    }



}

export const getOneItem = async (req, res) => {

    try {
        const cooler = await Cooler.findById(req.params.id);
        console.log(cooler);
        if (cooler) {
            return res.status(200).json(
                {
                    message: "got the Cooler data",
                    data: cooler,
                })
        }

    } catch (error) {
        return res.status(422).json(
            {
                message: "error in finding Cooler",
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
    const prod = await Cooler.findById(req.query.prodId);

    if (prod && prod.seller_ref.equals(req.user.id)) {
        const publicIds = prod.imgUrl.map(getPublicIdFromUrl);
        if (publicIds.length > 0) {
            deleteImages(publicIds);

            const updatedProd = await Cooler.findByIdAndUpdate(prod._id,
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


export const UpdateCooler = async (req, res) => {
    // console.log(req.body, "query");
    const prod = await Cooler.findById(req.query.prodId);

    if (prod && prod.seller_ref.equals(req.user.id)) {
        const publicIds = prod.imgUrl.map(getPublicIdFromUrl);
        if (publicIds.length > 0) {
            deleteImages(publicIds);

            const updatedProd = await Cooler.findByIdAndUpdate(prod._id,
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

