import mongoose from "mongoose";
const laptopSchema= new mongoose.Schema(
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
        color:
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
        processorBrand:
        {
            type:String,
            required:true,
        },
        processorName:
        {
            type:String,
            required:true,
        },  
        processorGeneration:
        {
            type:String,
           
        },
        storageType:
        {
            type:String,
            required:true,
        },
        storageCapacity:
        {
            type:String,
            required:true,
        },
        ram:
        {
            type:String,
            required:true,
        },
        ramType:
        {
            type:String,
            required:true,
        },
        dedicatedGraphicsMemoryType:
        {
            type:String,
          
        },
        
        operatingSystem:
        {
            type:String,
            
        },
       
        batteryBackup:
        {
           type:String,
          
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

    const Laptop= mongoose.model('Laptop', laptopSchema);
    export default Laptop;