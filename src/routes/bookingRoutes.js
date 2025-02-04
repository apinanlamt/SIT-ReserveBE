import express from 'express';
import * as bookingControllers from '../controllers/bookingControllers.js';
const bookingRouter = express.Router();

// POST /api/bookings - สร้างการจอง
bookingRouter.post('/bookings', bookingControllers.createBooking);

// PUT /api/bookings/:id/status - อัปเดตสถานะการจอง
bookingRouter.put('/bookings/:bookingId/status', bookingControllers.updateBookingStatus);

// GET /api/bookings - ดึงข้อมูลการจองทั้งหมด
bookingRouter.get('/bookings', bookingControllers.getAllBookings);

// DELETE /api/bookings/:id - ลบการจอง
bookingRouter.delete('/bookings/:bookingId', bookingControllers.deleteBooking);

export default bookingRouter;
