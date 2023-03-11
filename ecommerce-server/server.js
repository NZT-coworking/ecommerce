const express = require('express');
const mongoose = require('mongoose');
const ownerRouter = require('./src/routes/owner.routes');
const productRouter = require('./src/routes/product.routes');

require('dotenv').config();

const port = process.env.PORT;
const app = express();
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log(`success conection with mongoDB, init: http://localhost:${port}`);
    })
    .catch(() => {
        console.log('conection with mongoDB failed');
    });


app.use('/owner', ownerRouter);
app.use('/product', productRouter)

app.listen(port);

