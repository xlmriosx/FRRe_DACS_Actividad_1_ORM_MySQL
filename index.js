const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api');

const app = express(); 

require('./db');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



//Estas son las rutas. req es el valor de la peticion , res el valor de la respuesta
app.use('/api',apiRouter);

app.listen(3000, ()=>{
    console.log('Servidor arrancando!');
});