const userModel = require('../models/users');
const bcrypt = require('bcrypt');

async function createdUser(userData) {
    const { userName, password, email, contact, address } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = new userModel({
        userName,
        password: hashedPassword,
        email,
        contact,
        address,
        role: "user"
    });
    const savedUser = await createdUser.save();
    return savedUser;
}

module.exports = { createdUser };

