const router = require('express').Router();

const {Certificate_Adoption} = require('../../db');

router.get('/', async (req, res) => { 
    const certificate_adoptions = await Certificate_Adoption.findAll();
    res.json(certificate_adoptions);

});

router.post('/', async (req, res) => {
    const certificate_adoption = await Certificate_Adoption.create(req.body);
    res.json(certificate_adoption);
});

router.put('/:adoptionID', async (req, res) => {
    await Certificate_Adoption.update(req.body, {
        where: { id_adoption: req.params.adoptionID }
    });
    res.json({ succes: 'Modified aplicated.'})
});

router.delete('/:adoptionID', async (req, res) => {
    await Certificate_Adoption.destroy({
        where: { id_adoption: req.params.adoptionID}
    });
    res.json({ succes: 'Certificated adoption eliminated.' })
});

module.exports = router;