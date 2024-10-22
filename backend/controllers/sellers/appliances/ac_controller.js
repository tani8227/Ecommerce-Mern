import AC from '../../../modal/seller/appliances/ac.js';
import { deleteImages } from '../../../middleWare/cloudnaryDelete.js';




export const AddAc = async (req, res) => {


    const ac = await AC.create(req.body);
    if (ac) {
        return res.status(200).json(
            {
                message: "WahingMachine added",
                data: ac,
            })
    }

    else {
        return res.status(422).json(
            {
                message: "error in adding WahingMachine ",
            })
    }
}





export const getAllItemByCompanyName = async (req, res) => {
   
    try {
       
        const ac = await AC.find({companyName:req.params.companyName});
        
        if (ac) {
            return res.status(200).json(
                {
                    message: "got the ac data",
                    data: ac,
                })
        }

    } catch (error) {
        return res.status(422).json(
            {
                message: "error in finding ac",
                error: error,
            })
    }



}

export const getAllItemByItemName = async (req, res) => {
   
    try {
    
        const ac = await AC.find({comboId:req.params.itemName});
        
        if (ac) {
            return res.status(200).json(
                {
                    message: "got the ac data",
                    data: ac,
                })
        }

    } catch (error) {
        return res.status(422).json(
            {
                message: "error in finding ac",
                error: error,
            })
    }



}

export const getOneItem = async (req, res) => {

    try {
        const ac = await AC.findById(req.params.id);
        console.log(ac);
        if (ac) {
            return res.status(200).json(
                {
                    message: "got the ac data",
                    data: ac,
                })
        }

    } catch (error) {
        return res.status(422).json(
            {
                message: "error in finding ac",
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
    const prod = await AC.findById(req.query.prodId);

    if (prod && prod.seller_ref.equals(req.user.id)) {
        const publicIds = prod.imgUrl.map(getPublicIdFromUrl);
        if (publicIds.length > 0) {
            deleteImages(publicIds);

            const updatedProd = await AC.findByIdAndUpdate(prod._id,
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


export const UpdateAC= async (req, res) => {
    // console.log(req.body, "query");
    const prod = await AC.findById(req.query.prodId);

    if (prod && prod.seller_ref.equals(req.user.id)) {
        const publicIds = prod.imgUrl.map(getPublicIdFromUrl);
        if (publicIds.length > 0) {
            deleteImages(publicIds);

            const updatedProd = await AC.findByIdAndUpdate(prod._id,
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

