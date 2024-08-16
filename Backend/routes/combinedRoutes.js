const express = require('express');
const router = express.Router();
const { getCombinedData } = require('../controllers/combinedController');

router.get('/', getCombinedData);

module.exports = router;
