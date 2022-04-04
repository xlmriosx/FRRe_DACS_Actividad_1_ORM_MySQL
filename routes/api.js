const router = require('express').Router();

const apiPetsRouter = require('./api/pets');
const apiCertificate_AdoptionRouter = require('./api/certificate_adoptions');
const apiOwnersRouter = require('./api/owner');


router.use('/pets', apiPetsRouter);
router.use('/certificate_adoptions', apiCertificate_AdoptionRouter);
router.use('/owner',apiOwnersRouter);


module.exports = router;
