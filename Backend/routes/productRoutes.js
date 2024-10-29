const express = require('express');
const cors = require('cors');
const router = express.Router();
const productControllers = require('../controllers/productControllers');
const auth = require('../utils/authJwt');

router.use(cors());

router.post('/add-product', auth.verifyToken, productControllers.createProduct);
router.post('/get-products', auth.verifyToken, productControllers.getAllProducts);
router.post('/get-user-products', auth.verifyToken, productControllers.getUserProducts);
router.post('/get-all-products', auth.verifyToken, productControllers.getAllProducts);
router.post('/getproduct/:id', productControllers.getProductById);
router.post('/update-product/:id', productControllers.updateProductData);
router.post('/delete-product/:id', auth.verifyToken, productControllers.deleteProduct);

module.exports = router;