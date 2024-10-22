import express from 'express';

const userDetailsRouter= express.Router();

import * as userDetailsContoller from '../../../../controllers/users/userDetails_controller.js'
import passport from '../../../../config/passport-jwt-strategy.js'


userDetailsRouter.get('/get',passport.authenticate('jwt',{ session: false }), userDetailsContoller.userDetails);
userDetailsRouter.post('/edit',passport.authenticate('jwt',{ session: false }), userDetailsContoller.editUserDetails);





export default userDetailsRouter;