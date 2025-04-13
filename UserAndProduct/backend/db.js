const mongoose = require('mongoose');
const connectMongo = () => {
    mongoose.connect('mongodb://localhost:27017/UP_Crud', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));
}

module.exports = connectMongo;