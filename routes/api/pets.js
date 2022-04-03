const router = require('express').Router();

const {Pet} = require('../../db');

router.get('/', (req, res) => {
    res.send('Request GET ok!');

});

module.exports = router;