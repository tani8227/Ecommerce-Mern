import express from 'express';
const orderRouter= express.Router();
import * as orderController from '../../../../controllers/users/order_controller.js'
import passport from '../../../../config/passport-jwt-strategy.js';

orderRouter.post('/place',passport.authenticate('jwt', {session:false}), orderController.placeOrder);
orderRouter.get('/get', passport.authenticate('jwt', {session:false}), orderController.getAllOrders)
orderRouter.get('/getOrderItemDetails', passport.authenticate('jwt', {session:false}), orderController.getOrderItemDetails)
orderRouter.get('/getone', passport.authenticate('jwt', {session:false}), orderController.getOneOrder)




export default orderRouter;