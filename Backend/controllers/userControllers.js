const userModel = require('../models/users');
const bcryptUser = require('../services/bcryptSignUp');
const bcryptLogin = require('../services/bcryptLogIn');

module.exports.signup = async (req, res) => {
    try {
        const userData = req.body;
        const user = await bcryptUser.createdUser(userData);
        res.status(201).json({ user: user, message: "New User created Successfully" });
    } catch (err) {
        console.error("Error registering user:", err);
        res.status(400).json({ error: 'Failed to create user', details: err.message });
    }
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
        res.json({ token: token, role: role });
    } catch (error) {
        res.status(401).json({ error: "Invalid username or password" });
    }
}

module.exports.refreshToken = async (req, res) => {
    try {
        const { token } = req.body;
        if (!token) {
            return res.status(400).json({ error: "No token provided" }); // Better message for missing token
        }
        const newToken = await bcryptLogin.refreshToken(token);
        if (!newToken) {
            return res.status(401).json({ error: "Failed to refresh token" }); // Clearer error message
        }
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
    try {
        const userId = req.user.id;
        const userData = req.body;
        if (userData.password) {
            return res.status(400).json({ error: "Password cannot be updated here" });
        }
        const user = await userModel.findByIdAndUpdate
            (userId, userData, { new: true, runValidators: true });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json({ user: user, message: "User updated successfully" });
    }
    catch (error) {
        res.status(401).json({ error: "Failed to update user datails" });
    }
}