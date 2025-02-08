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

export const getRoomsByArea = async (req, res) => {
  const { area } = req.params;

  if (!area) {
      return res.status(400).json({
          success: false,
          data: null,
          message: "Area name is required"
      });
  }

  const validAreas = ['CB2', 'LX', 'SIT'];
  const formattedArea = area.trim();

  if (!validAreas.some(validArea => formattedArea.toUpperCase().includes(validArea.toUpperCase()))) {
      return res.status(400).json({
          success: false,
          data: null,
          message: "Invalid area name. Must be CB2, LX Building, or SIT Building"
      });
  }

  try {
      const rooms = await roomModel.getRoomsByArea(formattedArea);
      return res.status(200).json({
          success: true,
          data: rooms,
          message: `Rooms in ${area} retrieved successfully`
      });
  } catch (error) {
      console.error(error);
      return res.status(500).json({
          success: false,
          data: null,
          message: "Internal server error",
          error
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
            message: "Internal server error",
            error    
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
            message: "Internal server error",
            error
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
            message: "Internal server error",
            error
        });
    }
}
