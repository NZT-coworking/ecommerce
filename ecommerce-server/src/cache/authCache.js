const NodeCache = require("node-cache");
const myCache = new NodeCache();

const save = (key, obj) => {
    if (!obj) {
        return;
    }

    myCache.set(key, obj);
}

const getPrincipal = (key) => {
    const principal = myCache.get(key);
    if (!principal) {
        return;
    }

    return principal;
}

module.exports = { save, getPrincipal };