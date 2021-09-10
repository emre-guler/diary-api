import "reflect-metadata";
import { createConnection } from "typeorm";
const express = require("express");
const app = express();

const homeRoutes = require('./api/routes/home');
const userRoutes = require('./api/routes/user');

app.use(async () => {
    const connection = await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: '',
        password: '123456789',
        database: 'diary'
    });
});

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "POST, GET");
        return res.status(200).json({});
    }
    next();
});  

// Routes 
app.use('/home', homeRoutes);
app.use('/user', userRoutes);

// If Not Found

app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error
        }
    })
});

module.exports = app;