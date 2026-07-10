const jwt = require("jsonwebtoken")

const authJWT = (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader) {
        return res.status(401).json({ status: "Token tidak ada" })
    }
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : authHeader
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch (err) {
        return res.status(401).json({ status: "Token tidak valid" })
    }
}

module.exports = { authJWT }