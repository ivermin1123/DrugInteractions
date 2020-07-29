const db = require("../models");
const TuongTac = db.tuongTac;
const Op = db.Sequelize.Op;

//Get all from db: tuongTac
exports.findAll = (req, res) => {
  const id = req.query.idTuongTac;
  var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;

  TuongTac.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving TuongTac."
      });
    });
};

// Find a single TuongTac with an id
exports.findOne = (req, res) => {
  const id = req.params.idTuongTac;

  TuongTac.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving TuongTac with id=" + id
      });
    });
};
