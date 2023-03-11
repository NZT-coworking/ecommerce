const jwt = require("jsonwebtoken");
const getMessages = require("../i118/handleMessages");

const validadeJwtMiddleware = (req, res, next) => {
    const authorization = req.headers["authorization"];

    jwt.verify(authorization, process.env.SECRET, (err, data) => {
        if (err) {
            res.status(403).send({ error: getMessages("DEFAULT_UNAUTHORIZED") });
            return;
        }

        next();
    })
}

module.exports = validadeJwtMiddleware;