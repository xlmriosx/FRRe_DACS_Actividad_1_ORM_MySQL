module.exports = (sequelize, type) => {
    return sequelize.define('medical_historical', {
        id_historical: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    })
}