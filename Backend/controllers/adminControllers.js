const userModel = require('../models/users');
const productModel = require('../models/products');

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

module.exports.fetchCounts = async (req, res) => {
    try {
        const buyCount = await productModel.countDocuments({ type: "sell" });
        const rentCount = await productModel.countDocuments({ type: "rent" });
        const donateCount = await productModel.countDocuments({ type: "donate" });
        const usersCount = await userModel.countDocuments({ role: "user" });

        return res.status(200).json({
            message: "counts fetched successfully",
            buyCount,
            rentCount,
            donateCount,
            usersCount,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error", error });
    }
};