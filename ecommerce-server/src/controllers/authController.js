const Owner = require('../models/Owner');

const ownerRegister = async (req, res) => {
    try {
        const owner = await Owner.create(req.body);
        console.log(owner)
        return res.send({ owner });
    } catch (err) {
        return res.status(400).send({ error: 'Registrantion failed' });
    }
};


module.exports = { ownerRegister };