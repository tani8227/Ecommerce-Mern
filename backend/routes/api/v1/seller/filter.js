import express from 'express';

const filterRouter= express.Router();

import * as filterController from '../../../../controllers/filter/filter_controller.js'


filterRouter.get('/companyNameAndPrice', filterController.getFilter);
filterRouter.get('/paramsSaerch', filterController.getFilterByParamSearch);
filterRouter.get('/getAll', filterController.getAllProducts);





export default filterRouter;