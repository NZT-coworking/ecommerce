const express = require('express');
const mongoose = require('mongoose');
const validadeJwtMiddleware = require('./src/middleware/validadeJwtMiddleware');
const ownerRouter = require('./src/routes/owner.routes');
const userRouter = require('./src/routes/user.routes');
require('dotenv').config();

const port = 8080;
const app = express();
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log(`success conection with mongoDB, init: http://localhost:${port}`);
    })
    .catch(() => {
        console.log('conection with mongoDB failed');
    });


app.use('/owner', ownerRouter);
app.use('/user', validadeJwtMiddleware, userRouter);

app.listen(port);

