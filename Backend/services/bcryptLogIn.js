const userModel = require('../models/users');
const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/jwtUtils');

async function login(userName, password) {
    try {
        const existingUser = await userModel.findOne({ userName })
        if (!existingUser) {
            console.log('User not found');
            return null;
        }
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) {
            console.log('Invalid password');
            return null;
        }
        const token = generateToken(existingUser);
        return token;
    }
    catch (error) {
        console.log("login error", error.message);
        return null
    }
}

module.exports = { login };