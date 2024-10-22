import mongoose from "mongoose";

const userSchema= new mongoose.Schema(
    {
        name:
        {
            type:String,
            required:true,
        },
        email:
        {
            type:String,
            required:true,
        },
        password:
        {
            type:String,
            required:true,
        },
        usertype:
        {
            type:String,
        },
        cart_ref:
        [
            {
                type:mongoose.Schema.Types.ObjectId,
                 ref:'Cart',
            }
        ],
        product_ref: [
            {
                refId: { 
                    type: mongoose.Schema.Types.ObjectId, 
                    required: true,
                },
                refModel: { 
                    type: String, 
                    required: true,
                }
            }
        ],
        
        address_ref:
        [
            {
               type : mongoose.Schema.Types.ObjectId,
               ref:'Address',  
            }
        ],
        order_ref:
        [
            {
               type : mongoose.Schema.Types.ObjectId,
               ref:'Order',  
            }
        ]
    },
    
    {
        timestamps:true,
    },
)

const User= mongoose.model('User', userSchema);
export default User;