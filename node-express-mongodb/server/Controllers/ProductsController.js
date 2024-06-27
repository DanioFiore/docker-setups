const Product = require('../Models/ProductModel');

exports.getProducts = async (req, res, next) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            throw new Error('Product not found');
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.saveProducts = async (req, res, next) => {
    try {
        const {name, price, quantity} = req.body
        const product = new Product({name, price, quantity});
        await product.save();
        res.status(200).json({success: true});
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.updateProduct = async (req, res, next) => {
    try {
        // new: true = retrieve the updated object
        // new: false = retrieve the object before the update occures
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!product) {
            throw new Error('Product not found');
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        // new: true = retrieve the updated object
        // new: false = retrieve the object before the update occures
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            throw new Error('Product not found');
        }
        res.status(200).json({success: true});
    } catch (error) {
        res.status(500).send(error.message);
    }
}
