import express from 'express';
import * as washingMachineController from '../../../../../controllers/sellers/appliances/washingMachine_controller.js'
import * as fieldWashingMachineController from '../../../../../controllers/field/appliances/field_washingMachine_controller.js'
import passport from '../../../../../config/passport-jwt-strategy.js'

const washingMachineRouter= express.Router();


washingMachineRouter.post('/add', passport.authenticate('jwt', {session:false}),washingMachineController.AddWashingMachine);
washingMachineRouter.get('/:id',washingMachineController.getOneItem);
washingMachineRouter.get('/model-name/:itemName',  washingMachineController.getAllItemByItemName)
washingMachineRouter.get('/companyName/:companyName', washingMachineController.getAllItemByCompanyName)
washingMachineRouter.get('/field/get',fieldWashingMachineController.getField)
washingMachineRouter.patch('/update',passport.authenticate('jwt', {session:false}), washingMachineController.UpdateWashingMachine)




export default washingMachineRouter;