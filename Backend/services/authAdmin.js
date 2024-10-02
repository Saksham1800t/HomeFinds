const userModel = require('../models/users');
const bcrypt = require('bcrypt');

async function adminAccount() {
    try {
        const existingadmin = await userModel.findOne({ userName: "saksham1800t" });
        if (!existingadmin) {
            const hashedPassword = await bcrypt.hash("1234", 10);
            const admin = new userModel({
                userName: "saksham1800t",
                password: hashedPassword,
                email: "sakshamagarwal0507@gmail.com",
                contact: "7088894066",
                address: "2318, Mohalla Rathiya, Bharatpur road, Achhnera, Agra",
                role: "admin"
            });
            const savedAdmin = await admin.save();
            console.log("Admin account created", savedAdmin);
        }
    } catch (error) {
        log.error("Error login admin account", error);
    }
}

module.exports = { adminAccount };