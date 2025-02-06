import db from "../config/database.js"

export const Room = {
  getAll: (callback) => {
    const query = 'SELECT * FROM room';
    db.query(query, callback);
  },
  getById: (id, callback) => {
    const query = 'SELECT * FROM room WHERE room_id = ?';
    db.query(query, [id], callback);
  },
  // create: (data, callback) => {
  //   const query = 'INSERT INTO room (room_name, room_area) VALUES (?, ?)';
  //   db.query(query, [data.room_name, data.room_area], callback);
  // },
  // update: (id, data, callback) => {
  //   const query = 'UPDATE room SET room_name = ?, room_area = ? WHERE room_id = ?';
  //   db.query(query, [data.room_name, data.room_area, id], callback);
  // },
  // delete: (id, callback) => {
  //   const query = 'DELETE FROM room WHERE room_id = ?';
  //   db.query(query, [id], callback);
  // }
};

// module.exports = Room;