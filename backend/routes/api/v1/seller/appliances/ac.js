import express from 'express';
import * as acController from '../../../../../controllers/sellers/appliances/ac_controller.js'
import passport from '../../../../../config/passport-jwt-strategy.js'
const acRouter= express.Router();


acRouter.post('/add', passport.authenticate('jwt', {session:false}),acController.AddAc);
acRouter.get('/:id',acController.getOneItem);
acRouter.get('/model-name/:itemName',  acController.getAllItemByItemName)
acRouter.get('/companyName/:companyName', acController.getAllItemByCompanyName)
acRouter.patch('/update',passport.authenticate('jwt', {session:false}), acController.UpdateAC)



export default acRouter;