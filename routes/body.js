const express = require('express');
const router = express.Router();
const bodyController = require('../controllers/bodyController'); // Ensure this path is correct

// @route   GET api/body
// @desc    Get Body Section
// @access  Public
router.get('/', bodyController.getBody);

// @route   POST api/body
// @desc    Create or Update Body Section
// @access  Public
router.post('/', bodyController.createOrUpdateBody);

module.exports = router;
// Ensure this file is saved as 'routes/body.js' and is correctly linked in your main server file (e.g., app.js or server.js).