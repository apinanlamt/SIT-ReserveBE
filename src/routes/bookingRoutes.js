import express from 'express';
import * as bookingController from '../controllers/bookingControllers.js';

const bookingRouter = express.Router();

bookingRouter.get('/', bookingController.getAllBookings);
bookingRouter.get('/:id', bookingController.getBookingById);
bookingRouter.post('/', bookingController.createBooking);
bookingRouter.put('/:id', bookingController.updateBooking);
bookingRouter.delete('/:id', bookingController.deleteBooking);

export default bookingRouter;
