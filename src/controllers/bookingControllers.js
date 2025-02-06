import * as BookingModels from '../models/bookingModels.js';

// ฟังก์ชันสำหรับจัดรูปแบบเวลา
const formatTime = (date) => {
  const pad = (n) => n < 10 ? '0' + n : n;
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
};

export const getAllBookings = (req, res) => {
  BookingModels.Booking.getAll((err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

export const getBookingById = (req, res) => {
  BookingModels.Booking.getById(req.params.id, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
};

export const createBooking = (req, res) => {
  const data = req.body;
  data.timestamp = formatTime(new Date());
  BookingModels.Booking.create(data, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ message: 'Booking created', booking_id: result.insertId });
  });
};

export const updateBooking = (req, res) => {
  const data = req.body;
  BookingModels.Booking.update(req.params.id, data, (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Booking updated' });
  });
};

export const deleteBooking = (req, res) => {
  BookingModels.Booking.delete(req.params.id, (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Booking deleted' });
  });
};
