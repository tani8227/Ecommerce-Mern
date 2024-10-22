import express from 'express';
import * as cartController from '../../../../controllers/users/cart_controller.js'
import passport from '../../../../config/passport-jwt-strategy.js'
const cartRouter= express.Router();


cartRouter.post('/add-to-cart',passport.authenticate('jwt', {session:false}),cartController.AddToCart);
cartRouter.post('/increase-quantity/:cartItemId',passport.authenticate('jwt', {session:false}),cartController.IncreasedQuantity);
cartRouter.post('/decrease-quantity/:cartItemId',passport.authenticate('jwt', {session:false}),cartController.DecreasedQuantity);
cartRouter.post('/remove-item/:cartItemId',passport.authenticate('jwt', {session:false}),cartController.removeCartItem);
cartRouter.get('/get',passport.authenticate('jwt', {session:false}),cartController.CartItemList);
cartRouter.get('/getItem/:id',passport.authenticate('jwt', {session:false}),cartController.CartItem);


export default cartRouter