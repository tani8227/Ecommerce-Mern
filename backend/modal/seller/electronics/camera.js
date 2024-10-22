import mongoose from "mongoose";

const cameraSchema=new mongoose.Schema(
    {
        companyName:
        {
            type:String,
            required:true,
        },
        seller_ref:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        },
        imgUrl:
        [
            {
                type:String,
                required:true,
            },
        ],
        price:
        {
            type:Number,
            required:true,
        },
        modelName:
        {
            type:String,
            required:true,
        },
        slrVariant:
        {
            type:String,
            required:true,
        },
        cameraType:
        {
            type:String,
            required:true,
        },
        
        display:
        {
            type:String,
            required:true,
        },
        touchScreen:
        {
            type:String,
            required:true,
        },
        
        warranty:
        {
            type:String,
            required:true,
        },
        quantity:
        {
            type:Number,
            required:true,
        } 
    },
    {
        timestamp: true,
    })

    const Camera= mongoose.model('Camera', cameraSchema);
    export default Camera;