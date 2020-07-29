module.exports = (sequelize, Sequelize) => {
    const HoatChat = sequelize.define("hoatchat", {
        idHoatchat: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        tenHoatChat: {
            type: Sequelize.TEXT
        },
        hinhAnhHC: {
            type: Sequelize.TEXT,
            allowNull: true
        }
    }, { timestamps: false, tableName: 'hoatchat' });
    return HoatChat;
};