import Order from '../../modal/order.js'
import User from '../../modal/user.js'
import Cart from '../../modal/cart.js'
import mongoose from 'mongoose';

export const placeOrder = async (req, res) => {

    try {

       
    
        const user = await User.findById(req.user.id)
        
        if (user) {
            
            const order = await Order.create(req.body);
            if (order) {
                
                user.order_ref.push(order.id);
                user.save();
                
                
                const removeCartItem = await Cart.findOneAndDelete({cartItemId:order.orderItemId});
             
                if (removeCartItem)
                    {
                     
                    const updadedOrderItemListOfUser = await User.findByIdAndUpdate(req.user.id,
                        {
                            $pull: {cart_ref: removeCartItem.id }
                        });

                    if (updadedOrderItemListOfUser)
                    {
                        await updadedOrderItemListOfUser.save();


                        return res.status(200).json(
                            {
                                message: "Order Placed Successfully ",
                                data: order,
                            })

                    } else
                    {
                        return res.status(401).json(
                            {
                                message: "Order Placed Successfully And Order Item has not deleted from the Order_ref ",

                            })
                    }
                } 
                else 
                {
                    return res.status(401).json(
                        {
                            message: "Order Placed Successfully And Order Item removed from the Cart",

                        })
                }
            } else 
            {
                console.log("hhhhh")

                return res.status(401).json(
                    {
                        message: "Error in placing the order",

                    })
            }
        }else
        {
          

            return res.status(401).json(
                {
                    message: "Unauthorised User",

                })
        }
    }
    catch (error) {
            return res.status(401).json(
                {
                    message: "Error in placing the order",
                    error: error
                })
        }
    }

export const getAllOrders = async (req, res) => {

        try {
            const order = await Order.find({}).sort({ createdAt: -1 });
            if (order) {


                // console.log("oooooo", order);
                return res.status(200).json(
                    {
                        message: "Got All Orders Successfully",
                        data: order,
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


    export const getOrderItemDetails = async (req, res) => {

        try {

            // console.log(req.query);
            const schemaCollection = mongoose.model(req.query.modalName);
            const orderItemDetails = await schemaCollection.findById(req.query.orderItemId)
            // console.log(orderItemDetails);
            if (orderItemDetails) {


                // console.log("oooooo", orderItemDetails);
                return res.status(200).json(
                    {
                        message: "Got All Orders Successfully",
                        data:
                        {
                            data: orderItemDetails,
                            orderId: req.query.orderId,
                            modalName: req.query.modalName,
                        }
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

    export const getOneOrder = async (req, res) => {

        try {

            // console.log(req.query);
            // const schemaCollection = mongoose.model(req.query.modalName);
            const orderItemDetails = await Order.findOne({ orderItemId: req.query.orderItemId })
            // console.log(orderItemDetails);
            if (orderItemDetails) {

                const user = await User.findById(req.user.id);
                if (user) {

                    // console.log("oooooo", orderItemDetails);
                    return res.status(200).json(
                        {
                            message: "Got All Orders Successfully",
                            data: orderItemDetails,
                            user: user
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