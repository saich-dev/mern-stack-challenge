const express = require('express');
const router = express.Router();
const { getAllTransactions } = require('../controllers/transactionsController');

router.get('/', getAllTransactions);

module.exports = router;
