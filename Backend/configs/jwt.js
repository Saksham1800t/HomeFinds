// const crypto = require('crypto');

// const secretKey = crypto.randomBytes(64).toString('hex');

require('dotenv').config();
const secretKey = process.env.JWT_SECRET;
module.exports = secretKey; 
