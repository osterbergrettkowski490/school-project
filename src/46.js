// Initialize Express application
const express = require('express');
const app = express();

// Define routes and controllers
app.get('/', (req, res) => {
  // Example route: Fetch data from a MongoDB collection
  const { id } = req.query;
  if (id) {
    res.send(`Data for ${id} fetched successfully.`);
  } else {
    res.send('No data found');
  }
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
