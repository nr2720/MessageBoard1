const { Router } = require('express');
const searchRouter = Router();

//search user
const userController = require('../controllers/userController');
searchRouter.get('/userid', userController.searchUserIdGet)
searchRouter.post('/userid', userController.searchUserIdPost)


module.exports = searchRouter 
