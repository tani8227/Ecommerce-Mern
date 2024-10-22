import mongoose from "mongoose";

const shoeSchema = new mongoose.Schema(
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
            required: true,
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
            required: true,
        },

        modelName:
        {
            type: String,
            required: true,
        },


        shoeType:
        {
            type: String,
            required: true
        },
        typeForSports:
        {
            type: String,

        },
        price:
        {
            type: Number,
            required: true,
        },

        color:
        {
            type: String,
            required: true,
        }
        ,
        size:
        {
            type: Number,
            required: true
        },
        outerMaterial:
        {
            type: String,
            required: true
        },
        closure:
        {
            type: String,
            required: true
        },
        packOf:
        {
            type: String,
            required: true
        },
        season:
        {
            type: String,
            required: true
        },
        careInstructions:
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

const Shoe = mongoose.model('Shoe', shoeSchema);
export default Shoe;