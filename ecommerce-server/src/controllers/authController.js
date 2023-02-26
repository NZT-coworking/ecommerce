const jwt = require("jsonwebtoken")
const ObjectId = require('mongodb').ObjectId;

const authService = require('../services/authService');

const ownerRegister = async (req, res) => {
    try {
        const owner = authService.createOwner(req.body);
        return res.send({ owner });
    } catch (err) {
        return res.status(400).send({ error: 'Registrantion failed' });
    }
};

const ownerLogin = async (req, res) => {
    try {
        const loginResponse = await authService.login(req.body);
        console.log({loginResponse: loginResponse})
        return res.send(loginResponse);
    }
    catch (err) {
        console.log(err)
        return res.status(400).send({ error: err })
    }
};


module.exports = { ownerRegister, ownerLogin };