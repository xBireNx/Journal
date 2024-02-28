const express = require('express');
const router = express.Router();

module.exports = app => {
    const authController = require('../controllers/account-controller')
    router.post('/dashboard', authController.dashboard);

    app.use('/api', router);
}