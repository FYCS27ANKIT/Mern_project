const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect('mongodb://localhost:27017/mern-events')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));
};
