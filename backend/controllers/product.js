const Product = require('../models/product');

//list all the products
exports.getProducts = async(req,res)=>{
    try{
        const products = await Product.find({});
        if(!products){
            return res.status(404).json({'msg':'No products'});
        }
        res.json(products);
    }
    catch(err){
        res.status(500).json({'err':err.toString()});
    }
}

//get a product
exports.getProduct = async(req,res)=>{
    try{
        const product = await Product.findOne({_id:req.params.id});
        if(!product){
            return res.status(404).json({'msg':'Product not found'});
        }
        res.json(product);
    }
    catch(err){
        res.status(500).json({'err':err.toString()});
    }
}

//Create a product
exports.addProduct = async(req,res)=>{
    try{
        const product = await Product.create(req.body);
        if(!product){
            return res.status(400).json({'msg':'Unable to add product'});
        }
        res.json(product);
    }
    catch(err){
        res.status(500).json({'err':err.toString()});
    }
}

//update a product
exports.editProduct = async(req,res)=>{
    try{
        const product = await Product.findOneAndUpdate({_id:req.params.id},req.body,{new:true});
        if(!product){
            return res.status(400).json({'msg':'Product not found'});
        }
        res.json(product);
    }
    catch(err){
        res.status(500).json({'err':err.toString()});
    }
}

//delete a product
exports.deleteProduct = async(req,res)=>{
    try{
        const product = await Product.findOneAndRemove({_id:req.params.id});
        if(!product){
            return res.status(404).json({'msg':'Product not found'});
        }
        res.json(product);
    }
    catch(err){
        res.status(500).json({'err':err.toString()});
    }
}