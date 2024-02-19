const express = require('express');
const app = express();
const mongoose = require('mongoose');

// MongoDB connection URL
const mongoURI = 'mongodb+srv://Biren:123%40Biren@cluster0.ckxmi.mongodb.net';

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

app.get('/', (req, res) => {
    res.send('Successful response.');
});

app.listen(3000, () => {
    console.log('Example app is listening on port 3000.');
});


module.exports = mongoose;