const express = require('express');
const cors = require('cors');
const router = express.Router();
const adminControllers = require('../controllers/adminControllers');
const auth = require('../utils/authJwt');

router.use(cors());

router.post('/fetch-users', auth.verifyToken, adminControllers.getUsers); 

module.exports = router;