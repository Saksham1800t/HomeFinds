const cloudinary = require('cloudinary').v2;


cloudinary.config({
    cloud_name: "dzknstdht",
    api_key: "815299241944467",
    api_secret: "W8MSyVJtZho4oSqCwoZTuillwkE"
});

module.exports = cloudinary;