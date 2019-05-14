const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check is not token
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

  // Verify token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded.user;
    next();
  } catch (e) {
    res.status(401).json('Token is not valid')
  }
};