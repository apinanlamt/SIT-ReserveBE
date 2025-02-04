import express from 'express';
import * as roomControllers from '../controllers/roomControllers.js';
const roomRouter = express.Router();

// GET /api/rooms - ดึงข้อมูลห้องทั้งหมด
roomRouter.get('/rooms', roomControllers.getAllRooms);

export default roomRouter;