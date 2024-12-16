const express = require('express');
const cors = require('cors');
const mongodbConnection = require('./configs/mongodb');
const bodyParser = require('body-parser');
const admin = require('./services/authAdmin');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

admin.adminAccount();
mongodbConnection();

app.get('/', async (req, res) => {
    res.send("hello backend programmer saksham agarwal");
});

const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const productRoutes = require('./routes/productRoutes');
const requestRoutes = require('./routes/RequestRoutes');
app.use('/users', userRoutes);
app.use('/admin', adminRoutes);
app.use('/products', productRoutes);
app.use('/request', requestRoutes);

const port = process.env.PORT;
app.listen(port, () => {
    console.log("Server is running");
});