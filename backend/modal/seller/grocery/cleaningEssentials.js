import mongoose from 'mongoose';;

const cleaningEssentialsSchema= new mongoose.Schema(
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
       
        modelName:
        {
            type:String,
           
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
        useFor:
        {
            type:String,
            required:true,
        },
        fragrance:
        {
            type:String,
           
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


    const CleaningEssentials= mongoose.model('CleaningEssentials', cleaningEssentialsSchema);
    export default CleaningEssentials;