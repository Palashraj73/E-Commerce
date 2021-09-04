const express = require('express');
const app = express();
require('./database/mongoose');
// load modal
const AddProduct = require('./database/modal');
// load middleware
app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const port = process.env.Port || 4000;

  //---------------------------------------


app.get('/',async (req,res)=>{
    res.send("hello");
})
app.get('/add',async (req,res)=>{
    AddProduct.find().then((product)=>{
        res.status(200).send(product);
    }).catch((e)=>{
        res.status(400).send(e)
    })
})

app.post('/add', async (req,res) => {
    try{
        const addProduct = new AddProduct(req.body)
        console.log(req.body);
        const newProductAdding = await addProduct.save();
        res.status(201).send(newProductAdding);
    }catch(e){
        res.status(400).send(e);
    }
});


// for add to cart
// app.get('/cart',async (req,res)=>{
//     AddProduct.find().then((product)=>{
//         res.status(200).send(product);
//     }).catch((e)=>{
//         res.status(400).send(e)
//     })
    
// })

app.post('/cart', async (req,res) => {
    try{
        const addProduct = new AddProduct(req.body)
        console.log(req.body);
        const newProductAdding = await addProduct.save();
        res.status(201).send(newProductAdding);
    }catch(e){
        res.status(400).send(e);
    }
});
//  end cart section

app.listen(port,()=>{
    console.log(`running port is ${port}`);
})
