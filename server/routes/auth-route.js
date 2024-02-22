const express = require('express');
const router = express.Router();

module.exports = app => {
    const authController = require('../controllers/auth-controller')
    router.post('/signup', authController.signup);

    app.use('/api', router);
}