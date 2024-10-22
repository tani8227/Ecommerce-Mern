import express from 'express';
import * as oralCareController from '../../../../../controllers/sellers/grocery/oralCare_controller.js'
import passport from '../../../../../config/passport-jwt-strategy.js'
const oralCareRouter= express.Router();


oralCareRouter.post('/add', passport.authenticate('jwt', {session:false}),oralCareController.AddOralCare);
oralCareRouter.get('/:id',oralCareController.getOneItem);
oralCareRouter.get('/model-name/:itemName',  oralCareController.getAllItemByItemName)
oralCareRouter.get('/companyName/:companyName', oralCareController.getAllItemByCompanyName)
oralCareRouter.patch('/update',passport.authenticate('jwt', {session:false}), oralCareController.UpdateOralCare)


export default oralCareRouter;