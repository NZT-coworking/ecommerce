const router = require('express').Router();
const userController = require('../controllers/userController');

router.get('/api', userController.index);

module.exports = router;