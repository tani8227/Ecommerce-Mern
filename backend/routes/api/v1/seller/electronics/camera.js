import express from 'express';
import * as cameraController from '../../../../../controllers/sellers/electronics/camera_controller.js'
import passport from '../../../../../config/passport-jwt-strategy.js'
const cameraRouter= express.Router();


cameraRouter.post('/add', passport.authenticate('jwt', {session:false}),cameraController.AddCamera);
cameraRouter.get('/:id',cameraController.getOneItem);
cameraRouter.get('/model-name/:itemName',  cameraController.getAllItemByItemName)
cameraRouter.get('/companyName/:companyName', cameraController.getAllItemByCompanyName)
cameraRouter.patch('/update',passport.authenticate('jwt', {session:false}), cameraController.UpdateCamera)


export default cameraRouter;