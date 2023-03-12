const getMessages = require("../i118/handleMessages");
const Product = require("../models/Product");
const path = require("path");

const save = async (product, image) => {
    if (!product || !image) {
        throw (getMessages("DEFAULT_ERROR_SAVE"))
    }

    const productToSave = new Product({
        ...product,
        img: { src: path.basename(image.path) }
    });

    await productToSave.save();
    return { message: getMessages("DEFAULT_SUCCESS_SAVE") };
}

const getAll = async () => {
    const productList = await Product.find();
    return productList;
}

module.exports = { save, getAll };