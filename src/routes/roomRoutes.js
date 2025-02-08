import express from "express";
import * as roomController from '../controllers/roomControllers.js';
const roomRoute = express.Router();

roomRoute.get("/", roomController.getAllRooms);
roomRoute.get("/:id", roomController.getRoomById);
roomRoute.post("/", roomController.createRoom);
roomRoute.put("/:id", roomController.updateRoom);
roomRoute.delete("/:id", roomController.deleteRoom);

export default roomRoute;