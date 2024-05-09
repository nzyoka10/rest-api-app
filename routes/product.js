const express = require("express");
const router = express.Router();
const Product = require('../models/Product');

// Fetch all products using GET method
router.get('/', async(req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to get a single product
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (product === null) {
            res.status(404).json({ message: 'Product not found' });
        } else {
            res.json(product);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to create a new product
router.post('/', async (req, res) => {
    try {
        const { name, price, description } = req.body;
        const product = await Product.create({ name, price, description });
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Route to update a product
router.put('/:id', async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (product === null) {
            res.status(404).json({ message: 'Product not found' });
        } else {
            const { name, price, description } = req.body;
            await product.update({ name, price, description });
            res.json(product);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Route to delete a product
router.delete('/:id', async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (product === null) {
            res.status(404).json({ message: 'Product not found' });
        } else {
            await product.destroy();
            res.json({ message: 'Product deleted' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
