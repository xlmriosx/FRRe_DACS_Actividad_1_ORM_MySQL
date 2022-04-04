const router = require('express').Router();
const apiOwnersRouter = require('./api/owner');

//Todos los endpoints con /owner se mandan a apiOwnersRouter
router.use('/owner',apiOwnersRouter);
module.exports = router;

