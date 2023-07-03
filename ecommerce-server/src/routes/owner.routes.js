const express = require('express')
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', authController.ownerRegister);
router.post('/login', authController.ownerLogin);
router.get('/users', authController.getUsers);
router.delete('/user', authController.deleteUser);

module.exports = router;