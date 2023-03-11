const getMessages = require("../i118/handleMessages");
const ObjectId = require('mongodb').ObjectId;

const authService = require('../services/authService');

const ownerRegister = async (req, res) => {
    try {
        authService.createOwner(req.body);
        return res.send({ message: getMessages("DEFAULT_SUCCESS_SAVE") });
    } catch (err) {
        return res.status(400).send({ error: 'Registrantion failed' });
    }
};

const ownerLogin = async (req, res) => {
    try {
        const loginResponse = await authService.login(req.body);
        return res.send(loginResponse);
    }
    catch (err) {
        return res.status(400).send({ error: err });
    }
};

module.exports = { ownerRegister, ownerLogin };