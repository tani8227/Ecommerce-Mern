import express from 'express';
import * as detergentsController from '../../../../../controllers/sellers/grocery/detergents_controller.js'
import passport from '../../../../../config/passport-jwt-strategy.js'
const detergentsRouter= express.Router();


detergentsRouter.post('/add', passport.authenticate('jwt', {session:false}),detergentsController.AddDetergent);
detergentsRouter.get('/:id',detergentsController.getOneItem);
detergentsRouter.get('/model-name/:itemName',  detergentsController.getAllItemByItemName)
detergentsRouter.get('/companyName/:companyName', detergentsController.getAllItemByCompanyName)
detergentsRouter.patch('/update',passport.authenticate('jwt', {session:false}), detergentsController.UpdateDetergent)


export default detergentsRouter;