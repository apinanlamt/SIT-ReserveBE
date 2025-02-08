import db from "../config/database.js"

export const getAllBookings = async () => {
    const [response] = await db.promise().query(
        `SELECT * FROM booking_sit.booking`
    );
    return response;
}

export const getBookingById = async (bookingId) => {
    const [response] = await db.promise().query(
        `SELECT * FROM booking_sit.booking
        WHERE booking_id = ?`, 
        [bookingId]
    );
    return response[0];
}

export const createBooking = async (bookingData) => {
    const [response] = await db.promise().query(
        `INSERT INTO booking_sit.booking 
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
            bookingData.time_end,
            bookingData.timestamp
        ]
    );
    return response;
}

export const updateBooking = async (bookingId, bookingData) => {
    const [response] = await db.promise().query(
        `UPDATE booking_sit.booking 
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
        `DELETE FROM booking_sit.booking 
        WHERE booking_id = ?`,
        [bookingId]
    );
    return response;
}