var DataTypes = require('sequelize/lib/data-types');
module.exports = (sequelize, type) => {
    return sequelize.define('report', {
        id_report: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        info_report: {
            type: DataTypes.TEXT,
            allowNull: false
            },
        report_date: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW
        }
        
    })
}