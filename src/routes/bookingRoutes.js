import express from "express";
import * as bookingController from '../controllers/bookingControllers.js';
const bookingRoute = express.Router();

bookingRoute.get('/', bookingController.getAllBookings);
bookingRoute.get('/:id', bookingController.getBookingById);
bookingRoute.post('/', bookingController.createBooking);
bookingRoute.put('/:id', bookingController.updateBooking);
bookingRoute.delete('/:id', bookingController.deleteBooking);

export default bookingRoute;
