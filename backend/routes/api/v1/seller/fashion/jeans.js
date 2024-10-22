import express from 'express';
import * as jeansController from '../../../../../controllers/sellers/fashion/jeans_controller.js'
import passport from '../../../../../config/passport-jwt-strategy.js'

const jeansRouter= express.Router();


jeansRouter.post('/add',passport.authenticate('jwt', {session:false}), jeansController.AddJeans);
jeansRouter.get('/:id', jeansController.getOneItem);
jeansRouter.get('/model-name/:itemName',  jeansController.getAllItemByItemName)
jeansRouter.patch('/update',passport.authenticate('jwt', {session:false}), jeansController.UpdateJeans)
jeansRouter.get('/companyName/:companyName',  jeansController.getAllItemByCompanyName)


export default jeansRouter;