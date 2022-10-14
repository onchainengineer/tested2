const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    warranty:{
        type:String,
        default:""
    },
    price:{
        type:Number,
        required:true
    },
    details:{
        type:String,
        default:""
    },
},{timestamps:true});

module.exports = mongoose.model("Product",ProductSchema);