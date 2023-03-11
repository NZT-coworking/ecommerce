const Owner = require('../models/Owner');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const getMessages = require('../i118/handleMessages');

async function createOwner(owner) {
    return await Owner.create(owner);
}

async function login({ email, password }) {
    const owner = await Owner.findOne({ email });

    if (!owner) {
        return { auth: false };
    }

    const isValid = bcrypt.compareSync(password, owner.password);
    if (isValid) {
        const token = jwt.sign({ id: owner._id }, process.env.SECRET, {
            expiresIn: 3600
        });
        return { auth: true, token: token };
    } else {
        throw (getMessages("INVALID.LOGIN"));
    }
}

module.exports = { createOwner, login }