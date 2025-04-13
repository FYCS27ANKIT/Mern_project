const userModel = require('../models/userM.js');

const addUser = async(req, res) => {
    const data = new userModel(req.body);
    const result = await data.save();
    res.json(result);
}

const showUser = async(req, res) => {
    const result = await userModel.find();
    res.json(result);
}

const editUser = async(req, res) => {
    const id = req.params.id;
    const{username, email, password} = req.body;
    const data = await userModel.findByIdAndUpdate({_id : id}, {username, email, password});
    res.json(data);
}

const singleUser = async(req, res) => {
    const {id} = req.params;
    const data = await userModel.findById(id);
    res.json(data);
}

const deleteUser = async(req, res) => {
    const {id} = req.params;
    const data = await userModel.findByIdAndDelete({_id : id});
    res.json(data)
}

module.exports = {addUser, showUser ,editUser, singleUser, deleteUser}