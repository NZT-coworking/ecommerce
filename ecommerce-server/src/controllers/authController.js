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

const getUsers = async (req, res) => {
    try {
        const response = await authService.getUsers(req.headers["company"]);
        return res.send(response);
    } catch (err) {
        return res.status(400).send({ error: err });
    }
}

const deleteUser = async (req, res) => {
    try {
        const response = await authService.deleteUser(req.headers["user"]);
        return res.status(200).send({ success: true });
    } catch (err) {
        return res.status(400).send({ error: err });
    }
}

const findUser = async (req, res) => {
    try {
        const response = await authService.findUser(req.headers["user"]);
        return res.send(response);
    } catch (err) {
        return res.status(400).send({ error: err })
    }
}

const updateUser = async (req, res) => {
    try {
        const response = await authService.updateUser(req.headers["user"], req.body);
        return res.send({ success: true });
    } catch (err) {
        return res.status(400).send({ error: 'Falha ao salvar' });
    }
}

module.exports = { ownerRegister, ownerLogin, getUsers, deleteUser, findUser, updateUser };