const router = require('express').Router();

//Llamamos a la base de datos y referenciamos a la tabla.
const {MedicalHistorical} = require('../../db');

//TODO CUANDO TENGAMOS LAS RELACIONES, ESTO DEBE DEVOLVER EL HISTORIAL Y SUS REPORTES
router.get('/', async(req,res) =>  {
    const historial = await MedicalHistorical.findAll();
    res.json(historial);
});

module.exports = router;