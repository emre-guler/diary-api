import * as express from 'express';
import homeRoute from "./routes/user";
import  { createConnection } from 'typeorm';
import "reflect-metadata";

const app = express();
// Db connection control
createConnection().then(connection => {
    console.log("Database connection successful!");
    console.log(connection);
}).catch(error => console.log(error));        

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
app.use("/user", homeRoute);
// If not found 
app.use((req, res, next) => {
    const error = new Error("Not Found");
    error["status"] =  404;
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error
        }
    });
});
app.listen(8080, () => console.log(`Server is running on http://localhost:8080`));