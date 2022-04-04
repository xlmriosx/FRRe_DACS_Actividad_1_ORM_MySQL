const router = require('express').Router();

//Llamamos a la base de datos y referenciamos a la tabla.
const {Owner} = require('../../db');

router.get('/', async(req,res) =>  {
    const owners = await Owner.findAll();
    res.json(owners);
});

router.post('/', async(req,res) =>  {
    const owner = await Owner.create(req.body);
    res.json(
        {messagge: 'Se ha creado con exito',
         code : 200});
});

//donde ownerID es el id de la entidad a actualizar o eliminar
router.put('/:ownerID', async(req,res) =>  {
    await Owner.update(req.body, {
        //Este es el condicional, es decir donde id es igual al que se pasa
        //Por parametro
        where : {id_owner : req.params.ownerID}
    });
    res.json({success: 'Se ha modificado',
              code : 200});
});

router.delete('/:ownerID', async(req,res) =>  {
    await Owner.destroy({
        where : {id_owner : req.params.ownerID}
    });
    res.json({success: 'Se ha borrado el owner de id :' + req.params.ownerID,
              code : 200});
});

module.exports = router;