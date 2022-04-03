const Sequelize = require('sequelize');

const OwnerModel = require('./models/Owner');

//DataBaseName - UserName - Password
const sequelize = new Sequelize('animals_db','root','1234',{
    host: "localhost",
    port: 3306,
    dialect: "mysql"
});


const Owner = OwnerModel(sequelize, Sequelize);


sequelize.sync({force: false})
.then(()=>{
    console.log('Tablas creadas')
})

module.exports = {
    Owner
}