import express from 'express';
import * as roomController from '../controllers/roomControllers.js';

const roomRouter = express.Router();

roomRouter.get('/', roomController.getAllRooms);
roomRouter.get('/:id', roomController.getRoomById);
// roomRouter.post('/', roomController.createRoom);
// roomRouter.put('/:id', roomController.updateRoom);
// roomRouter.delete('/:id', roomController.deleteRoom);

export default roomRouter;