import express from 'express';

const addressRouter= express.Router();

import * as addressController from '../../../../controllers/users/address_controller.js'
import passport from '../../../../config/passport-jwt-strategy.js'

addressRouter.post('/add', passport.authenticate('jwt',{ session: false }), addressController.Add_Address);
addressRouter.get('/get',passport.authenticate('jwt',{ session: false }), addressController.allAddress);





export default addressRouter;