const { Router } = require('express');
const newMessageRouter = Router();
const addNewMessage = require('../controllers/newMessageController');


//Get
newMessageRouter.get('/', (req, res) => {
    res.render('newMessage')
})




//Post
//Post message to a specefic person
newMessageRouter.post('/', (req, res) => {
    const newMessage = addNewMessage(req.body.message, req.body.username);
    res.redirect('/')
})








module.exports = newMessageRouter;