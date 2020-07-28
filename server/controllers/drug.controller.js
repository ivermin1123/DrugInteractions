const db = require("../models");
const Drug = db.drug;
const Op = db.Sequelize.Op;

//Get all from db: table-drug
exports.findAll = (req, res) => {
  const id = req.query.idThuoc;
  var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;

  User.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Drugs."
      });
    });
};

// Find a single Drug with an id
exports.findOne = (req, res) => {
  const id = req.params.idThuoc;

  Drug.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Drug with id=" + id
      });
    });
};
