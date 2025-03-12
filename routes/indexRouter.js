const { Router } = require('express');
const indexRouter = Router();
const {messages, getMessageByIdF} = require('../db');
const {getMessageById, deleteMessageById} = require('../controllers/messagesControllers');

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




module.exports = indexRouter;