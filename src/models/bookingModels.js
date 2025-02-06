import db from "../config/database.js"

export const Booking = {
  getAll: (callback) => {
    const query = 'SELECT * FROM booking_sit.booking';
    db.query(query, callback);
  },
  getById: (id, callback) => {
    const query = 'SELECT * FROM booking WHERE booking_id = ?';
    db.query(query, [id], callback);
  },
  create: (data, callback) => {
    const query = 'INSERT INTO booking (title, name, email, phonenumber, timestamp) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [data.title, data.name, data.email, data.phonenumber, data.timestamp], callback);
  },
  update: (id, data, callback) => {
    const query = 'UPDATE booking SET title = ?, name = ?, email = ?, phonenumber = ? WHERE booking_id = ?';
    db.query(query, [data.title, data.name, data.email, data.phonenumber, id], callback);
  },
  delete: (id, callback) => {
    const query = 'DELETE FROM booking WHERE booking_id = ?';
    db.query(query, [id], callback);
  }
};

// module.exports = Booking;
