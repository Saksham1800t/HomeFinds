const mongoose = require('mongoose');
const userSchema = require('./users')

const productSchema = new mongoose.Schema({
    pName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    addedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    created_at: {
        type: String,
    },
    updated_at: {
        type: String,
    },
});

productSchema.pre('save', function (next) {
    const now = new Date();
    this.created_at = now.toLocaleString();
    this.updated_at = now.toLocaleString();
    next();
});

productSchema.pre('findOneAndUpdate', function (next) {
    this.set({ updated_at: new Date().toLocaleString() });
    next();
});

productSchema.post('findOneAndDelete', async function (deletedProduct) {
    if (deletedProduct) {
        await mongoose.model('users').updateOne(
            { _id: deletedProduct.addedBy },
            { $pull: { productsCreated: deletedProduct._id } }
        );
    }
});

const productModel = mongoose.model("products", productSchema);
module.exports = productModel;
