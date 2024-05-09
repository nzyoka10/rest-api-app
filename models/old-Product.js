// models/Products.js
const mongoose = require("mongoose");

// mongoDB schema
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
});

// product model
const Product = mongoose.model("Product", productSchema);
module.exports = Product;