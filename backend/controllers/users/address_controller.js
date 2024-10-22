import Address from "../../modal/address/address.js";
import User from "../../modal/user.js";

export const Add_Address = async (req, res) => {
    console.log(req.body);
    console.log("pppppppp")
    const user = await User.findById(req.user.id);
    if (user.usertype === 'buyer') {
        const address = await Address.create(req.body)

        if (address) {
             user.address_ref.push(address.id);
              user.save();
              return res.status(200).json(
                {
                    data:address,
                    message:"added address!!!",
                })
        }else
        {
            return res.status(201).json(
                {
                    data:address,
                    error:"error",
                })
        }
    }
}

export const allAddress=async(req, res)=>{
  
    try {      
        const allAddress= await Address.find({userId:req.user.id});
        console.log(allAddress);
        if(allAddress)
            {
                return res.status(200).json(
                    {
                        data:allAddress,
                        message:"got all the addresses"
                    })
            }else
            {
                return res.status(201).json(
                    {
                        data:allAddress,
                        message:"no address found"
                    })
            }
        
    } catch (error) {
        return res.status(201).json(
            {
                error:error,
                message:"error in finding the address"
            })
    }
}