import mongoose from "mongoose";

const tshirtSchema = new mongoose.Schema(
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
        productType:
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

        sleeve:
        {
            type: String,
            required: true,
        },
        size:
        {
            type: String,
            required: true
        },

        neckType:
        {
            type: String,
            required: true,
        },

        fabricCare:
        {
            type: String,

        },
        packOf:
        {
            type: String,
            required: true,
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

const Tshirt = mongoose.model('Tshirt', tshirtSchema);
export default Tshirt;