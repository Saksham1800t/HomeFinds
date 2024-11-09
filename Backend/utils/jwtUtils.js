const jwt = require('jsonwebtoken');
const  secretKey  = require('../configs/jwt');

function generateToken(user) {
    const payload = {
        id: user._id,
        userName: user.userName,
        role: user.role,
    }
    return jwt.sign(payload, secretKey, { expiresIn: '7d' });
}

module.exports = { generateToken };