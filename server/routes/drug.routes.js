module.exports = app => {
    const drug = require("../controllers/drug.controller.js");
  
    var router = require("express").Router();

    // Retrieve all drug
    router.get("/", drug.findAll);
  
    // Retrieve a single User with id
    router.get("/:id", drug.findOne);
    
    app.use('/api/drug', router);
  };