module.exports = (sequelize, Sequelize) => {
    const Drug = sequelize.define("thuoc", {
      idThuoc: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      tenThuoc: {
        type: Sequelize.TEXT
      },
      phanLoai: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      nongDo: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      dangBaoChe: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      qcDongGoi: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      HSD: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      hinhAnhThuoc: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: true
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
        allowNull: true
      }
    }, {timestamps: false, tableName: 'users'});
    return Drug;
  };