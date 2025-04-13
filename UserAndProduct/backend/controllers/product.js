const productModel = require('../models/productM.js');

const addProduct = async(req, res) => {
    const data = new productModel(req.body);
    const result = await data.save();
    res.json(result);
}

const showProduct = async(req, res) => {
    const result = await productModel.find();
    res.json(result);
}

const editProduct = async(req, res) => {
    const id = req.params.id;
    const{name, price, quantity, category} = req.body;
    const result = await productModel.findByIdAndUpdate({_id : id}, {name, price, quantity, category});
    res.json({data:result});
}

const userProduct = async(req, res) => {
    const {id} = req.params;
    const result = await productModel.findById(id);
    res.json(result);
}

const deleteProduct = async(req, res) => {
    const {id} = req.params;
    const result = await productModel.findByIdAndDelete({_id : id});
    res.json(result)
}

module.exports = {addProduct, showProduct, editProduct, userProduct, deleteProduct}