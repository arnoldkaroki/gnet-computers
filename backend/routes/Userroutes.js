const express = require('express');
const router = express.Router();
const UserController = require('../controllers/usercontroller'); 

router.post('/register', UserController.register);

router.post('/login', UserController.login);

router.get('/profile', UserController.getProfile);

router.put('/profile', UserController.updateProfile);

router.delete('/profile', UserController.deleteAccount);

module.exports = router;