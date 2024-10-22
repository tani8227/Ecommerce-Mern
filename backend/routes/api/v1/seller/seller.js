import express from 'express';
import flourRouter from './grocery/flours.js'

import mobileRouter from './mobile.js';

import ledTVRouter from './appliances/LedTV.js';
import fridgeRouter from './appliances/fridge.js';
import coolerRouter from './appliances/cooler.js';
import acRouter from './appliances/ac.js';
import washingMachineRouter from './appliances/washingMachine.js';

import laptopRouter from './electronics/laptop.js';
import printerRouter from './electronics/printer.js'
import cameraRouter from './electronics/camera.js';

import shirtRouter from './fashion/shirt.js';
import tshirtRouter from './fashion/tshirt.js';
import jeansRouter from './fashion/jeans.js';
import shoeRouter from './fashion/shoe.js';
import trackPantRouter from './fashion/trackPant.js';
import windCheaterRouter from './fashion/windCheater.js';

import detergentsRouter from './grocery/detergents.js';
import shampooRouter from './grocery/shampoo.js';
import oralCareRouter from './grocery/oralCare.js';
import cleaningEssentialsRouter from './grocery/cleaningEssentials.js';


import filterRouter from './filter.js'
// import fieldRouter from './field.js';
import productRouter from './product.js'


const sellerRouter= express.Router();

import * as sellerController from '../../../../controllers/sellers/seller_controller.js'

sellerRouter.post('/create', sellerController.sellerSignup );
sellerRouter.post('/create-session', sellerController.createSession);
sellerRouter.use('/Mobile',mobileRouter)
sellerRouter.use('/Shirt', shirtRouter );
sellerRouter.use('/Laptop', laptopRouter);
sellerRouter.use('/Fridge', fridgeRouter);
sellerRouter.use('/Flour', flourRouter);
sellerRouter.use('/LedTV', ledTVRouter);
sellerRouter.use('/WashingMachine',washingMachineRouter);
sellerRouter.use('/Cooler',coolerRouter);
sellerRouter.use('/Ac',acRouter);
sellerRouter.use('/Printer',printerRouter);
sellerRouter.use('/Camera',cameraRouter);
sellerRouter.use('/Tshirt',tshirtRouter);
sellerRouter.use('/TrackPant',trackPantRouter);
sellerRouter.use('/Shoe',shoeRouter);
sellerRouter.use('/Jeans', jeansRouter)
sellerRouter.use('/WindCheater', windCheaterRouter)
sellerRouter.use('/Detergent', detergentsRouter)
sellerRouter.use('/Shampoo', shampooRouter)
sellerRouter.use('/OralCare', oralCareRouter)
sellerRouter.use('/CleaningEssentials', cleaningEssentialsRouter)
sellerRouter.use('/filter', filterRouter);
sellerRouter.use('/product', productRouter);






export default sellerRouter;