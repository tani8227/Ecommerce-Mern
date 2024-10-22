import mongoose from 'mongoose';

const flourSchema= new mongoose.Schema(
    {
        companyName:
        {
            type:String,
            required:true,
        },
        seller_ref:
        {
            type:mongoose.Schema.Types.ObjectId,
            required:true,
        },
        flourType:
        {
            type:String,
            required:true,
        },
        comboId:
        {
            
                type:String,
                required:true,
            
        },
        imgUrl:[

            {
              type:String,
              required:true,  
            }
        ],
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
        modelName:
        {
            type:String,
            required:true,
        },
        netWeight:
        {
            type:String,
            required:true,
        },
        maximumShelfLife:
        {
            type:String,
            required:true,
        },

        about:
        {
            type:String,
            required:true,
        },
        quantity:
        {
            type:Number,
            required:true,
        }
    },{timestamps:true})

    const Flour= mongoose.model('Flour', flourSchema);
    export default Flour;