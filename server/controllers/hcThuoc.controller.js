const db = require("../models");
const HcThuoc = db.hcThuoc;
const Op = db.Sequelize.Op;


// Retrieve all HcThuoc from the database.
exports.findAll = (req, res) => {
  const id = req.query.idThuoc;
  var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;

  HcThuoc.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving HcThuoc."
      });
    });
};

// Find a single HcThuoc with an id
exports.findOne = (req, res) => {
  const id = req.params.idThuoc;

  HcThuoc.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving HcThuoc with id=" + id
      });
    });
};
