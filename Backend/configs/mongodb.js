const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/homefinds')
        console.log('MongoDB connected');
        
    } catch (error) {
        console.log("Connection error", error);
        
    }
}

module.exports = connectDB;