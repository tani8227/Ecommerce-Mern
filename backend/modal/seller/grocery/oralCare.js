import mongoose, { modelNames } from 'mongoose';;

const oralCareSchema= new mongoose.Schema(
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
        gender:
        {
            type:String,
            required:true,
        },
        modelName:
        {
            type:String,
            required:true,
        },
        price:
        {
            type:Number,
            required:true,
        },
        type:
        {
            type:String,
            required:true,
        },
        organicType:
        {
            type:String,
            required:true,
        },
         
        capacity:
        {
            type:String,
            required:true,
        },
        packOf:
        {
            type:String,
           
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

    const OralCare= mongoose.model('OralCare', oralCareSchema);
    export default OralCare;