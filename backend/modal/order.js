import mongoose from "mongoose";

const orderSchema= new mongoose.Schema(
    {
        orderItemId:
        {
            type:String,
            required: true,
        },
        userId:
        {
            type:String,
            required: true,
        },
        sellerId:
        {
            type:String,
            required: true,
        },
        modalName:
        {
            type:String,
            required:true,
        },
        orderItemImg:
        {
            type:String,
            required:true,
        },
        paymentMode:
        {
            type:String,
            required: true,
        },
        upiId:
        {
            type:String,
            required: true,
        },
        deliveryAddress:
        {
            type:String,
            required: true,
        },
        orderItemQuantity:
        {
            type:Number,
            required: true,
        },
        price:
        {
            type:Number,
            required: true,
        },
        deliveryDate:
        {
            type:String,
            required: true,
        },
        status:
        {
            type:String,
            required: true,
        }

    },{timestamps:true})

    const Order= mongoose.model('Order', orderSchema);
    export default Order;