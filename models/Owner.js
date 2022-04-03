var DataTypes = require('sequelize/lib/data-types');
module.exports = (sequelize, type) => {
    return sequelize.define('owner',{
        id_owner:{
            type : type.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        first_name : type.STRING,
        last_name : type.STRING,
        email :{
            type : type.INTEGER,
            allowNull: false,
            unique: true
        },
        address : type.STRING,
        tel : type.INTEGER,
        dni :{
            type : type.INTEGER(8),
            allowNull: false,
            unique: true
        },
        birthday : DataTypes.DATE,
        join_date :{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    })
}