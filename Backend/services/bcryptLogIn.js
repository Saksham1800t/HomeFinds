const userModel = require('../models/users');
const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/jwtUtils');
const verifyToken2 = require('../utils/authJwt');

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

async function refreshToken(oldToken) {
    try {
        const decodedToken = verifyToken2.verifyToken2(oldToken);
        console.log("Decoded token", decodedToken);
        const user = await userModel.findById(decodedToken.id);
        if (!user) {
            throw new Error("User not found");
        }
        const newToken = generateToken(user);
        console.log("New token generated", newToken);
        
        return newToken;
    } catch (error) {
        console.log("refreshToken error", error.message);
        return null;
    }
}

module.exports = { login, refreshToken };