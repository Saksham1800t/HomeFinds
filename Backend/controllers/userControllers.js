const userModel = require('../models/users');
const productModel = require('../models/products');
const bcryptUser = require('../services/bcryptSignUp');
const bcryptLogin = require('../services/bcryptLogIn');
const upload = require('../configs/multer');
const cloudinary = require("../configs/cloudinary");

module.exports.signup = async (req, res) => {
    upload.single('profileImage')(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ error: 'Error uploading image', details: err.message });
        }
        try {
            const profileImage = req.file ? req.file.path : null;
            if (!profileImage) {
                return res.status(400).json({ error: "Profile image is required" });
            }
            const userData = req.body;
            const user = await bcryptUser.createdUser(userData, profileImage);
            res.status(201).json({ user: user, message: "New User created Successfully" });
        } catch (err) {
            console.error("Error registering user:", err);
            res.status(400).json({ error: 'Failed to create user', details: err.message });
        }
    });
}

module.exports.login = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const token = await bcryptLogin.login(userName, password);
        if (!token) {
            return res.status(401).json({ error: "Invalid username or password" });
        }
        const user = await userModel.findOne({ userName: userName });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        const role = user.role;

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.cookie("role", role, {
            httpOnly: true,
            secure: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.status(200).json({ token: token, role: role });
    } catch (error) {
        res.status(401).json({ error: "Invalid username or password" });
    }
}

module.exports.refreshToken = async (req, res) => {
    try {
        const token = req.cookies.token || req.headers['authorization'].split(' ')[1];
        if (!token) {
            return res.status(400).json({ error: "No token provided" });
        }
        const newToken = await bcryptLogin.refreshToken(token);
        if (!newToken) {
            return res.status(401).json({ error: "Failed to refresh token" });
        }

        res.cookies('token', newToken, {
            httpOnly: true,
            secure: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        res.json({ token: newToken });
    } catch (error) {
        res.status(401).json({ error: "Invalid token" });
    }
}

module.exports.getUserData = async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json({ user: user });
    } catch (error) {
        res.status(401).json({ error: "Invalid token" });
    }
};

module.exports.updateUserData = async (req, res) => {
    upload.single('profileImage')(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ error: 'Error uploading image', details: err.message });
        }

        try {
            const userId = req.user.id;
            const userData = req.body;
            const user = await userModel.findById(userId);

            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }

            if (req.file) {
                if (user.userImageUrl) {
                    const urlSegments = user.userImageUrl.split('/');
                    const publicIdWithVersion = urlSegments.slice(-2).join('/').split('.')[0]; 

                    const deleteResult = await cloudinary.uploader.destroy(publicIdWithVersion);
                    if (deleteResult.result !== 'ok') {
                        console.log('Failed to delete image from Cloudinary:', deleteResult);
                    }
                }

                const uploadedImage = await cloudinary.uploader.upload(req.file.path, {
                    folder: 'homefindsUsers',
                    use_filename: true,
                    unique_filename: false,
                });

                userData.userImageUrl = uploadedImage.secure_url;
            }

            if (userData.password) {
                return res.status(400).json({ error: "Password cannot be updated here" });
            }

            const updatedUser = await userModel.findByIdAndUpdate(userId, userData, { new: true, runValidators: true });
            res.json({ user: updatedUser, message: "User updated successfully" });

        } catch (error) {
            console.error("Error updating user:", error);
            res.status(400).json({ error: "Failed to update user details", details: error.message });
        }
    });
}

module.exports.deleteUser = async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        if (user.userImageUrl) {
            const urlSegments = user.userImageUrl.split('/');
            const publicIdWithVersion = urlSegments.slice(-2).join('/').split('.')[0]; 

            const deleteResult = await cloudinary.uploader.destroy(publicIdWithVersion);
            if (deleteResult.result !== 'ok') {
                console.log('Failed to delete image from Cloudinary:', deleteResult);
            }
        }

        const userProducts = await productModel.find({ addedBy: userId });

        for (const product of userProducts) {
            if (product.imageUrl) {
                const urlSegments = product.imageUrl.split('/');
                const publicIdWithVersion = urlSegments.slice(-2).join('/').split('.')[0];

                const deleteResult = await cloudinary.uploader.destroy(publicIdWithVersion);
                if (deleteResult.result !== 'ok') {
                    console.log(`Failed to delete product image (${product._id}) from Cloudinary:`, deleteResult);
                }
            }
        }

        await productModel.deleteMany({ addedBy: userId });
        await userModel.findByIdAndDelete(userId);
        res.json({ message: "User and associated products deleted successfully" });
    }
    catch (error) {
        res.status(401).json({ error: "Failed to delete user associated products" });
    }
}

module.exports.getSingleUserData = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json({ user: user });
    } catch (error) {
        res.status(401).json({ error: "Invalid token" });
    }
};