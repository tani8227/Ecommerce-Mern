import mongoose from 'mongoose';;

const shampooSchema = new mongoose.Schema(
    {
        companyName:
        {
            type: String,
            required: true,
        },
        seller_ref:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            require: true
        },
        comboId:
        {

            type: String,
            required: true,

        },
        imgUrl:
        [
            {
                type:String,
                required:true,
            },
        ],
        gender:
        {
            type: String,
            required: true,
        },
        price:
        {
            type: Number,
            required: true,
        },
        hairType:
        {
            type: String,
            required: true,
        },
        appliedFor:
        {
            type: String,

        },
        containerType:
        {
            type: String,

        },
        composition:
        {
            type: String,
        },
        shampooPlusConditioner:
        {
            type: String,
            required: true,
        },
        capacity:
        {
            type: String,
            required: true,
        },
        packOf:
        {
            type: String,

        },
        discription:
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

const Shampoo = mongoose.model('Shampoo', shampooSchema);
export default Shampoo;