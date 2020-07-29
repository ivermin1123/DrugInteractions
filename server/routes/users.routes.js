module.exports = app => {
  const authJwt = require("../middlewares/authJwt");
  const controller = require("../controllers/users.controller");

  var router = require("express").Router();
  

  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );

  // Retrieve all users
  router.get("/", controller.findAll);

  // Retrieve a single User with id
  router.get("/:id", controller.findOne);

  // Update a User with id
  router.put("/:id", controller.update);

  // Delete a User with id
  router.delete("/:id", controller.delete);

  // Create a new User
  router.delete("/", controller.deleteAll);

  app.use('/api/users', router);
};