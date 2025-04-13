const express = require('express');
const routes = require('./routes/route.js');
const connectMongo = require('./db.js');
const cors = require('cors'); 

connectMongo();

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use("/",routes);

app.listen(2000,()=>{
    console.log("connected to server");
})