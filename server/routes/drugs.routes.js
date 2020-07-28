module.exports = app => {
    const drug = require("../controllers/drug.controller.js");
  
    var router = require("express").Router();

    // Create a new User
    router.post("/", drug.create);
  
    // Retrieve all drug
    router.get("/", drug.findAll);
  
    // Retrieve a single User with id
    router.get("/:id", drug.findOne);
  
    // Update a User with id
    router.put("/:id", drug.update);
  
    // Delete a User with id
    router.delete("/:id", drug.delete);
  
    // Create a new User
    router.delete("/", drug.deleteAll);

    app.use('/api/drug', router);
  };