import express from 'express';
import * as windCheaterController from '../../../../../controllers/sellers/fashion/windCheater_controller.js'
import passport from '../../../../../config/passport-jwt-strategy.js'

const windCheaterRouter= express.Router();


windCheaterRouter.post('/add',passport.authenticate('jwt', {session:false}), windCheaterController.AddWindCheater);
windCheaterRouter.get('/:id', windCheaterController.getOneItem);
windCheaterRouter.get('/model-name/:itemName',  windCheaterController.getAllItemByItemName)
windCheaterRouter.patch('/update',passport.authenticate('jwt', {session:false}), windCheaterController.UpdateWindCheater)
windCheaterRouter.get('/companyName/:companyName',  windCheaterController.getAllItemByCompanyName)


export default windCheaterRouter;