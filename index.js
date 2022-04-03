const express = require('express');
const bodyParser = require('body-parser');


const app = express(); 

require('./db');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



//Estas son las rutas. req es el valor de la peticion , res el valor de la respuesta
app.get('/',(req, res)=>{
    res.send('Hola mundo');
});

app.listen(3000, ()=>{
    console.log('Servidor arrancando!');
});