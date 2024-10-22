import mongoose from "mongoose";

const WashingMachineSchema= new mongoose.Schema(
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
        starRating:
        {
            type:String,
            
        },

        color:
        {
            type:String,
            required:true,
        },
        functionType:
        {
            type:String,
            required:true,
        },
        inBuiltHeater:
        {
            type:String,
            required:true
        },
       
        washingMethod:
        {
            type:String,
            required:true,
        },
        digitalDisplay:
         {
             type:String,
             required:true,
         },
        technology:
        {
            type:String,
            required:true,
        },
        maxSpinSpeed:
        {
            type:String,
            required:true,
        },
        wifi:
        {
           type:String,
           required:true,
        },
        outerBodyMaterial:
        {
            type:String,
            required:true,
        },
        tubMaterial:
        {
            type:String,
            required:true,
        },  
    
        launchYear:
        {
            type:String,
            required:true,
        },
        capacity:
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

    const WashingMachine= mongoose.model('WashingMachine', WashingMachineSchema);
    export default WashingMachine;