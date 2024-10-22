import express from 'express';
import * as shirtController from '../../../../../controllers/sellers/fashion/shirt_controller.js'
import passport from '../../../../../config/passport-jwt-strategy.js'
import * as fieldShirtController from '../../../../../controllers/field/fashion/field_shirt_controller.js'
const shirtRouter= express.Router();


shirtRouter.post('/add',passport.authenticate('jwt', {session:false}), shirtController.AddShirt);
shirtRouter.get('/:id', shirtController.getOneItem);
shirtRouter.get('/model-name/:itemName',  shirtController.getAllItemByItemName)
shirtRouter.get('/companyName/:companyName',  shirtController.getAllItemByCompanyName)
shirtRouter.get('/field/get',fieldShirtController.getField )
shirtRouter.patch('/update',passport.authenticate('jwt', {session:false}), shirtController.UpdateShirt)


export default shirtRouter;