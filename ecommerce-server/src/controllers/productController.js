const getMessages = require('../i118/handleMessages');
const productService = require('../services/productService');

const addProduct = (req, res) => {
    try {
        productService.save(req.body, req.file);
        res.send({ message: getMessages("DEFAULT_SUCCESS_SAVE") });
    } catch (err) {
        res.status(500).send({ error: err });
    }
};

const getProducts = async (req, res) => {
    try {
        const products = await productService.getAll();
        res.send({ data: products });
    } catch (err) {
        res.status(500).send({ error: err });
    }
}

module.exports = { addProduct, getProducts };