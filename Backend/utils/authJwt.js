const jwt = require("jsonwebtoken");
const secretKey = require("../configs/jwt");

function verifyToken(req, res, next) {
    const auth = req.header("Authorization");

    if (!auth) {
        return res.status(403).json({ message: "No token provided!" });
    }

    const [bearer, token] = auth.split(" ");

    if (bearer !== "Bearer" || !token) {
        return res.status(401).json({ message: "Unauthorized!" });
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            console.log("JWT Verification Error: ", err);
            console.log("Secret Key: ", secretKey);
            return res.status(401).json({ message: "Unauthorized!" });
        }
        req.user = user;
        next();
    });

}

module.exports = { verifyToken };