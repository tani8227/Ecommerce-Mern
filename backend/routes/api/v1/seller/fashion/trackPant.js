import express from 'express';
import * as trackpantController from '../../../../../controllers/sellers/fashion/trackPant_controller.js'
import passport from '../../../../../config/passport-jwt-strategy.js'

const trackpantRouter= express.Router();


trackpantRouter.post('/add',passport.authenticate('jwt', {session:false}), trackpantController.AddTrackPant);
trackpantRouter.get('/:id', trackpantController.getOneItem);
trackpantRouter.get('/model-name/:itemName',  trackpantController.getAllItemByItemName)
trackpantRouter.patch('/update',passport.authenticate('jwt', {session:false}), trackpantController.UpdateTrackPant)
trackpantRouter.get('/companyName/:companyName',  trackpantController.getAllItemByCompanyName)


export default trackpantRouter;