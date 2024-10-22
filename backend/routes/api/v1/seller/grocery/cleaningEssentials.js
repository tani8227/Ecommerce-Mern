import express from 'express';
import * as cleaningEssentialsController from '../../../../../controllers/sellers/grocery/cleaningEssentials_controller.js'
import passport from '../../../../../config/passport-jwt-strategy.js'
const cleaningEssentialsRouter= express.Router();


cleaningEssentialsRouter.post('/add', passport.authenticate('jwt', {session:false}),cleaningEssentialsController.AddCleaningEssentials);
cleaningEssentialsRouter.get('/:id',cleaningEssentialsController.getOneItem);
cleaningEssentialsRouter.get('/model-name/:itemName',  cleaningEssentialsController.getAllItemByItemName)
cleaningEssentialsRouter.get('/companyName/:companyName', cleaningEssentialsController.getAllItemByCompanyName)
cleaningEssentialsRouter.patch('/update',passport.authenticate('jwt', {session:false}), cleaningEssentialsController.UpdateCeaningEssentials)


export default cleaningEssentialsRouter;