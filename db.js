const Sequelize = require('sequelize');

const PetModel = require('./models/Pet');

const sequelize = new Sequelize('test', 'xlmriosx', 'root123!', {
    host: 'localhost',
    dialect: 'mysql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

const Pet = PetModel(sequelize, Sequelize);

sequelize.sync({ force: false })
.then(() => {
    console.log('Syncronized tables')
})

module.exports = {
    Pet
}