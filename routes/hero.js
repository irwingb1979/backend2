// routes/hero.js
const express = require('express');
const router = express.Router();
const heroController = require('../controllers/heroController'); // <-- IMPORTANT: Ensure this line is present and correct

router.get('/', heroController.getHero); // <-- This is line 6. 'heroController.getHero' MUST be a function.
router.post('/', heroController.createOrUpdateHero); // Assuming you have a post for creation/update

module.exports = router;