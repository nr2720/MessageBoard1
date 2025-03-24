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


// const users = [];

  async function getMessageByIdF(messageId) {
    const response = messages.find(message => message.id === messageId);
    return response
  };
  












  //user Storage 

  class userStorage {
    constructor() {
      this.storage = [];
      this.id = 0;  
    }

    //addUser
    addUser({firstName, lastName, email, age, bio}) {
      const id = this.id;
      this.storage[id] = {id, firstName, lastName, email, age, bio};
      this.id++;
    }


    //get users
    getUsers() {
      return Object.values(this.storage);
    }


    //get Users by id
    getUsersById({id}) {
      return this.storage[id];
    }


    //updateUser
    updateUser(id, {firstName, lastName}){
      this.storage[id] = {id, firstName, lastName};
    }

    //delete

    deleteUser(id) {
      delete this.storage[id];
    }
  }

  const users = new userStorage;














  module.exports = {messages, users, getMessageByIdF}

