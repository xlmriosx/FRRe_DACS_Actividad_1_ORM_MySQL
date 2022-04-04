const Sequelize = require('sequelize');

const PetModel = require('./models/Pet');
const Certificate_AdoptionModel = require('./models/Certificate_Adoption');


const sequelize = new Sequelize('test', 'xlmriosx', 'root123!', {
    host: 'localhost',
    dialect: 'mysql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

const Pet = PetModel(sequelize, Sequelize);
const Certificate_Adoption = Certificate_AdoptionModel(sequelize, Sequelize);

sequelize.sync({ force: false })
.then(() => {
    console.log('Syncronized tables')
});

Pet.hasOne(Certificate_Adoption,  {foreignKey: 'pet'});
//Certificate_Adoption.hasOne(Pet,  {foreignKey: 'pet'})



module.exports = {
    Pet,
    Certificate_Adoption,
    
};