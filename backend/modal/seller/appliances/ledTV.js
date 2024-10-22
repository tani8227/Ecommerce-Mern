import mongoose from "mongoose";

const LedTVSchema= new mongoose.Schema(
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
        comboId:
        {
            type:String,
            required:true,
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
        series:
        {
            type:String,
           
        },
        displaySize:
        {
            type:String,
            required:true,
        },
        screenType:
        {
            type:String,
            required:true,
        },
        hdTechnology:
        {
            type:String,
            required:true,
        },
        wifi:
        {
            type:String,
            required:true,
        },
       
        smartTV:
        {
            type:String,
            required:true,
        },
        operatingSystem:
        {
            type:String,
            required:true,
        },
        dimensions:
        {
            type:String,
            required:true,
        },
        launchYear:
        {
           type:Number,
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

    const LedTV= mongoose.model('LedTV', LedTVSchema);
    export default LedTV;