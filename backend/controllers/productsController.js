const Product = require('../models/Product');


const createProduct = async (req, res) => {

    let product = new Product(req.body)
    try {
        let doc = await product.save()
        res.render('cadastrar', { doc })
    }
    catch (error) {
        res.send(error)
    }
}

const allProducts = async (req, res) => {

    try {
        let doc = await Product.find().sort({ name: 1 })
        if (doc) {
            res.render('all', { doc, result: false })
        } else {
            res.render('all', { doc });

        }
    }
    catch (error) {
        res.render('all')
    }
}
const productDelete = async (req, res) => {
    let id = req.params.id;
    try {
        await Product.findByIdAndDelete(id);
        res.redirect('/all')
    }
    catch (error) {
        res.status(404).send(error)
    }
}

const loadProduct = async (req, res) => {

    let id = req.params.id;
    try {
        let doc = await Product.findById(id);
        res.render('edit', { body: doc, result: false })
    }
    catch (error) {
        res.status(404).send(error)
    }
}

const editProduct = async (req, res) => {
    let product = {}
    product.name = req.body.name;
    product.brand = req.body.brand;
    product.description = req.body.description;
    product.refCode = req.body.refCode;
    product.amount = req.body.amount;
    product.price = req.body.price;
    product.sellPrice = req.body.sellPrice;
    let id = req.params.id;
    if(!id) {
        id = req.body.id
    }

    try {
        
        await Product.findByIdAndUpdate(id, product);
        let result = await Product.findById(id);
        res.render('edit', {result})
    }
    catch (error) {
        res.send(error)
    }
}






module.exports = { createProduct, allProducts, productDelete, loadProduct, editProduct }