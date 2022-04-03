module.exports = (sequelize, type) => {
    return sequelize.define('pet', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING
        
    })
}