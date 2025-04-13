const mongoose = require('mongoose');
const { type } = require('os');

const productSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    price : {
        type : String,
        required : true
    },
    quantity : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    }
});

const productModel = mongoose.model("Product", productSchema);
module.exports = productModel;