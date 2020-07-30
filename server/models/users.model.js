module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      username: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.TEXT
      },
      password: {
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
      role: {
        type: Sequelize.STRING
      },
      deleted: {
        type: Sequelize.ENUM('true', 'false'),
      }
    }, {timestamps: false, tableName: 'users'});
    return User;
  };