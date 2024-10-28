// All API routes
const express = require('express');
const { submitContactForm } = require('../controllers/contactController');

const router = express.Router();

// Contact form submission endpoint
router.post('/contact', submitContactForm);

module.exports = router;
