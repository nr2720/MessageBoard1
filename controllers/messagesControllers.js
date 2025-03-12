const {messages, getMessageByIdF}  = require('../db');
const asyncHandler = require('express-async-handler');



//getMessagebyId
const getMessageById = asyncHandler(async(req, res) => {
    const messageId = req;
    const message = await getMessageByIdF(Number(messageId));
    return message;
});


//delete MessageById

const deleteMessageById = asyncHandler(async (req, res) => {
    messages.map((message, index) => {
        if (message.id == req) {
            messages.splice(index, 1);
        }
        return;
    })
    

})


module.exports = {getMessageById, deleteMessageById};
