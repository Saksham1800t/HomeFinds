const express = require('express');
const router = express.Router();
const cors = require('cors');
const userControllers = require('../controllers/userControllers');
const auth = require('../utils/authJwt');

router.use(cors());
router.post('/signup', userControllers.signup);
router.post('/login', userControllers.login);
router.post('/refreshToken', userControllers.refreshToken);
router.post('/getUserData', auth.verifyToken, userControllers.getUserData);
router.post('/updateUser', auth.verifyToken, userControllers.updateUserData);
router.post('/deleteUser', auth.verifyToken, userControllers.deleteUser);

module.exports = router;