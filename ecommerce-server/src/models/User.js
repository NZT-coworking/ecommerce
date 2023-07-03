const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    user: {
        type: String,
        require: true,
        unique: true,
        lowercase: true
    },
    cpf: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
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
        require: true,
        unique: true
    }
});

userSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
})

const User = mongoose.model('User', userSchema);
module.exports = User;