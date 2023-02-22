const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true,
    },
    status: {
        type: String,
        require: true
    }
})

const Product = mongoose.model('Product', productSchema);
module.exports = Product;