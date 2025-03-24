const { Router } = require('express');
const indexRouter = Router();

const {messages, getMessageByIdF, users} = require('../db');
const {getMessageById, deleteMessageById} = require('../controllers/messagesControllers');


//controller
const userController = require('../controllers/userController');






//First Get Request
indexRouter.get('/', (req, res) => {
    res.render('index', { messages : messages })
})



//Post search message by Id router
indexRouter.post('/messageById', async (req, res) => {
  const {messageId} = req.body; 
  const message = await getMessageById(messageId);
  if (!message) {
    res.send('Cannot find message')
  }
  else{
    res.render('messSearchId', { message: message });
  }
  
})


indexRouter.post('/deleteById', async (req, res) => {
  const {messageId} = req.body;
  await deleteMessageById(messageId);
  res.redirect('/');
})



//Create User
indexRouter.get('/createUser', (req, res) => {
  res.render('createUser')
});


indexRouter.post("/createUser", userController.userCreatePost);









indexRouter.get('/users', (req, res) => {
  const activeUsers = users.getUsers();
  res.render('users', {users: activeUsers});
})















module.exports = indexRouter;