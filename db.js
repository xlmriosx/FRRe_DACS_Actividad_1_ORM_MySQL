const Sequelize = require('sequelize');

const PetModel = require('./models/Pet');
const Certificate_AdoptionModel = require('./models/Certificate_Adoption');
const OwnerModel = require('./models/Owner');
const ReportModel = require('./models/Report');
const MedicalHistoricalModel = require('./models/Medical_Historical');

const sequelize = new Sequelize('test', 'xlmriosx', 'root123!', {
    host: 'localhost',
    dialect: 'mysql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

const Pet = PetModel(sequelize, Sequelize);
const Certificate_Adoption = Certificate_AdoptionModel(sequelize, Sequelize);
const Owner = OwnerModel(sequelize, Sequelize);
const Report = ReportModel(sequelize, Sequelize);
const MedicalHistorical = MedicalHistoricalModel(sequelize, Sequelize);


sequelize.sync({ force: false })
.then(() => {
    console.log('Syncronized tables')
});

Pet.hasOne(Certificate_Adoption,  {foreignKey: 'pet'});
// Report.hasMany(MedicalHistorical, {foreignKey: 'id_historical'});
// Owner.hasOne(Pet, { foreignKey: 'owner'});
// Owner.hasOne(Certificate_Adoption, {foreignKey: 'owner'});
//Certificate_Adoption.hasOne(Pet,  {foreignKey: 'pet'})

module.exports = {
    Pet,
    Certificate_Adoption,
    Owner,
    Report,
    MedicalHistorical,
    
};