const router = require('express').Router();

const apiPetsRouter = require('./api/pets');
const apiCertificate_AdoptionRouter = require('./api/certificate_adoptions');
const apiOwnersRouter = require('./api/owner');
const apiReportsRouter = require('./api/report');


router.use('/pets', apiPetsRouter);
router.use('/certificate_adoptions', apiCertificate_AdoptionRouter);
router.use('/owner',apiOwnersRouter);
router.use('/report',apiReportsRouter);


module.exports = router;
