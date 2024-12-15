const express = require('express');
const cors = require('cors');
const router = express.Router();
const requestControllers = require('../controllers/requestControllers');
const auth = require('../utils/authJwt');

router.use(cors());

router.post("/create_req", auth.verifyToken, requestControllers.createRequest);
router.post("/maked_req", auth.verifyToken, requestControllers.getMadeRequests);
router.post("/received_req", auth.verifyToken, requestControllers.getReceivedRequests);
router.put("/update_req/:requestId", auth.verifyToken, requestControllers.updateRequest);
router.delete("/delete_req/:id", auth.verifyToken, requestControllers.deleteRequestByBuyer);


module.exports = router;