var DataTypes = require('sequelize/lib/data-types');
module.exports = (sequelize, type) => {
    return sequelize.define('medical_historical', {
        id_historical: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        }
    })
}