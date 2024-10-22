import express from 'express';
import * as coolerController from '../../../../../controllers/sellers/appliances/cooler_controller.js'
import passport from '../../../../../config/passport-jwt-strategy.js'
const coolerRouter= express.Router();


coolerRouter.post('/add', passport.authenticate('jwt', {session:false}),coolerController.AddCooler);
coolerRouter.get('/:id',coolerController.getOneItem);
coolerRouter.get('/model-name/:itemName',  coolerController.getAllItemByItemName)
coolerRouter.get('/companyName/:companyName', coolerController.getAllItemByCompanyName)
coolerRouter.patch('/update',passport.authenticate('jwt', {session:false}), coolerController.UpdateCooler)



export default coolerRouter;