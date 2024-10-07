const userModel = require('../models/users');
const bcrypt = require('bcrypt');

async function createdUser(userData) {
    const { name, userName, password, email, contact, address, pincode } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = new userModel({
        name,
        userName,
        password: hashedPassword,
        email,
        contact,
        address,
        pincode,
        role: "user"
    });
    const savedUser = await createdUser.save();
    return savedUser;
}

module.exports = { createdUser };

