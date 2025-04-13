const express = require('express');
const userC = require('../controllers/userC.js');
const productC = require('../controllers/product.js');

const route = express.Router();

route.get('/user/', userC.showUser);
route.post('/user/add', userC.addUser);
route.get('/user/singleUser/:id', userC.singleUser);
route.put('/user/edit/:id', userC.editUser);
route.delete('/user/delete/:id', userC.deleteUser);

route.get('/product/', productC.showProduct);
route.post('/product/add', productC.addProduct);
route.get('/product/userProduct/:id', productC.userProduct);
route.put('/product/edit/:id', productC.editProduct);
route.delete('/product/delete/:id', productC.deleteProduct);




module.exports = route;