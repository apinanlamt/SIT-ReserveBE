import express from "express";
import connection from "./config/database.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import roomRoutes from "./routes/roomRoutes.js";
import { logger } from "./middlewares/logger.js";
import cors from "cors"

const app = express ();
const port = 3000;

app.use(logger); // Logger สำหรับบันทึกการเรียกใช้งาน HTTP Request ในเซิร์ฟเวอร์
app.use(express.json());
app.use(cors());
//app.use(express.urlencoded({ extended: true }));
app.use("/api/bookings", bookingRoutes);
app.use("/api/rooms", roomRoutes);

connection.connect((error) => {
    if(error){
        console.log(error);
    } else {
        console.log("Database is connect");
    }
})

app.get('/', (req,res) => {
    res.send('Welcome to SIT Reserve !')
});

app.listen(port, ( )=> {
    console.log(`Server running on port ${port}`);
})

