import express from 'express';
const userRouter= express.Router();
import * as userController from '../../../../controllers/users/user_controller.js'
import passport from '../../../../config/passport-jwt-strategy.js'
import cartRouter from './cart.js';
import addressRouter from './address.js';
import userDetailsRouter from './userDeatils.js';
import orderRouter from './order.js';
import searchQueryRouter from './searchQuery.js'




userRouter.get('/', passport.authenticate('jwt',{ session: false }));
userRouter.post('/create', userController.signup);
userRouter.post('/create-session', userController.createSession);
userRouter.use('/cart',cartRouter );
userRouter.use('/Address',addressRouter );
userRouter.use('/Details',userDetailsRouter );
userRouter.use('/order',orderRouter );
userRouter.use('/searchQuery',searchQueryRouter);





export default userRouter;