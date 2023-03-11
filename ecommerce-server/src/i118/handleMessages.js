const PT_BR = require('./pt-br');

function getMessages(code) {
    const message = PT_BR[code];
    if (!message) {
        return code;
    } else {
        return message;
    }
}

module.exports = getMessages;