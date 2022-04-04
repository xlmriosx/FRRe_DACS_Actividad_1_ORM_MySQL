module.exports = (sequelize, type) => {
    return sequelize.define('certificate_adoption', {
        id_adoption: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        pet: {
            type: type.INTEGER,
            primaryKey: true,
            unique: true,
        },
        date_adoption: {
            type: type.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),

        },

    })

}
