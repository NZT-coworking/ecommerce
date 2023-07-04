const Owner = require('../models/Owner');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const getMessages = require('../i118/handleMessages');

async function createOwner(owner) {
    return await Owner.create(owner);
}

async function login({ name, password }) {
    const owner = await Owner.findOne({ name });

    if (!owner) {
        return { auth: false };
    }

    const isValid = bcrypt.compareSync(password, owner.password);
    if (isValid) {
        const token = jwt.sign({ id: owner._id }, process.env.SECRET, {
            expiresIn: 3600
        });
        console.log({ token: token, company: owner.company, name: owner.name, role: owner.role })
        return { token: token, company: owner.company, name: owner.name, role: owner.role };
    } else {
        throw (getMessages("INVALID.LOGIN"));
    }
}

async function getUsers(company) {
    if (!company) {
        throw new Error('Deve ser passado a empresa.');
    }

    const data = await Owner.find({ company });

    return data;
}

async function deleteUser(user) {
    if (!user) {
        throw new Error('Deve ser passado o usuário');
    }

    const data = await Owner.deleteOne({ name: user });
    return data;
}

async function findUser(user) {
    if (!user) {
        throw new Error('Deve ser passado o usuário');
    }

    const data = await Owner.findOne({ name: user });

    if (!Object.keys(user).length) {
        throw new Error('Usuário não encontrado');
    }

    return { email: data.email, name: data.name, role: data.role };
}

async function updateUser(userToUpdate, updatedData) {
    if (!userToUpdate || !updatedData) {
        throw new Error('Bad request!');
    }

    const owner = await findUser(userToUpdate);
    const diff = {};

    Object.entries(updatedData).forEach(([key, value]) => {
        if (value !== owner[key]) {
            diff[key] = value;
        }
    })

    const data = await Owner.findOneAndUpdate({ name: userToUpdate }, diff, { new: true });
    return data;
}

module.exports = { createOwner, login, getUsers, deleteUser, findUser, updateUser }