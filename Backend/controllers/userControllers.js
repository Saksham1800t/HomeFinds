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
        res.json({token: token});
    } catch (error) {
        res.status(401).json({ error: "Invalid username or password" });
    }
}