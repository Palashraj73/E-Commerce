// Database connection using mongoose
const express = require('express');
const app = express();
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/ecommerce',{
    // to prevent deprectation warning
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
})
.then(()=> console.log('Connected...'))
.catch(err => console.log('not connected', err));


module.exports=mongoose;