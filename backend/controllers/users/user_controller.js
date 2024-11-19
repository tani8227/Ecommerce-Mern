
import  User from '../../modal/user.js'
import jwt from 'jsonwebtoken';



const signup = async (req, res) => {


    try {

         console.log(req.body);
        
        const user = await User.findOne({ email: req.body.email });
        if (!user) 
            {
                const newuser = await User.create(
                    {
                        name: req.body.name,
                        password: req.body.password,
                        email: req.body.email,
                        usertype:req.body.usertype,
                    })
                    
                    if (newuser)
                        {
                       
                     return res.status(200).json({
                        message: "User created successfully",
                        // user: newuser,
                      
                    });
                }
        }else
        {
            return res.status(409).json({
                message: "User already exists",
                user: user,
              
            });
        }

    }
    catch(err)
    {
        return res.json(
            {
                mesage: "error",
                error: err,
                status: 401,
            });
    }
          
}               

const createSession= async(req,res)=>
    {    
     
           const user = await User.findOne({email:req.body.email});
           console.log(user.id)
           if(!user||user.password!=req.body.password)
            {
                return res.status(422).json(
                    {
                        message:"incorrect username/password"
                    })
                    
                }else
                {
                    
                    return res.status(200).json({
                        mesage: "signin successfully and token created successfully here is your token",
                        data: {
                            user:
                            {
                                name:user.name,
                                email:user.email,
                                usertype:user.usertype,
                                id:user.id
                                
                            },
                            token: jwt.sign(user.toJSON(), 'ecom', { expiresIn: '2d' })
                        }
                    });
                }
            }
      
                      
        
        


export  {signup, createSession};