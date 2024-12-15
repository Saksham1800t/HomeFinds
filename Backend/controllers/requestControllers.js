const productModel = require("../models/products");
const requestModel = require("../models/request");

module.exports.createRequest = async (req, res) => {
    try {
        const buyerId = req.user.id;
        const { productId } = req.body;

        const product = await productModel.findById(productId);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        if (buyerId.toString() === product.addedBy.toString()) {
            return res.status(400).json({ message: "Buyer and seller cannot be the same" });
        }

        const existingRequest = await requestModel.findOne({
            buyerId,
            productId
        });

        if (existingRequest) {
            return res.status(400).json({ message: "You have already made a request for this product" });
        }

        const newRequest = new requestModel({
            buyerId,
            sellerId: product.addedBy,
            productId
        });

        await newRequest.save();
        res.status(201).json({ message: "Request send successfully", request: newRequest });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.getMadeRequests = async (req, res) => {
    try {
        const userId = req.user.id;
        const requests = await requestModel.find({ buyerId: userId })
            .populate('buyerId', 'name email userImageUrl address contact')
            .populate('sellerId', 'name email userImageUrl address contact')
            .populate('productId', 'pName description price imageUrl type category');

        res.status(200).json({
            totalMadeRequests: requests.length,
            madeRequests: requests,
        });
    } catch (error) {
        console.error('Error fetching made requests:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports.getReceivedRequests = async (req, res) => {
    try {
        const userId = req.user.id;
        const requests = await requestModel.find({ sellerId: userId })
            .populate('buyerId', 'name email userImageUrl address contact')
            .populate('sellerId', 'name email userImageUrl address contact')
            .populate('productId', 'pName description price imageUrl type category');

        res.status(200).json({
            totalReceivedRequests: requests.length,
            receivedRequests: requests,
        });
    } catch (error) {
        console.error('Error fetching received requests:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports.updateRequest = async (req, res) => {
    try {
        const { requestId } = req.params;
        const { status } = req.body;
        const userId = req.user.id;

        const request = await requestModel.findById(requestId);
        if (!request) {
            return res.status(404).json({ message: 'Request not found' });
        }

        if (request.sellerId.toString() !== userId.toString()) {
            return res.status(403).json({ message: 'Unauthorized: Only the seller can update the request status' });
        }

        request.status = status;
        await request.save();

        res.status(200).json({ message: 'Request updated successfully', updatedRequest: request });
    } catch (error) {
        console.error('Error updating request:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports.deleteRequestByBuyer = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;

        const request = await requestModel.findById(id);
        if (!request) {
            return res.status(404).json({ message: 'Request not found' });
        }

        if (request.buyerId.toString() !== userId.toString()) {
            return res.status(403).json({ message: 'Unauthorized: Only the buyer can delete this request' });
        }

        await requestModel.findByIdAndDelete(id);

        res.status(200).json({ message: 'Request deleted successfully' });
    } catch (error) {
        console.error('Error deleting request:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

