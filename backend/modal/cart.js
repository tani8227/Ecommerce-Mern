import mongoose from "mongoose";

const cartSchema= new mongoose.Schema(
    {
        cartItemId:
        {
           type:String,
           required:true,
        },
        modalName:
        {
            type:String,
            required:true,
        },
        user_ref:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
        },
        quantity:
        {
            type:Number,
            required:true,
        }
    }, {timestamps:true}) ;


    const Cart=mongoose.model('Cart', cartSchema);
    export default Cart;