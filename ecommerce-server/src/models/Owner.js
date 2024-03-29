const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const ownerSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        require: true,
        select: true
    },
    role: {
        type: String,
        require: true,
        enum: ['ADMIN', 'RH', 'USER']
    },
    company: {
        type: String,
        require: true
    }
});

ownerSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
})

const Owner = mongoose.model('Owner', ownerSchema);
module.exports = Owner;