
const express = require('express');
const app = express();
app.use(express.json());

// GET route to retrieve all tasks
app.get('/tasks', (req, res) => {
  const tasks = [];
  // Code to retrieve tasks from database goes here
  res.json(tasks);
});

// POST route to create a new task
app.post('/task', (req, res) => {
  const body = req.body;
  // Code to create a new task in the database goes here
  res.json({ message: 'Task created!' });
});

// PUT route to update a task
app.put('/task/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;
  // Code to update a task in the database goes here
  res.json({ message: 'Task updated!' });
});

// DELETE route to delete a task
app.delete('/task/:id', (req, res) => {
  const id = req.params.id;
  // Code to delete a task from the database goes here
  res.json({ message: 'Task deleted!' });
});

// Route to retrieve a specific task by ID
app.get('/task/:id', (req, res) => {
  const id = req.params.id;
  // Code to retrieve a specific task from the database goes here
  res.json(task);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});