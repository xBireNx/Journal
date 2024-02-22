const express = require('express');
const app = express();
const mongoose = require('mongoose');
const CONFIG = require('./config')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Connect to MongoDB
mongoose.connect(CONFIG.MongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

app.get('/', (req, res) => {
    res.send('Successful response.');
});

require('./routes/auth-route')(app);

app.listen(3000, () => {
    console.log('Example app is listening on port 3000.');
});


module.exports = mongoose;