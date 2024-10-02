const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    userName:{
        type:String,
    },
    password:{
        type:String,
    },
    email:{
        type:String,
    },
    contact:{
        type:String,
    }
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;