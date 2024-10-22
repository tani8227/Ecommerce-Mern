import express from 'express';

const productRouter= express.Router();

import * as productController from '../../../../controllers/sellers/product_Controller.js'
import passport from '../../../../config/passport-jwt-strategy.js'



productRouter.get('/get',passport.authenticate('jwt', {session:false}), productController.getAllSellingProduct);
productRouter.get('/getorderedProducts',passport.authenticate('jwt', {session:false}), productController.getAllOrderedProduct);
productRouter.get('/model-name/:modalName', passport.authenticate('jwt', {session:false}), productController.getAllProductByModalName)
productRouter.delete('/delete', passport.authenticate('jwt', {session:false}), productController.deleteProduct)




export default productRouter;