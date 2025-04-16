const express = require('express');
const config = require('config');
const PORT = config.get("port");
const mainRouter = require('./routes/index.routes');
const sequelize = require('./config/db');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api", mainRouter);


const start = async() => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({alter: true});
        app.listen(PORT, () => {
            console.log(`Server started at: ${PORT} - port!`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();