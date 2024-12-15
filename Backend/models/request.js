const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    buyerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending'
    },
    created_at: {
        type: String,
    },
    updated_at: {
        type: String, 
    },
});

requestSchema.pre('save', function (next) {
    const now = new Date();
    const formattedDate = now.toLocaleString('en-US', {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true
    });

    this.created_at = formattedDate;
    this.updated_at = formattedDate;

    next();
});

requestSchema.pre('findOneAndUpdate', function (next) {
    const now = new Date();
    const formattedDate = now.toLocaleString('en-US', {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true
    });

    this.set({ updated_at: formattedDate });

    next();
});

const requestmodel = mongoose.model('request', requestSchema);
module.exports = requestmodel;
