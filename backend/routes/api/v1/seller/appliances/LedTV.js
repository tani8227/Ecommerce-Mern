import express from 'express';
import * as LEDTVController from '../../../../../controllers/sellers/appliances/ledTV_controller.js'
import * as fieldLedTVController from '../../../../../controllers/field/appliances/field_ledTV_controller.js'
import passport from '../../../../../config/passport-jwt-strategy.js'

const ledTVRouter= express.Router();


ledTVRouter.post('/add',passport.authenticate('jwt', {session:false}), LEDTVController.AddLEDTV);
ledTVRouter.get('/:id', LEDTVController.getOneItem);
ledTVRouter.get('/model-name/:itemName',  LEDTVController.getAllItemByItemName)
ledTVRouter.get('/companyName/:companyName',  LEDTVController.getAllItemByCompanyName)
ledTVRouter.get('/field/get', fieldLedTVController.getField )
ledTVRouter.patch('/update',passport.authenticate('jwt', {session:false}), LEDTVController.UpdateLedTV)


export default ledTVRouter;