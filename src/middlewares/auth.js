const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const token = authHeader.split(" ")[1];

        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decodedToken.id;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
}

module.exports = authMiddleware;
