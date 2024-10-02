const express = require('express');
const router = express.Router();
const cors = require('cors');
const userControllers = require('../controllers/userControllers');

router.use(cors());
router.post('/signup', userControllers.signup);
router.post('/login', userControllers.login);

module.exports = router;