var DataTypes = require('sequelize/lib/data-types');
module.exports = (sequelize, type) => {
    return sequelize.define('owner',{
        id_owner:{
            type : DataTypes.BIGINT,
            primaryKey : true,
            autoIncrement : true
        },
        first_name : type.STRING,
        last_name : type.STRING,
        email :{
            type : type.STRING,
            allowNull: false,
            unique: true
        },
        address : type.STRING,
        tel : type.INTEGER,
        dni :{
            type : DataTypes.BIGINT(8),
            allowNull: false,
            unique: true
        },
        birthday : DataTypes.DATEONLY,
        join_date :{
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW
        }
    })
}