import Mobile from '../../modal/seller/mobiles.js';
import User from '../../modal/user.js';
import { deleteImages } from '../../middleWare/cloudnaryDelete.js';


export const mobilesData = async (req, res) => {

   
    const mobiles = await Mobile.find({});
    if (mobiles) {

        return res.status(200).json(
            {
                message: "got the mobile list",
                data:
                {
                    mobiles: mobiles
                }
            })
    } else {
        return res.status(401).json(
            {
                message: "error in finding the mobiles",

            })
    }
}




export const getOneItem = async (req, res) => {

    try {

      
        const item = await Mobile.findById(req.params.id);
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
        const items = await Mobile.find({modelName:req.params.itemName});
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



export const getAllItemByCompanyName = async (req, res) => {

    try {

        // console.log(req.params, "//***");
        const items = await Mobile.find({companyName:req.params.companyName});
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


export const addmobile = async (req, res) => {
    try {
       
        

        
        
        const seller = await User.findById(req.body.seller_ref);
        
        
        if (seller && seller.id == req.user.id) {

            const {companyName,modelName,operatingSystem,processorBrand,processorCore,internalStorage,ram} = req.body;
            req.body.comboId=`${companyName}-${modelName}-${operatingSystem}-${processorBrand}-${processorCore}-${ram}-${internalStorage}`.replace(/[.\s()]/g, "-").replace(/--+/g, "-").toLowerCase();
            
            const newMobile = await Mobile.create(req.body);
          

            if (newMobile) {
                return res.status(200).json({
                    message: "New mobile added",
                    newMobile: newMobile,
                });
            } else {
                return res.status(500).json({
                    message: "Failed to create new mobile",
                });
            }
        } else {
            return res.status(401).json({
                message: "Seller not found or unauthorized",
            });
        }
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({
            message: "Error in adding new mobile",
            error: error.message,
        });
    }
};


const getPublicIdFromUrl = (url) => {
    const regex = /\/([^/]+)\/v\d+\/([^/]+)/;
    const matches = url.match(regex);
    return matches ? matches[2].split('.')[0] : null;
};

export const UpdateMobile = async (req, res) => {
    console.log(req.query, "query");
    const prod = await Mobile.findById(req.query.prodId);

    if (prod && prod.seller_ref.equals(req.user.id)) {
        const publicIds = prod.imgUrl.map(getPublicIdFromUrl);
        if (publicIds.length > 0) {
            deleteImages(publicIds);

            const updatedProd = await Mobile.findByIdAndUpdate(prod._id,
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
