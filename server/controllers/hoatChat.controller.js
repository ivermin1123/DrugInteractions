const db = require("../models");
const HoatChat = db.hoatChat;
const Op = db.Sequelize.Op;


// Retrieve all HoatChat from the database.
exports.findAll = (req, res) => {
  const id = req.query.idHoatChat;
  var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;

  HoatChat.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving HoatChat."
      });
    });
};

// Find a single HoatChat with an id
exports.findOne = (req, res) => {
  const id = req.params.idHoatChat;

  HoatChat.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving HoatChat with id=" + id
      });
    });
};
