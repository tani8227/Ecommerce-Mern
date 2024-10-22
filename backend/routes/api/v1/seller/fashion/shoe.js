import express from 'express';
import * as shoeController from '../../../../../controllers/sellers/fashion/shoe_controller.js'
import passport from '../../../../../config/passport-jwt-strategy.js'

const shoeRouter= express.Router();


shoeRouter.post('/add',passport.authenticate('jwt', {session:false}), shoeController.AddShoe);
shoeRouter.get('/:id', shoeController.getOneItem);
shoeRouter.get('/model-name/:itemName',  shoeController.getAllItemByItemName)
shoeRouter.patch('/update',passport.authenticate('jwt', {session:false}), shoeController.UpdateShoe)
shoeRouter.get('/companyName/:companyName',  shoeController.getAllItemByCompanyName)


export default shoeRouter;