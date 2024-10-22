import passport from "passport";
import {Strategy as JWTStrategy} from 'passport-jwt'
import { ExtractJwt as ExtractJWT } from "passport-jwt";
import User from "../modal/user.js";
import dotenv from 'dotenv';
dotenv.config(); 

const opts=
{
    jwtFromRequest:ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey:process.env.SECRET_OR_KEY,
}


passport.use(new JWTStrategy(opts, async function(payLoad, done)
{
    try {
        
        
        const user= await User.findById(payLoad._id);
        if(!user)
            {
                return done(null, false);  
            }else
            {
                return done(null, user);
            }
        
    } catch (error) {
         console.log(error);
         return done(null, false);
    }

}))



export default passport;