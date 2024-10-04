const userModel = require('../models/users');

module.exports.getUsers = async (req, res) => {
    try {
        if (req.user.role !== "admin") {
            return res.status(403).json({ message: "Unauthorized" });
        } else {
            const users = await userModel.find();
            res.status(200).json(users);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}