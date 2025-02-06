import express from "express";
import connection from "./config/database.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import roomRoutes from "./routes/roomRoutes.js";
import errorHandler from './middlewares/errorHandler.js';
import cors from "cors"

const app = express ();
const port = 3000;

app.use(errorHandler); // Middleware สำหรับจัดการข้อผิดพลาด
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/api/bookings", bookingRoutes);
app.use("/api/rooms", roomRoutes);


app.get('/', (req,res) => {
    res.send('Welcome to SIT Reserve !')
});

app.listen(port, ( )=> {
    console.log(`Server running on port ${port}`);
})

connection.connect((error) => {
    if(error){
        console.log(error);
    } else {
        console.log("Database is connect");
    }
})




