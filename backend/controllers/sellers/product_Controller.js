import mongoose from "mongoose";
import Order from "../../modal/order.js";
import User from "../../modal/user.js";
import cloudinary from "../../middleWare/cloudnary.js";

export const getAllSellingProduct = async (req, res) => {

    try {

        // console.log(req.user.id);
        const user = await User.findById(req.user.id);
        if (user && user.usertype === 'seller') {
            const madals = ['Mobile', 'Laptop', 'Shoe', 'WashingMachine', 'Shirt', 'Tshirt', 'Jeans', 'TrackPant', 'WindCheater']
            let allProduct = [];
            const productPromises = madals.map(async (ele, index) => {

                let productCategoryVal = null;

                const dynamicModal = mongoose.model(ele)
                const product = await dynamicModal.find({ seller_ref: req.user.id })
                if (ele === 'Laptop' || ele === 'Printer' || ele === 'Camera') {
                    productCategoryVal = 'Electrocnics'
                } else if (ele === 'Shoe' || ele === 'Shirt' || ele === 'Tshirt' || ele === 'Jeans' || ele === 'TrackPant' || ele === 'WindCheater') {

                    productCategoryVal = 'Fashion'
                }
                else if (ele === 'WashingMachine' || ele === 'Fridge' || ele === 'LedTV' || ele === 'Cooler' || ele === 'AC' || ele === 'WaterPurifier') {

                    productCategoryVal = 'Appliances'
                }
                else if (ele === 'Flour' || ele === 'Detergent' || ele === 'Shampoo' || ele === 'OralCare' || ele === 'CleaningEssentials' || ele === 'Pulses') {

                    productCategoryVal = 'Grocery'
                }
                else if (ele === 'Mobile') {

                    productCategoryVal = 'Mobile'
                }
                 
                return {
                    modalName: ele,
                    products: product,
                    details:
                    {
                        modalName: ele,
                        productCategory:productCategoryVal
                    }
                };


            })
            const allProducts = await Promise.all(productPromises);


            allProduct = allProducts.flat();

            if (allProduct) {
                // console.log(allProduct, "77");
                return res.status(200).json(
                    {
                        message: "Got All Orders Successfully",
                        data: allProduct,
                    }
                )
            }
        }

    }
    catch (error) {
        return res.status(401).json(
            {
                message: "Error in Getting the orders",
                error: error
            })
    }
}

export const getAllOrderedProduct = async (req, res) => {

    try {

        // console.log(req.user.id);
        const obj = JSON.parse(req.query.obj);
        // console.log(obj);


        const user = await User.findById(req.user.id);
        if (user && user.usertype === 'seller') {
            const allOrders = await Promise.all(
                obj.map(async (ele) => {
                    const order = await Order.find({ orderItemId: ele._id });
                    return {
                        data: ele,
                        order: [...order]
                    };
                })
            );

            // console.log(allOrders,"p["); 
            return res.status(200).json(
                {
                    message: "Got All Orders Successfully",
                    data: allOrders,
                }
            )

        }

    }
    catch (error) {
        return res.status(401).json(
            {
                message: "Error in Getting the orders",
                error: error
            })
    }
}

export const getAllProductByModalName = async (req, res) => {

    try {



        const user = await User.findById(req.user.id);
        if (user && user.usertype === 'seller') {
            const dynamicModal = mongoose.model(req.params.modalName)
            const allProducts = await dynamicModal.find({});

            if (allProducts) {
                // console.log(allProducts,"gggggggggggg");

                return res.status(200).json(
                    {
                        message: "Got All Products Successfully",
                        data: allProducts,
                    }
                )
            }

        } else {
            return res.status(401).json(
                {
                    message: "User Not Authenticated",
                    error: error
                })
        }

    }
    catch (error) {
        return res.status(401).json(
            {
                message: "Error in Getting the orders",
                error: error
            })
    }
}



export const deleteProduct = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (user && user.usertype === 'seller') {
            const dynamicModal = mongoose.model(req.query.modalName);
            const deletedProduct = await dynamicModal.findByIdAndDelete(req.query.itemId);

            if (deletedProduct) {
                console.log('Deleted Product:', deletedProduct);

                // Extract public IDs from the imgUrl array
                const publicIds = deletedProduct.imgUrl.map(getPublicIdFromUrl);
                console.log('Public IDs to delete:', publicIds);

                // Check if there are any public IDs to delete
                if (publicIds.length > 0) {
                    const deletionPromises = publicIds.map(publicId => {
                        return cloudinary.uploader.destroy(publicId)
                            .then(result => console.log(`Image deleted from Cloudinary: ${result}`))
                            .catch(error => console.error(`Error deleting image from Cloudinary with ID ${publicId}:`, error));
                    });


                    await Promise.all(deletionPromises);
                } else {
                    console.log('No public IDs found for deletion.');
                }

                return res.status(200).json({
                    message: "Product Deleted Successfully",
                    data: deletedProduct,
                });
            } else {
                return res.status(404).json({
                    message: "Product Not Found",
                });
            }
        } else {
            return res.status(401).json({
                message: "User Not Authenticated",
            });
        }
    } catch (error) {
        console.error('Error in Deleting the Product:', error);
        return res.status(500).json({
            message: "Error in Deleting the Product",
            error: error.message,
        });
    }
};

// Function to extract the public ID from Cloudinary URL
const getPublicIdFromUrl = (url) => {
    const regex = /\/([^/]+)\/v\d+\/([^/]+)/;
    const matches = url.match(regex);
    return matches ? matches[2].split('.')[0] : null;
};
