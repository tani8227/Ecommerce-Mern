import Camera from '../../../modal/seller/electronics/camera.js';
import { deleteImages } from '../../../middleWare/cloudnaryDelete.js';




export const AddCamera = async (req, res) => {

    const camera = await Camera.create(req.body);
    if (camera) {
        return res.status(200).json(
            {
                message: "camera added",
                data: camera,
            })
    }

    else {
        return res.status(422).json(
            {
                message: "error in adding camera ",
            })
    }
}





export const getAllItemByCompanyName = async (req, res) => {

    try {

        const camera = await Camera.find({ companyName: req.params.companyName });

        if (camera) {
            return res.status(200).json(
                {
                    message: "got the ac data",
                    data: camera,
                })
        }

    } catch (error) {
        return res.status(422).json(
            {
                message: "error in finding camera",
                error: error,
            })
    }



}

export const getAllItemByItemName = async (req, res) => {

    try {

        const camera = await Camera.find({ refrigeratorType: req.params.itemName });

        if (camera) {
            return res.status(200).json(
                {
                    message: "got the camera data",
                    data: camera,
                })
        }

    } catch (error) {
        return res.status(422).json(
            {
                message: "error in finding camera",
                error: error,
            })
    }



}

export const getOneItem = async (req, res) => {

    try {
        const camera = await Camera.findById(req.params.id);
        console.log(camera);
        if (camera) {
            return res.status(200).json(
                {
                    message: "got the camera data",
                    data: camera,
                })
        }

    } catch (error) {
        return res.status(422).json(
            {
                message: "error in finding camera",
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
    const prod = await Camera.findById(req.query.prodId);

    if (prod && prod.seller_ref.equals(req.user.id)) {
        const publicIds = prod.imgUrl.map(getPublicIdFromUrl);
        if (publicIds.length > 0) {
            deleteImages(publicIds);

            const updatedProd = await Camera.findByIdAndUpdate(prod._id,
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


export const UpdateCamera = async (req, res) => {
    // console.log(req.body, "query");
    const prod = await Camera.findById(req.query.prodId);

    if (prod && prod.seller_ref.equals(req.user.id)) {
        const publicIds = prod.imgUrl.map(getPublicIdFromUrl);
        if (publicIds.length > 0) {
            deleteImages(publicIds);

            const updatedProd = await Camera.findByIdAndUpdate(prod._id,
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
