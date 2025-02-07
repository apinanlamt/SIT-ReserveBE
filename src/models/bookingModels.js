// import db from "../config/database.js"

// export const Booking = {
//   getAll: (callback) => {
//     const query = 'SELECT * FROM booking_sit.booking';
//     db.query(query, callback);
//   },
//   getById: (id, callback) => {
//     const query = 'SELECT * FROM booking WHERE booking_id = ?';
//     db.query(query, [id], callback);
//   },

//   // getBookingDescriptions: (callback) => {
//   //   const query = 'SELECT booking_detail.description FROM booking_detail';
//   //   db.query(query, callback);
//   // },//

//   create: (data, callback) => {
//     const query = 'INSERT INTO booking (title, name, email, phonenumber, timestamp) VALUES (?, ?, ?, ?, ?)';
//     db.query(query, [data.title, data.name, data.email, data.phonenumber, data.timestamp], callback);
//   },
//   update: (id, data, callback) => {
//     const query = 'UPDATE booking SET title = ?, name = ?, email = ?, phonenumber = ? WHERE booking_id = ?';
//     db.query(query, [data.title, data.name, data.email, data.phonenumber, id], callback);
//   },
//   delete: (id, callback) => {
//     const query = 'DELETE FROM booking WHERE booking_id = ?';
//     db.query(query, [id], callback);
//   }
// };

// // module.exports = Booking;

import db from "../config/database.js"

export const getAllBookings = async () => {
    const [response] = await db.promise().query(
        `SELECT * FROM booking`
    );
    return response;
}

export const getBookingById = async (bookingId) => {
    const [response] = await db.promise().query(
        `SELECT * FROM booking
        WHERE booking_id = ?`, 
        [bookingId]
    );
    return response[0];
}

export const createBooking = async (bookingData) => {
    const [response] = await db.promise().query(
        `INSERT INTO booking 
        (name, email, phonenumber, title, description, room_id, date, time_start, time_end, timestamp)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            bookingData.name,
            bookingData.email,
            bookingData.phonenumber,
            bookingData.title,
            bookingData.description,
            bookingData.room_id,
            bookingData.date,
            bookingData.time_start,
            bookingData.time_end
        ]
    );
    return response;
}

export const updateBooking = async (bookingId, bookingData) => {
    const [response] = await db.promise().query(
        `UPDATE booking 
        SET name = ?, email = ?, phonenumber = ?, title = ?, 
            description = ?, room_id = ?, date = ?, 
            time_start = ?, time_end = ? 
        WHERE booking_id = ?`,
        [
            bookingData.name,
            bookingData.email,
            bookingData.phonenumber,
            bookingData.title,
            bookingData.description,
            bookingData.room_id,
            bookingData.date,
            bookingData.time_start,
            bookingData.time_end,
            bookingId
        ]
    );
    return response;
}

export const deleteBooking = async (bookingId) => {
    const [response] = await db.promise().query(
        `DELETE FROM booking 
        WHERE booking_id = ?`,
        [bookingId]
    );
    return response;
}
