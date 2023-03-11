const express = require('express')
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', authController.ownerRegister);
router.post('/login', authController.ownerLogin);

module.exports = router;