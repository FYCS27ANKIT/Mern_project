const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  const user = await User.create({ username, email, password });
  res.json(user);
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

  const token = jwt.sign({ id: user._id, username: user.username }, 'jwtsecret');
  res.cookie('token', token, { httpOnly: true }).json({ msg: 'Logged in' });
};

exports.logout = (req, res) => {
  res.clearCookie('token').json({ msg: 'Logged out' });
};
