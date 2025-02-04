import express from "express";
// import connection from "./config/database.js";
//
//
import cors from "cors"
import errorHandler from "./middlewares/errorHandler.js";

const app = express ();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(errorHandler)

app.get('/', (req,res) => {
    res.send('Welcome to SIT Reserve')
});

app.listen(port, ( )=> {
    console.log(`Server running on port ${port}`);
})

// connection.connect((error) => {
//     if(error){
//         console.log(error);
//     } else {
//         console.log("Database is connect");
//     }
// })