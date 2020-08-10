module.exports = app => {
    const tuongTac = require("../controllers/tuongTac.controller.js");
  
    var router = require("express").Router();

    // Retrieve all drug
    router.get("/", tuongTac.findAll);
  
    // Retrieve a single User with id
    router.get("/:id", tuongTac.findOne);
    
    app.use('/api/tuongTac', router);
  };