const userModel = require('../models/users');
const bcrypt = require('bcrypt');
const cloudinary = require("../configs/cloudinary");
const fs = require('fs');

async function createdUser(userData, profileImage) {
    const { name, userName, password, email, contact, address, pincode } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);

    let cloudinaryRes = { secure_url: null };

    if (profileImage) {
        cloudinaryRes = await cloudinary.uploader.upload(profileImage, {
            folder: 'homefindsUsers',
            use_filename: true,
            unique_filename: false,
        });

        fs.unlink(profileImage, (err) => {
            if (err) {
                console.error("Failed to delete local image:", err);
            }
        });
    }

    const createdUser = new userModel({
        name,
        userName,
        password: hashedPassword,
        email,
        contact,
        address,
        pincode,
        role: "user",
        userImageUrl: cloudinaryRes.secure_url,
    });
    const savedUser = await createdUser.save();
    return savedUser;
}

module.exports = { createdUser };

