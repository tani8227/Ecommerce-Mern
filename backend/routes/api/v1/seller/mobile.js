import express from 'express';
import * as MobileController from '../../../../controllers/sellers/mobile_controller.js'
import passport from '../../../../config/passport-jwt-strategy.js'
const mobileRouter = express.Router();


mobileRouter.get('/get',  MobileController.mobilesData)
mobileRouter.get('/companyName/:companyName',  MobileController.getAllItemByCompanyName)



mobileRouter.get('/:id',  MobileController.getOneItem)
mobileRouter.get('/model-name/:itemName',  MobileController.getAllItemByItemName)
mobileRouter.post('/add', passport.authenticate('jwt',{session:false}), MobileController.addmobile)
mobileRouter.patch('/update',passport.authenticate('jwt', {session:false}), MobileController.UpdateMobile)



export default mobileRouter;