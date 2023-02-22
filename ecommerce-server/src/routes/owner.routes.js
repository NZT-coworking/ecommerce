const express = require('express')
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/auth', authController.ownerRegister);

module.exports = router;