module.exports = (sequelize, type) => {
    return sequelize.define('pet', {
        id_pet: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        birthday: {
            type: type.DATE,
            allowNull: false,
        },
        type: {
            type: type.STRING,
            allowNull: false,

        },
        breed: {
            type: type.STRING,
            allowNull: false,

        },
        dni: type.INTEGER,
        join_date: {
            type: type.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),

        }

    })
}
