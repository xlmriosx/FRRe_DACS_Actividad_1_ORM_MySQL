const Sequelize = require('sequelize');

const PetModel = require('./models/Pet');
const ReportModel = require('./models/Report');
const MedicalHistoricalModel = require('./models/Medical_Historical');

const sequelize = new Sequelize('nodejstest', 'Admin', 'Admin', {
    host: 'localhost',
    dialect: 'mysql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

const Pet = PetModel(sequelize, Sequelize);
const Report = ReportModel(sequelize, Sequelize);
const MedicalHistorical = MedicalHistoricalModel(sequelize, Sequelize);

sequelize.sync({ force: false })
.then(() => {
    console.log('Syncronized tables')
})

module.exports = {
    Pet,
    Report,
    MedicalHistorical
}