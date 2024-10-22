import express from 'express';
import * as shampooController from '../../../../../controllers/sellers/grocery/shampoo_controller.js'
import passport from '../../../../../config/passport-jwt-strategy.js'
const shampooRouter= express.Router();


shampooRouter.post('/add', passport.authenticate('jwt', {session:false}),shampooController.AddShampoo);
shampooRouter.get('/:id',shampooController.getOneItem);
shampooRouter.get('/model-name/:itemName',  shampooController.getAllItemByItemName)
shampooRouter.get('/companyName/:companyName', shampooController.getAllItemByCompanyName)
shampooRouter.patch('/update',passport.authenticate('jwt', {session:false}), shampooController.UpdateShampoo)


export default shampooRouter;