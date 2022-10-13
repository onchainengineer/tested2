const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    category:{
        type:String,
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    size:[{
        type:String
    }],
    details:{
        type:String,
        required:true
    },
},{timestamps:true});

module.exports = mongoose.model("Product",ProductSchema);