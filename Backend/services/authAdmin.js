const userModel = require('../models/users');
const bcrypt = require('bcrypt');
require('dotenv').config();

async function adminAccount() {
    try {
        const existingadmin = await userModel.findOne({ userName: "saksham1800t" });
        if (!existingadmin) {
            const hashedPassword = bcrypt.hash(process.env.ADMIN_PASSWORD, 10);
            const admin = new userModel({
                name: "Saksham Agarwal",
                userName: "saksham1800t",
                password: hashedPassword,
                email: "sakshamagarwal0507@gmail.com",
                contact: "+91-7088894066",
                address: "2318, Mohalla Rathiya, Bharatpur road, Achhnera, Agra",
                pincode: 283101,
                role: "admin"
            });
            const savedAdmin = await admin.save();
            console.log("Admin account created");
        }
    } catch (error) {
        log.error("Error login admin account", error);
    }
}

module.exports = { adminAccount };