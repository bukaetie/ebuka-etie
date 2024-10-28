// contactController.js
const db = require('../config/db');

// Function to validate email format
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Function to handle contact form submissions
const submitContactForm = (req, res) => {
    const { name, email, subject, message } = req.body;

    // Basic required fields validation
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Additional validations
    if (name.length < 3) {
        return res.status(400).json({ error: 'Name must be at least 3 characters long' });
    }

    if (!isValidEmail(email)) {
        return res.status(400).json({ error: 'Please enter a valid email address' });
    }

    if (subject.length < 5) {
        return res.status(400).json({ error: 'Subject must be at least 5 characters long' });
    }

    if (message.length < 10) {
        return res.status(400).json({ error: 'Message must be at least 10 characters long' });
    }

    // Insert the contact form data into the database
    db.query(
        'INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)',
        [name, email, subject, message],
        (err, result) => {
            if (err) {
                console.error('Error saving contact form:', err);
                return res.status(500).json({ error: 'Database error' });
            }
            res.status(200).json({ message: 'Form submitted successfully' });
        }
    );
};

module.exports = { submitContactForm };
