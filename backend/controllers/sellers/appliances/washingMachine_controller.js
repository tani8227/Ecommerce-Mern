import WashingMachine from "../../../modal/seller/appliances/washingMachine.js";
import { deleteImages } from "../../../middleWare/cloudnaryDelete.js";


export const AddWashingMachine = async (req, res) => {

      
    const {companyName,capacity,wifi,starRating,technology,maxSpinSpeed,functionType,inBuiltHeater,launchYear}= req.body;
    req.body.comboId=`${companyName}-${capacity}${wifi==='Yes'?'-wifi-enabled':''}${starRating!=='NA'?`-${starRating}`:''}${technology}-${maxSpinSpeed}-${functionType}-${inBuiltHeater=='Yes'?'inBuiltHeater':''}-${launchYear}`.replace(/[.\s()]/g, "-").replace(/--+/g, "-").toLowerCase();
   
    
    const washingMachine = await WashingMachine.create(req.body);
    // console.log(washingMachine)
    if (washingMachine) {
        return res.status(200).json(
            {
                message: "WahingMachine added",
                data: washingMachine,
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
      
        const washingMachine = await WashingMachine.find({companyName:req.params.companyName});
        
        if (washingMachine) {
            return res.status(200).json(
                {
                    message: "got the washingMachine data",
                    data: washingMachine,
                })
        }

    } catch (error) {
        return res.status(422).json(
            {
                message: "error in finding washingMachine",
                error: error,
            })
    }



}

export const getAllItemByItemName = async (req, res) => {
   
    try {
        console.log(req.params, "yesssncncnc")
        const washingMachine = await WashingMachine.find({comboId:req.params.itemName});
        
        if (washingMachine) {
            return res.status(200).json(
                {
                    message: "got the WahingMachine data",
                    data: washingMachine,
                })
        }

    } catch (error) {
        return res.status(422).json(
            {
                message: "error in finding washingMachine",
                error: error,
            })
    }



}

export const getOneItem = async (req, res) => {

    try {
       
        const washingMachine = await WashingMachine.findById(req.params.id);
        // console.log(washingMachine);
        if (washingMachine) {
            return res.status(200).json(
                {
                    message: "got the washingMachine data",
                    data: washingMachine,
                })
        }

    } catch (error) {
        return res.status(422).json(
            {
                message: "error in finding washingMachine",
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
    const prod = await WashingMachine.findById(req.query.prodId);

    if (prod && prod.seller_ref.equals(req.user.id)) {
        const publicIds = prod.imgUrl.map(getPublicIdFromUrl);
        if (publicIds.length > 0) {
            deleteImages(publicIds);

            const updatedProd = await WashingMachine.findByIdAndUpdate(prod._id,
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


export const UpdateWashingMachine = async (req, res) => {
    // console.log(req.body, "query");
    const prod = await WashingMachine.findById(req.query.prodId);

    if (prod && prod.seller_ref.equals(req.user.id)) {
        const publicIds = prod.imgUrl.map(getPublicIdFromUrl);
        if (publicIds.length > 0) {
            deleteImages(publicIds);

            const updatedProd = await WashingMachine.findByIdAndUpdate(prod._id,
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

