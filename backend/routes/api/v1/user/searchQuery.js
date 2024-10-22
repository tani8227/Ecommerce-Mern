import express from 'express';
const searchQueryRouter= express.Router();
import * as  searchQueryController from '../../../../controllers/users/searchQuery_controller.js'


searchQueryRouter.get('/', searchQueryController.searchQuery);



export default searchQueryRouter;