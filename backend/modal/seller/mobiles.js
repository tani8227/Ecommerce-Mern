import mongoose from "mongoose";

const mobileSchema = new mongoose.Schema(
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
        comboId:
        {
            type: String,
            required: true,
        },
        modelName:
        {
            type: String,
            required: true,
        },
        imgUrl:
        [
            {
                type: String,
                required: true,
            }
        ],
        price:
        {
            type: Number,
            required: true,
        },
        modelNumber:
        {
            type: String,
            required: true,

        },
        color:
        {
            type: String,
            required: true
        },
        displaySize:
        {
            type: String,
            required: true,
        },
        resolutionType:
        {
            type: String,
            required: true,
        },

        operatingSystem:
        {
            type: String,
            required: true
        },
        processorBrand:
        {
            type: String,
            required: true,
        },
        processorCore:
        {
            type: String,
            required: true,
        },

        internalStorage:
        {
            type: String,
            required: true,
        },
        ram:
        {
            type: String,
            required: true,
        },
        expandableStorage:
        {
            type: String,
            required: true,
        },
        primaryCamera:
        {
            type: String,
            required: true
        },
        secondaryCamera:
        {
            type: String,
            required: true
        },
        videoRecording:
        {
            type: String,
            required: true
        },
        digitalZoom:
        {
            type: String,
            required: true
        },
        supportedNetworks:
        {
            type: String,
            required: true
        },
        internetConnectivity:
        {
            type: String,
            required: true
        },
       
        simSize:
        {
            type: String,
            required: true
        },
        sensors:
        {
            type: String,
            required: true
        },
        batteryCapacity:
        {
            type: String,
            required: true
        },
        warranty:
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
        timestamp: true
    }
)


const Mobile = mongoose.model('Mobile', mobileSchema);

export default Mobile;
