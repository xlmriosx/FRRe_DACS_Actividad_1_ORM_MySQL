const router = require('express').Router();

//Llamamos a la base de datos y referenciamos a la tabla.
const {Report} = require('../../db');

router.get('/', async(req,res) =>  {
    const reports = await Report.findAll();
    res.json(reports);
});

router.post('/', async(req,res) =>  {
    const reports = await Report.create(req.body);
    res.json(
        {messagge: 'Se ha creado con exito',
         code : 200});
});

router.put('/:reportID', async(req,res) =>  {
    await Report.update(req.body, {
        //Este es el condicional, es decir donde id es igual al que se pasa
        //Por parametro
        where : {id_report : req.params.reportID}
    });
    res.json({success: 'Se ha modificado',
              code : 200});
});

router.delete('/:reportID', async(req,res) =>  {
    await Report.destroy({
        where : {id_report : req.params.reportID}
    });
    res.json({success: 'Se ha borrado el reporte de id :' + req.params.reportID,
              code : 200});
});

module.exports = router;