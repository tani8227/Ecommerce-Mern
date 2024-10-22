import express from 'express';
import passport from '../../../../../config/passport-jwt-strategy.js';
import * as laptopController from '../../../../../controllers/sellers/electronics/laptop_controller.js'
import * as fieldLaptopController from '../../../../../controllers/field/electronics/field_laptop_controller.js'

const laptopRouter= express.Router();



laptopRouter.post('/add',passport.authenticate('jwt', {session:false}), laptopController.AddLaptop);
laptopRouter.get('/:id', laptopController.getOneItem);
laptopRouter.get('/model-name/:itemName',  laptopController.getAllItemByItemName)
laptopRouter.get('/companyName/:companyName',  laptopController.getAllItemByCompanyName)
laptopRouter.get('/field/get', fieldLaptopController.getField);
laptopRouter.patch('/update',passport.authenticate('jwt', {session:false}), laptopController.UpdateLaptop)


export default laptopRouter