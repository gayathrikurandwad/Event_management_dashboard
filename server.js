// Import necessary modules
const express = require('express');
const app = require('./app'); // Import app.js where Express is initialized
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Define server port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
