let express = require('express');
let app = express();
app.use(express.json());

// Sample data
let users = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 }
];

// Index route to display all users
app.get('/users', (req, res) => {
    res.json(users);
});

// Create a new user
app.post('/users', (req, res) => {
    let user = { id: users.length + 1, name: req.body.name, age: parseInt(req.body.age) };
    users.push(user);
    res.status(201).json(user);
});

// Example route to update a user's details
app.put('/users/:id', (req, res) => {
    let index = users.findIndex((user) => user.id === parseInt(req.params.id));
    if (index > -1) {
        users[index] = { ...users[index], name: req.body.name, age: parseInt(req.body.age) };
        res.status(200).json(users[index]);
    } else {
        res.status(404).send('User not found');
    }
});

// Example route to delete a user
app.delete('/users/:id', (req, res) => {
    let index = users.findIndex((user) => user.id === parseInt(req.params.id));
    if (index > -1) {
        users.splice(index, 1);
        res.status(204).send('User deleted');
    } else {
        res.status(404).send('User not found');
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
