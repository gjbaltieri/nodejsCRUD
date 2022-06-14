const mongoose = require('mongoose')

let productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    refCode: { type: String, required: true },
    brand: {type: String, require: true},
    description: {type: String},
    amount: { type: Number, required: true},
    price: { type: Number, required: true},
    sellPrice: { type: Number, required: true},
    date: { type: Date, default: Date() }
});
module.exports = mongoose.model('product', productSchema);


