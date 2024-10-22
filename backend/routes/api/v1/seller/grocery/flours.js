import express from 'express';
import * as flourController from '../../../../../controllers/sellers/grocery/flour_controler.js'
import passport from '../../../../../config/passport-jwt-strategy.js'
const flourRouter= express.Router();




flourRouter.post('/add', flourController.AddFlour);
flourRouter.get('/:id', flourController.getOneItem);
flourRouter.get('/model-name/:itemName',  flourController.getAllItemByItemName);
flourRouter.get('/companyName/:companyName', flourController.getAllItemByCompanyName);
flourRouter.patch('/update',passport.authenticate('jwt', {session:false}), flourController.UpdateFlour)






export default flourRouter;