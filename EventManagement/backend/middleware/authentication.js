const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ msg: 'No token, unauthorized' });

  try {
    const decoded = jwt.verify(token, 'jwtsecret');
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Invalid token' });
  }
};
