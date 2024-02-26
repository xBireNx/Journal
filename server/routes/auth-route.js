const express = require('express');
const router = express.Router();

module.exports = app => {
    const authController = require('../controllers/auth-controller')
    router.post('/signup', authController.signup);
    router.post('/login', authController.login)

    app.use('/api', router);
}