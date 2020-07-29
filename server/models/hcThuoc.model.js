module.exports = (sequelize, Sequelize) => {
    const HcThuoc = sequelize.define("hc_thuoc", {
      idThuoc: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      idHoatchat: {
        type: Sequelize.STRING,
        primaryKey: true
      }
    }, {timestamps: false, tableName: 'hc_thuoc'});
    return HcThuoc;
  };