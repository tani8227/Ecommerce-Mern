import express from 'express';
import * as fridgeController from '../../../../../controllers/sellers/appliances/fridge_controller.js'
import * as fieldFridgeController from '../../../../../controllers/field/appliances/field_fridge_controller.js'
import passport from '../../../../../config/passport-jwt-strategy.js'
const fridgeRouter= express.Router();


fridgeRouter.post('/add', passport.authenticate('jwt', {session:false}),fridgeController.AddFridge);
fridgeRouter.get('/:id',fridgeController.getOneItem);
fridgeRouter.get('/model-name/:itemName',  fridgeController.getAllItemByItemName)
fridgeRouter.get('/companyName/:companyName', fridgeController.getAllItemByCompanyName)
fridgeRouter.get('/field/get', fieldFridgeController.getField);
fridgeRouter.patch('/update',passport.authenticate('jwt', {session:false}), fridgeController.UpdateFridge)



export default fridgeRouter;