module.exports = (sequelize, type) => {
    return sequelize.define('report', {
        id_report: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_historical: type.INTEGER,
        info_report: type.STRING,

        report_date: type.DATE
        
    })
}