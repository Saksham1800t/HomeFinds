const productModel = require('../models/products');
const userModel = require('../models/users');

module.exports.createProduct = async (req, res) => {
    try {
        const userId = req.user.id;

        const { pName, description, category, price, type } = req.body;
        const product = new productModel({
            pName,
            description,
            category,
            price,
            type,
            addedBy: userId
        });
        const savedProduct = await product.save();
        await userModel.findByIdAndUpdate(userId, { $push: { productsCreated: savedProduct._id } });
        res.status(201).json({ product: savedProduct, message: "New Product created Successfully" });
    } catch (error) {
        res.status(400).json({ error: "Failed to create product", details: error.message });
    }
}

module.exports.getAllProducts = async (req, res) => {
    try {
        const products = await productModel.find().populate('addedBy', 'userName email contact address pincode');
        res.json({ products: products });
    } catch (error) {
        res.status(400).json({ error: "Failed to get products", details: error.message });
    }
}

module.exports.getUserProducts = async (req, res) => {
    try {
        const product = await productModel.find({ addedBy: req.user.id });
        res.status(200).json({ product: product });
    } catch (error) {
        res.status(400).json({ error: "Failed to get products", details: error.message });
    }
};

module.exports.getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await productModel.findById(id).populate('addedBy', 'userName email contact address pincode');
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.json({ product: product });
    } catch (error) {
        res.status(400).json({ error: "Failed to get product", details: error.message }); 
    }
};   

module.exports.updateProductData = async (req, res) => {
    try {
        const productId = req.params.id;
        const productData = req.body;
        
        const product = await productModel.findByIdAndUpdate
            (productId, productData, { new: true, runValidators: true });
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.json({ product: product, message: "Product updated successfully" });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to update product datails" });
    }
}

module.exports.deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await productModel.findByIdAndDelete(productId);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete product" });
    }
}