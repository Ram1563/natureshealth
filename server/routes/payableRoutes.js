const express = require('express');
const router = express.Router();
const payableController = require('../controllers/payableController');

// Create a new payable
router.post('/create', payableController.create);

// Get all payables
router.get('/get', payableController.getAll);

// Add other routes as needed

module.exports = router;
