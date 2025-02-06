import * as roomModels from '../models/roomModels.js';

export const getAllRooms = (req, res) => {
  roomModels.Room.getAll((err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

export const getRoomById = (req, res) => {
  roomModels.Room.getById(req.params.id, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
};

// export const createRoom = (req, res) => {
//   const data = req.body;
//   roomModels.Room.create(data, (err, result) => {
//     if (err) return res.status(500).send(err);
//     res.status(201).json({ message: 'Room created', room_id: result.insertId });
//   });
// };

// export const updateRoom = (req, res) => {
//   const data = req.body;
//   roomModels.Room.update(req.params.id, data, (err) => {
//     if (err) return res.status(500).send(err);
//     res.json({ message: 'Room updated' });
//   });
// };

// export const deleteRoom = (req, res) => {
//   roomModels.Room.delete(req.params.id, (err) => {
//     if (err) return res.status(500).send(err);
//     res.json({ message: 'Room deleted' });
//   });
// };