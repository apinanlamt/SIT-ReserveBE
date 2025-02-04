import db from "../config/database.js"

const room_id = 1;
export const createBooking = async (bookingData) => {
  const { roomId, bookingDate, startTime, endTime, status } = bookingData;
  const query = `
    INSERT INTO bookings (room_id, booking_date, start_time, end_time, status)
    VALUES (?, ?, ?, ?, ?)
  `;
  await db.promise(query, [roomId, bookingDate, startTime, endTime, status]);
};

export const updateBookingStatus = async (bookingId, status) => {
  const query = `
    UPDATE bookings
    SET status = ?
    WHERE id = ?
  `;
  await db.promise(query, [status, bookingId]);
};

export const getAllBookings = async () => {
  const query = 'SELECT * FROM bookings';
  const [rows] = await db.promise(query);
  return rows;
};

export const deleteBooking = async (bookingId) => {
  const query = 'DELETE FROM bookings WHERE id = ?';
  await db.promise(query, [bookingId]);
};
