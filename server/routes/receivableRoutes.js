const express = require('express');
const router = express.Router();
const receivableController = require('../controllers/receivableController');

// Create a new receivable
router.post('/create', receivableController.create);

// Get all receivables
router.get('/get', receivableController.getAll);

// Add other routes as needed

module.exports = router;
