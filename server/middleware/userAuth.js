const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = 'your_secret_key';

exports.generateToken(userId) {
    return jwt.sign({ userId }, JWT_SECRET_KEY, { expiresIn: '1h' });
}

exports.authenticateToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ message: 'Access denied. Token is required.' });
    jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
        if (err) return res.status(403).json({ message: 'Invalid token' });
        req.user = decoded;
        next();
    });
}