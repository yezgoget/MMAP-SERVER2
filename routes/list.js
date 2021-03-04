const express = require('express');
const router = express.Router();
const listController = require('../controllers/listController');
const middleware = require('../modules/middlewares');

router.get('/:userIdx', listController.getRecords);

module.exports = router; 