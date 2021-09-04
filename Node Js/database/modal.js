const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_image:{
        type:String,
        required: true,
        unique:true
    },
    product_name:{
        type:String,
        required: true,
        trim:true
    },
    product_category:{
        type:String,
        required: true
    },
    product_price:{
        type:Number,
        required: true
    },
    product_rating:{
        type:String,
        required: true
    },
    total_product_bought:{
        type:Number,
        required: true
    },
    total_product_reviews:{
        type:String,
        required: true
    },
    product_description:{
        type:String,
        required: true
    }
})

const AddProduct = new mongoose.model('AddProduct',productSchema);

module.exports=AddProduct;