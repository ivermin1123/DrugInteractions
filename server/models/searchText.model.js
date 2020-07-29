module.exports = (sequelize, Sequelize) => {
    const SearchText = sequelize.define("search_text", {
      idSearch: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      searchId: {
        type: Sequelize.INTEGER
      },
      searchKey: {
        type: Sequelize.TEXT
      },
      searchAt: {
        type: Sequelize.DATE
      }
    }, {timestamps: false, tableName: 'search_text'});
    return SearchText;
  };