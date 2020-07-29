module.exports = (sequelize, Sequelize) => {
    const TuongTac = sequelize.define("tuongTac", {
      idTuongTac: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      idHc: {
        type: Sequelize.STRING
      },
      idHcTuongTac: {
        type: Sequelize.STRING
      },
      mucDo: {
        type: Sequelize.TEXT
      },
      noiDung: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true
      },
      updatedId: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true
      },
      deletedId: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      deleted: {
        type: Sequelize.ENUM('true', 'false'),
      }
    }, {timestamps: false, tableName: 'tuongTac'});
    return TuongTac;
  };