// Import necessary modules
const express = require('express');
const app = express();

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
