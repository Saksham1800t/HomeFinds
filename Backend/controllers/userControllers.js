const userModel = require('../models/users');

module.exports.signup = async (req, res) => {
    try {
        const newUser = await userModel.create(req.body);
        console.log("User registered to database:", newUser); 
        res.status(201).json(newUser); 
    } catch (err) {
        console.error("Error registering user:", err); 
        res.status(400).json({ error: 'Failed to create user', details: err.message }); 
    }
}