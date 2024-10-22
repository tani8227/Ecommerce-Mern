import mongoose, { Types } from 'mongoose';

const addressSchema = new mongoose.Schema(
    {
        userId:
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        address:
        {
            type: String,
            required: true,
        }

    }, { timestamps: true });

const Address = mongoose.model('Address', addressSchema);
export default Address;
