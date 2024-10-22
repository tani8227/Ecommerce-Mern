import express from 'express';
import * as printerController from '../../../../../controllers/sellers/electronics/printer_controller.js'
import passport from '../../../../../config/passport-jwt-strategy.js'
import * as FieldPrinterController from '../../../../../controllers/field/electronics/field_printer_controller.js'
const printerRouter= express.Router();


printerRouter.post('/add', passport.authenticate('jwt', {session:false}),printerController.AddPrinter);
printerRouter.get('/:id',printerController.getOneItem);
printerRouter.get('/model-name/:itemName',  printerController.getAllItemByItemName)
printerRouter.get('/companyName/:companyName', printerController.getAllItemByCompanyName)
printerRouter.get('/field/get', FieldPrinterController.getField);
printerRouter.patch('/update',passport.authenticate('jwt', {session:false}), printerController.UpdatePrinter)



export default printerRouter;