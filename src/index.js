import express from "express";
import connection from "./config/database.js";

const app = express ();
const port = 3000;

app.use(express.json());


connection.connect((error) => {
    if(error){
        console.log(error);
    } else {
        console.log("Database is connect");
    }
})

app.listen(port, ( )=> {
    console.log(`App listening on port ${port}`);
})