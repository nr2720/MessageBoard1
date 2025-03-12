const messages = [
    {
      id: 0,  
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      id: 1,  
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];

  async function getMessageByIdF(messageId) {
    const response = messages.find(message => message.id === messageId);
    return response
  };

  module.exports = {messages, getMessageByIdF}

