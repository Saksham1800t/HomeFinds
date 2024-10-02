const userModel = require('../models/users');
const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/jwtUtils');

async function login(userName, password) {
    try {
        const existingUser = await userModel.findOne({ userName })
        if (!existingUser) {
            return { error: 'User not found' };
        }
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) {
            return { error: 'Invalid password' };
        }
        const token = generateToken(existingUser);
        return token;
    }
    catch (error) {
        console.log("login error", error.message);
        return { error: 'Failed to login user', details: error.message };
    }
}

module.exports = { login };