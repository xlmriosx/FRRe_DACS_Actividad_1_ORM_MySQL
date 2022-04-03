const router = require('express').Router();

const apiPetsRouter = require('./api/pets');

router.use('/pets', apiPetsRouter);


module.exports = router;