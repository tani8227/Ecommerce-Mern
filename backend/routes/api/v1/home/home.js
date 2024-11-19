import express from 'express';
const homeRouter= express.Router();
import * as homeController from '../../../../controllers/sellers/home_controller.js'




homeRouter.get('/getAllMobile', homeController.getHomePageMobileData)
homeRouter.get('/getAllFashion', homeController.getHomePageFashionData)






export default homeRouter;