const express = require('express');
const cors = require('cors');
const mongodbConnection = require('./configs/mongodb');
const bodyParser = require('body-parser');
const admin = require('./services/authAdmin');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

admin.adminAccount();
mongodbConnection();

app.get('/', async (req, res) => {
    res.send("hello backend programmer saksham agarwal");
});

const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

app.listen(5724, () => {
    console.log("Server is running on port 5724");
})