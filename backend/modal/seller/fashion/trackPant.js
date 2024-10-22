import mongoose from "mongoose";

const trackPantSchema= new mongoose.Schema(
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
        }
        ,
        price:
        {
            type: Number,
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
        closure:
        {
            type: String,
            
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
        packOf:
        {
            type: String,
           
        },
       
        fabricCare:
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

const TrackPant= mongoose.model('TrackPant', trackPantSchema);
export default TrackPant;