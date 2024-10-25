import Shirt from '../../../modal/seller/fashion/shirt.js';
import { deleteImages } from '../../../middleWare/cloudnaryDelete.js';

export const AddShirt=async (req, res)=>
    {
   
        
        const {companyName,gender,productType,fit,fabric,pattern,sleeve,size,collarType,hem,fabricCare,suitableFor}= req.body;
        req.body.comboId=`${companyName}-${gender}-${fit}-Fit-${fabric}-${sleeve}-${pattern}-${collarType}-${size}-${productType}-Shirt${hem!==''?`-${hem}`:''}${fabricCare!==''?`-${fabricCare}`:''}${suitableFor!==''?`-${suitableFor}`:''}`.replace(/[.\s()]/g, "-").replace(/--+/g, "-").replace(/---+/g, "-").toLowerCase();
   
          const data= await Shirt.create(req.body);
       
          if(data)
            {
                return res.status(200).json(
                    {
                        message:"shirt is added",
                        data:data
                    })
            }esle
            {
                return res.status(401).json(
                    {
                        message:"error in adding shirt999",
                    
                    })
            }
    }


    export const getOneItem = async (req, res) => {

        try {
    
          
            const item = await Shirt.findById(req.params.id);
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

            //   console.log(req.params, "yesscncnc")

            const data = await Shirt.find({comboId:req.params.itemName})
            console.log(data);
            if (data) {
                return res.status(200).json(
                    {
                        message: "got the data ",
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

 


const getPublicIdFromUrl = (url) => {
    const regex = /\/([^/]+)\/v\d+\/([^/]+)/;
    const matches = url.match(regex);
    return matches ? matches[2].split('.')[0] : null;
};

export const UpdateTShirt = async (req, res) => {
    console.log(req.query, "query");
    const prod = await Shirt.findById(req.query.prodId);

    if (prod && prod.seller_ref.equals(req.user.id)) {
        const publicIds = prod.imgUrl.map(getPublicIdFromUrl);
        if (publicIds.length > 0) {
            deleteImages(publicIds);

            const updatedProd = await Shirt.findByIdAndUpdate(prod._id,
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

 export const getAllItemByCompanyName=async(req, res)=>
        {
            // console.log(req.params.companyName, "kkkk");
            const shirt= await Shirt.find({companyName:req.params.companyName});
           
            if(shirt)
                {
                          return res.status(200).json(
                            {
                                message:"get the item by companyname",
                                data:shirt,
                            })
                }
                else
                {
                    return res.status(200).json(
                        {
                            message:" error in getting  the item by companyname",
                           
                        })
                }
        }


        export const UpdateShirt = async (req, res) => {
            // console.log(req.body, "query");
            const prod = await Shirt.findById(req.query.prodId);
        
            if (prod && prod.seller_ref.equals(req.user.id)) {
                const publicIds = prod.imgUrl.map(getPublicIdFromUrl);
                if (publicIds.length > 0) {
                    deleteImages(publicIds);
        
                    const updatedProd = await Shirt.findByIdAndUpdate(prod._id,
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