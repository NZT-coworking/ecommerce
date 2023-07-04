const express = require('express')
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', authController.ownerRegister);
router.post('/login', authController.ownerLogin);
router.get('/users', authController.getUsers);
router.delete('/user', authController.deleteUser);
router.get('/user', authController.findUser);
router.put('/user', authController.updateUser);

module.exports = router;