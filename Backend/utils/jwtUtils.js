const jwt = require('jsonwebtoken');
const  secretKey  = require('../configs/jwt');
require('dotenv').config();

function generateToken(user) {
    const payload = {
        id: user._id,
        userName: user.userName,
        role: user.role,
    }
    return jwt.sign(payload, secretKey, { expiresIn: process.env.EXPIRES_IN });
}

module.exports = { generateToken };