const jwt = require("jsonwebtoken");
const secretKey = require("../configs/jwt");

function verifyToken(req, res, next) {
    // const auth = req.header("Authorization");

    // if (!auth) {
    //     return res.status(403).json({ message: "No token provided!" });
    // }

    // const [bearer, token] = auth.split(" ");

    // if (bearer !== "Bearer" || !token) {
    //     return res.status(401).json({ message: "Unauthorized!" });
    // }

    let token = req.cookies.token; // Get token from cookies

    if (!token) {
        const authHeader = req.headers['authorization'];
        if (authHeader && authHeader.startsWith('Bearer ')) {
            token = authHeader.split(' ')[1];
        }
    }

    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            console.log("JWT Verification Error: ", err);
            return res.status(401).json({ message: "Unauthorized!" });
        }
        req.user = user;
        next();
    });
}

function verifyToken2(token) {
    try {
        return jwt.verify(token, secretKey);
    } catch (error) {
        console.error("Token verification error:", error.message);
        throw new Error("Invalid or expired token");
    }
}

module.exports = { verifyToken, verifyToken2 };