module.exports = app => {
    const hoatChat = require("../controllers/hoatChat.controller.js");
  
    var router = require("express").Router();

    // Retrieve all drug
    router.get("/", hoatChat.findAll);
  
    // Retrieve a single User with id
    router.get("/:id", hoatChat.findOne);
    
    app.use('/api/hoatChat', router);
  };