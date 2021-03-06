var express = require('express');
var router = express.Router();

router.use('/user', require('./user'));
router.use('/map', require('./map'));
router.use('/record', require('./record'));
router.use('/list', require('./list'));
router.use('/setting', require('./setting'));

module.exports = router;
