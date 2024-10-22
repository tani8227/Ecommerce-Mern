import mongoose from "mongoose";

const jeansSchema= new mongoose.Schema(
    {
        companyName:
        {
            type: String,
            required: true,
        },
        seller_ref:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        comboId:
        {
            type: String,
            required: true
        },
        imgUrl:
            [
                {
                    type: String,
                    required: true
                }
            ],
        gender:
        {
            type: String,
            required: true
        },
        
        color:
        {
            type: String,
            required: true,
        },
        price:
        {
            type: Number,
            required: true,
        },
        fit:
        {
            type: String,
            required: true,
        },
        fabric:
        {
            type: String,
            required: true,
        },
        pattern:
        {
            type: String,
            required: true,
        },
        rise:
        {
            type: String,
            required: true,
        },
        distressed:
        {
            type: String,
            required: true,
        },
        size:
        {
            type: String,
            required: true
        },
        pocketType:
        {
            type: String,
            
        },
        salesPackage:
        {
            type: String,
           
        },
        stretchable:
        {
            type: String,
            required: true,
        },
        faded:
        {
            type: String,
            required: true,
        },
        fly:
        {
            type: String,
            
        },
       
        fabricCare:
        {
            type: String,
            
        },
        suitableFor:
        {
            type: String,
           
        },
        quantity:
        {
            type: Number,
            required: true,
        }
    },
    {
        timestamp: true,
    })

const Jeans= mongoose.model('Jeans', jeansSchema);
export default Jeans;