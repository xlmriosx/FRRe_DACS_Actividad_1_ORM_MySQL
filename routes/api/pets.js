const router = require('express').Router();

const {Pet} = require('../../db');

router.get('/', async (req, res) => { 
    const pets = await Pet.findAll();
    res.json(pets);

});

router.post('/', async (req, res) => {
    const pet = await Pet.create(req.body);
    res.json(pet);
});

router.put('/:petID', async (req, res) => {
    await Pet.update(req.body, {
        where: { id_pet: req.params.petID }
    });
    res.json({ succes: 'Modified aplicated.'})
});

router.delete('/:petID', async (req, res) => {
    await Pet.destroy({
        where: { id_pet: req.params.petID}
    });
    res.json({ succes: 'Pet eliminated.' })
});

module.exports = router;