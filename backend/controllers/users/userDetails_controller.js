
import User from "../../modal/user.js";

export const userDetails = async (req, res) => 
    {
    console.log(req.body);
    
    const user = await User.findById(req.user.id);
    if (user && user.usertype === 'buyer') {



        return res.status(200).json(
            {
                data: user,
                message: "user found !!!",
            })

        }
         else {
        return res.status(201).json(
            {
                data:user,
                message:'user not found'
            })
        }
    


}


   
export const editUserDetails = async (req, res) => {


    try {
         console.log(req.body, "))))))))))))))))))");
        
       
                const newuser = await User.findByIdAndUpdate(req.user.id,
                    {
                        name: req.body.name,
                        email:req.body.email
                       
                    })
                 
                    if (newuser)
                        {
                       
                     return res.status(200).json({
                        message: "user Name edited successfully",
                        // user: newuser,
                      
                    });
                }
       

    }
    catch(err)
    {
        return res.status(401).json(
            {
                mesage: "error in editing user Name",
                error: err,
              
            });
    }
          
}             

