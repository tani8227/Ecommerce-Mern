import User from '../../modal/user.js'
import Cart from '../../modal/cart.js'
import mongoose from 'mongoose';

export const AddToCart = async (req, res) => {
    try {

        const user = await User.findById(req.user.id);

        if (user.usertype === 'buyer') {

            if (user.cart_ref.length > 0) {
                const findIndex = await Cart.findOne({ cartItemId: req.query.prodId })

                if (findIndex === null) {

                    const cartItem = await Cart.create(
                        {
                            cartItemId: req.query.prodId,
                            modalName: req.query.schemaCollectionName,
                            user_ref: req.user.id,
                            quantity: 1,
                        })
                    if (cartItem) {
                        console.log(cartItem)
                        console.log("ooooo8888oooo")
                        user.cart_ref.push(cartItem._id)
                        await user.save()
                        return res.status(200).json(
                            {
                                message: "item added in the cart",
                                data: cartItem,
                                mainCategory: req.query.mainCategory,
                            })
                    }
                } else {

                    return res.status(200).json(
                        {
                            message: "item already existed in the cart",

                        })
                }
            }
            else {
                const cartItem = await Cart.create(
                    {
                        cartItemId: req.query.prodId,
                        modalName: req.query.schemaCollectionName,
                        user_ref: req.user.id,
                        quantity: 1,
                    })
                if (cartItem) {

                    console.log(cartItem, "ooooooooo")
                    user.cart_ref.push(cartItem._id);
                    await user.save()
                    return res.status(200).json(
                        {
                            message: "item added in the cart",
                            data: cartItem,
                        })
                }

            }
        }
        else {
            return res.status(422).json(
                {
                    message: "invalid account ",

                })

        }

    } catch (error) {
        return res.status(422).json(
            {
                message: "error adding item in the cart",
                error: error,
            })
    }
}


export const CartItemList = async (req, res) => {

    try {

        const AllcartItems = await Cart.find({ user_ref: req.user.id });
        if (AllcartItems.length == 0) {
            console.log("jjjjj", AllcartItems);

            return res.status(404).json({
                message: "No items in the cart",
                data: AllcartItems,
            });
        }
        else {
            const cartItemList = [];
            for (let cartItem of AllcartItems) {
                let mainCategory ;
                if (cartItem.modalName === 'Mobile') {

                    mainCategory = 'Mobile'

                }
                else if (cartItem.modalName === 'Cooler'||cartItem.modalName === 'AC'||cartItem.modalName === 'Fridge'||cartItem.modalName === 'LedTV'||cartItem.modalName === 'WashingMachine'||cartItem.modalName === 'WaterPurifier') {
                    mainCategory = 'Aplliances'
                }
                else if (cartItem.modalName === 'Laptop'||cartItem.modalName === 'Camera'||cartItem.modalName === 'Printer') {

                    mainCategory = 'Electronics'
                }
                else if (cartItem.modalName === 'Shirt'||cartItem.modalName === 'Tshirt'||cartItem.modalName === 'Jeans'||cartItem.modalName === 'WindCheater'||cartItem.modalName === 'Shoe'||cartItem.modalName === 'TrackPant') {

                    mainCategory = 'Fashion'
                }
                else if (cartItem.modalName === 'Flour'||cartItem.modalName === 'CleaningEssentials'||cartItem.modalName === 'Detergent'||cartItem.modalName === 'OralCare'||cartItem.modalName === 'Shampoo') {

                    mainCategory = 'Grocery'
                }
               

                const schemaCollection = mongoose.model(cartItem.modalName);
                const cartItemDetails = await schemaCollection.findById(cartItem.cartItemId);
                
                cartItemList.push({cartItemDetails,mainCategory});
            }
            return res.status(200).json({
                message: "Cart items retrieved successfully",
                data:
                {
                    cartItemList: cartItemList,
                    AllcartItems: AllcartItems,
                    // mainCategory:mainCategory
                }

            });
        }

    } catch (error) {
        return res.status(500).json({
            message: "Error fetching cart items",
            error: error.message,
        })
    }
}

export const CartItem = async (req, res) => {

    try {
        const cartItem = await Cart.findOne({ user_ref: req.user.id });
        if (!cartItem) {
            console.log("jjjjj", cartItem);

            return res.status(404).json({
                message: "No items in the cart",
                data: cartItem,
            });
        }
        else {


            return res.status(200).json({
                message: "Cart items retrieved successfully",
                data:
                {
                    cartItem: cartItem,
                }

            });

        }

    } catch (error) {
        return res.status(500).json({
            message: "Error fetching cart items",
            error: error.message,
        })
    }
}



export const IncreasedQuantity = async (req, res) => {
    try {
        const cartItem = await Cart.findById(req.params.cartItemId);
        if (cartItem && cartItem.user_ref.equals(req.user.id)) {

            const updateQuantity = await Cart.findByIdAndUpdate(req.params.cartItemId,
                { $inc: { quantity: 1 } },
                { new: true })
            if (updateQuantity) {

                return res.status(200).json(
                    {
                        meassage: "updaded quantity",

                    })
            }
        }
    } catch (error) {
        return res.status(422).json(
            {
                meassage: "updaded quantity",
                error: error
            })

    }

}

export const DecreasedQuantity = async (req, res) => {
    try {

        const cartItem = await Cart.findById(req.params.cartItemId);
        if (cartItem && cartItem.user_ref.equals(req.user.id) && cartItem.quantity > 1) {

            const updateQuantity = await Cart.findByIdAndUpdate(req.params.cartItemId,
                { $inc: { quantity: -1 } },
                { new: true })
            if (updateQuantity) {

                return res.status(200).json(
                    {
                        meassage: "updaded quantity",

                    })
            }
        } else {

            return res.status(401).json(
                {
                    meassage: "can't update quantity",

                })
        }
    } catch (error) {
        return res.status(422).json(
            {
                meassage: "updaded quantity",
                error: error
            })

    }

}


export const removeCartItem = async (req, res) => {
    try {

        const cartItem = await Cart.findById(req.params.cartItemId);
        if (cartItem && cartItem.user_ref.equals(req.user.id)) {
            const removeCartItem = await Cart.findByIdAndDelete(req.params.cartItemId);
            if (removeCartItem) {

                const updadedCartItemListOfUser = await User.findByIdAndUpdate(req.user.id,
                    {
                        $pull: { cart_ref: req.params.cartItemId }
                    });
                if (updadedCartItemListOfUser) {
                    await updadedCartItemListOfUser.save();

                    return res.status(200).json(
                        {
                            message: "Cart Item and Associated cartItemId has been deleted from the user and as well as from the cart",

                        })
                } else {
                    return res.status(200).json(
                        {
                            message: "Cart Item has been deleted from the cart",

                        })
                }
            }
        }
    }
    catch (error) {
        return res.status(422).json(
            {
                message: "error",
                error: error
            })

    }

}