// import express from 'express';
// import * as bookingController from '../controllers/bookingControllers.js';

// const bookingRouter = express.Router();

// bookingRouter.get('/', bookingController.getAllBookings);
// bookingRouter.get('/:id', bookingController.getBookingById);
// // bookingRouter.get('/descriptions', bookingController.getBookingDescriptions);//
// bookingRouter.post('/', bookingController.createBooking);
// bookingRouter.put('/:id', bookingController.updateBooking);
// bookingRouter.delete('/:id', bookingController.deleteBooking);

// export default bookingRouter;

import express from "express";
import * as bookingController from '../controllers/bookingControllers.js';
const bookingRoute = express.Router();

bookingRoute.get('/', bookingController.getAllBookings);
bookingRoute.get('/:id', bookingController.getBookingById);
bookingRoute.post('/', bookingController.createBooking);
bookingRoute.put('/:id', bookingController.updateBooking);
bookingRoute.delete('/:id', bookingController.deleteBooking);

export default bookingRoute;
