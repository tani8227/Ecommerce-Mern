import express from 'express';
import * as tshirtController from '../../../../../controllers/sellers/fashion/tshirt_controller.js'
import passport from '../../../../../config/passport-jwt-strategy.js'

const tshirtRouter= express.Router();


tshirtRouter.post('/add',passport.authenticate('jwt', {session:false}), tshirtController.AddTShirt);
tshirtRouter.get('/:id', tshirtController.getOneItem);
tshirtRouter.get('/model-name/:itemName',  tshirtController.getAllItemByItemName)
tshirtRouter.patch('/update',passport.authenticate('jwt', {session:false}), tshirtController.UpdateTShirt)
tshirtRouter.get('/companyName/:companyName',  tshirtController.getAllItemByCompanyName)




export default tshirtRouter;