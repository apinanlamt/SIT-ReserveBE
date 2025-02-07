// import * as roomModels from '../models/roomModels.js';

// export const getAllRooms = (req, res) => {
//   roomModels.Room.getAll((err, results) => {
//     if (err) return res.status(500).send(err);
//     res.json(results);
//   });
// };

// export const getRoomById = (req, res) => {
//   roomModels.Room.getById(req.params.id, (err, result) => {
//     if (err) return res.status(500).send(err);
//     res.json(result);
//   });
// };

// // export const createRoom = (req, res) => {
// //   const data = req.body;
// //   roomModels.Room.create(data, (err, result) => {
// //     if (err) return res.status(500).send(err);
// //     res.status(201).json({ message: 'Room created', room_id: result.insertId });
// //   });
// // };

// // export const updateRoom = (req, res) => {
// //   const data = req.body;
// //   roomModels.Room.update(req.params.id, data, (err) => {
// //     if (err) return res.status(500).send(err);
// //     res.json({ message: 'Room updated' });
// //   });
// // };

// // export const deleteRoom = (req, res) => {
// //   roomModels.Room.delete(req.params.id, (err) => {
// //     if (err) return res.status(500).send(err);
// //     res.json({ message: 'Room deleted' });
// //   });
// // };

import * as roomModel from '../models/roomModels.js'

export const getAllRooms = async (req, res) => {
    try {
        const rooms = await roomModel.getAllRooms();
        return res.status(200).json({
            success: true,
            data: rooms,
            message: "Rooms retrieved successfully"
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            data: null,
            message: "Internal server error"
        });
    }
}

export const getRoomById = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({
            success: false,
            data: null,
            message: "Room ID is required"
        });
    }
    try {
        const room = await roomModel.getRoomById(id);
        if (!room) {
            return res.status(404).json({
                success: false,
                data: null,
                message: "Room not found"
            });
        }
        return res.status(200).json({
            success: true,
            data: room,
            message: "Room retrieved successfully"
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            data: null,
            message: "Internal server error"
        });
    }
}

export const createRoom = async (req, res) => {
    try {
        const result = await roomModel.createRoom(req.body);
        return res.status(201).json({
            success: true,
            data: { id: result.insertId, ...req.body },
            message: "Room created successfully"
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            data: null,
            message: "Internal server error"
        });
    }
}

export const updateRoom = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({
            success: false,
            data: null,
            message: "Room ID is required"
        });
    }
    try {
        const result = await roomModel.updateRoom(id, req.body);
        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                data: null,
                message: "Room not found"
            });
        }
        return res.status(200).json({
            success: true,
            data: { id, ...req.body },
            message: "Room updated successfully"
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            data: null,
            message: "Internal server error"
        });
    }
}

export const deleteRoom = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({
            success: false,
            data: null,
            message: "Room ID is required"
        });
    }
    try {
        const result = await roomModel.deleteRoom(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                data: null,
                message: "Room not found"
            });
        }
        return res.status(200).json({
            success: true,
            data: null,
            message: "Room deleted successfully"
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            data: null,
            message: "Internal server error"
        });
    }
}
