const Sequelize = require('sequelize');

const PetModel = require('./models/Pet');
const Certificate_AdoptionModel = require('./models/Certificate_Adoption');
const OwnerModel = require('./models/Owner');
const ReportModel = require('./models/Report');
const MedicalHistoricalModel = require('./models/Medical_Historical');

//DataBaseName - UserName - Password
const sequelize = new Sequelize('animals_db','root','1234',{
    host: "localhost",
    port: 3306,
    dialect: "mysql"
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
//Certificate_Adoption.hasOne(Pet,  {foreignKey: 'pet'})

module.exports = {
    Pet,
    Certificate_Adoption,
    Owner,
    Report,
    MedicalHistorical,
    
};
