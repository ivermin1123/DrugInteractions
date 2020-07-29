const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./users.model.js")(sequelize, Sequelize);
db.drug = require("./drug.model.js")(sequelize, Sequelize);
db.hcThuoc = require("./hcThuoc.model.js")(sequelize, Sequelize);
db.hoatChat = require("./hoatChat.model.js")(sequelize, Sequelize);
db.searchText = require("./searchText.model.js")(sequelize, Sequelize);
db.tuongTac = require("./tuongTac.model.js")(sequelize, Sequelize);
db.role = require("./role.model.js")(sequelize, Sequelize);

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;