import mongoose from "mongoose";

const acSchema = new mongoose.Schema(
    {
        companyName:
        {
            type: String,
            required: true,
        },
        seller_ref:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        imgUrl:
            [
                {
                    type: String,
                    required: true,
                },
            ],
        price:
        {
            type: Number,
            required: true,
        },
        modelName:
        {
            type: String,
            required: true,
        },
        color:
        {
            type: String,
            required: true,
        },
        acType:
        {
            type: String,
            required: true,
        },

        beeRating:
        {
            type: String,
            required: true,
        },
        beeRatingYear:
        {
            type: Number,
            required: true,
        },
        condenserCoil:
        {
            type: String,
            required: true,
        },
        capacity:
        {
            type: String,
            required: true,
        },
        warranty:
        {
            type: String,
            required: true,
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

const AC = mongoose.model('Ac', acSchema);
export default AC;