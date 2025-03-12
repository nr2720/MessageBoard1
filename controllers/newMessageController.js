const {messages, getMessageByIdF}  = require('../db');
const asyncHandler = require('express-async-handler');

const addNewMessage = (message, username) => {
    const newMessage = Object.create(messages);
    newMessage.id = (Math.round(Math.random() * 100));
    newMessage.text = message;
    newMessage.user = username;
    newMessage.added = new Date();

    if(!newMessage) {
        return;
    }

    else {
        messages.push(newMessage);
    }
}

module.exports = addNewMessage;

