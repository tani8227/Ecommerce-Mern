import mongoose from "mongoose";

const windCheaterSchema= new mongoose.Schema(
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
        productName:
        {
            type: String,
            required: true
        },
        productType:
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
        price:
        {
            type: Number,
            required: true,
        },
        collarType:
        {
            type: String,
            required: true,
        }
        ,
        color:
        {
            type: String,
            required: true,
        }
        ,
        size:
        {
            type: String,
            required: true
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

const WindCheater= mongoose.model('WindCheater', windCheaterSchema);
export default WindCheater;