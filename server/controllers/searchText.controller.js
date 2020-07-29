const db = require("../models");
const SearchText = db.searchText;
const Op = db.Sequelize.Op;

//Get all from db: search_text
exports.findAll = (req, res) => {
  const id = req.query.idSearch;
  var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;

  SearchText.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving SearchText."
      });
    });
};

// Find a single SearchText with an id
exports.findOne = (req, res) => {
  const id = req.params.idSearch;

  SearchText.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving SearchText with id=" + id
      });
    });
};
