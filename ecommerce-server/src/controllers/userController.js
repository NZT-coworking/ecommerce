const index = async (req, res) => {
    try {
        return res.send({ message: "Api E-commerce" });
    }
    catch (err) {
        return res.send(400).send({ error: err });
    }
}

module.exports = { index };