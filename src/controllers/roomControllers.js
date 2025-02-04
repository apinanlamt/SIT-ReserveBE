import * as roomModels from '../models/roomModels.js';


export const getAllRooms = async (req, res) => {
    try {
      const rooms = await roomModels.getAllRooms();
      res.status(200).json({ rooms });
    } catch (error) {
      res.status(500).json({ message: 'Error fetching rooms', error });
  }
};

// export default roomModels;
