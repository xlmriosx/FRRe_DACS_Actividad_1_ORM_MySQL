module.exports = (sequelize, type) => {
    return sequelize.define('report', {
        id_historical: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    })
}