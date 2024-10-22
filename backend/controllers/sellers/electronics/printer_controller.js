import Printer from '../../../modal/seller/electronics/printer.js';
import { deleteImages } from '../../../middleWare/cloudnaryDelete.js';


export const AddPrinter = async (req, res) => {
      

     const {companyName,printingMethod,type,wirelessSupport,printingOutput,refillType,usbSupport,voiceAssistantCompatibility,salesBox}= req.body;
        req.body.comboId=`${companyName}-${printingMethod}-${type}${wirelessSupport==='Yes'?`-${wirelessSupport}`:''}${usbSupport==='Yes'?`-${usbSupport}`:''}-${refillType}${printingOutput}${voiceAssistantCompatibility!==''?`-${voiceAssistantCompatibility}`:''}${salesBox!==''?`-${salesBox}`:''}`.replace(/[.\s()]/g, "-").replace(/--+/g, "-").replace(/---+/g, "-").toLowerCase();
   

    const printer = await Printer.create(req.body);
    if (printer) {
        return res.status(200).json(
            {
                message: "printer added",
                data: printer,
            })
    }

    else {
        return res.status(422).json(
            {
                message: "error in adding printer ",
            })
    }
}





export const getAllItemByCompanyName = async (req, res) => {

    try {

        const printer = await Printer.find({ companyName: req.params.companyName });

        if (printer) {
            return res.status(200).json(
                {
                    message: "got the ac data",
                    data: printer,
                })
        }

    } catch (error) {
        return res.status(422).json(
            {
                message: "error in finding printer",
                error: error,
            })
    }



}

export const getAllItemByItemName = async (req, res) => {

    try {

        const printer = await Printer.find({ comboId: req.params.itemName });

        if (printer) {
            return res.status(200).json(
                {
                    message: "got the printer data",
                    data: printer,
                })
        }

    } catch (error) {
        return res.status(422).json(
            {
                message: "error in finding printer",
                error: error,
            })
    }



}




export const getOneItem = async (req, res) => {

    try {
        const printer = await Printer.findById(req.params.id);
        // console.log(printer);
        if (printer) {
            return res.status(200).json(
                {
                    message: "got the printer data",
                    data: printer,
                })
        }

    } catch (error) {
        return res.status(422).json(
            {
                message: "error in finding printer",
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
    const prod = await Printer.findById(req.query.prodId);

    if (prod && prod.seller_ref.equals(req.user.id)) {
        const publicIds = prod.imgUrl.map(getPublicIdFromUrl);
        if (publicIds.length > 0) {
            deleteImages(publicIds);

            const updatedProd = await Printer.findByIdAndUpdate(prod._id,
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


export const UpdatePrinter = async (req, res) => {
    // console.log(req.body, "query");
    const prod = await Printer.findById(req.query.prodId);

    if (prod && prod.seller_ref.equals(req.user.id)) {
        const publicIds = prod.imgUrl.map(getPublicIdFromUrl);
        if (publicIds.length > 0) {
            deleteImages(publicIds);

            const updatedProd = await Printer.findByIdAndUpdate(prod._id,
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

