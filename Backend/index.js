const express = require('express');
const cors = require('cors');
const mongodbConnection = require('./configs/mongodb');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongodbConnection();

app.get('/', async (req, res) => {
    res.send("hello backend saksham agarwal");
});


app.use('/users', userRoutes);

app.listen(5724, () => {
    console.log("Server is running on port 5724");
})