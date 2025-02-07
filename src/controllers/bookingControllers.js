// import * as BookingModels from '../models/bookingModels.js';

// // ฟังก์ชันสำหรับจัดรูปแบบเวลา
// const formatTime = (date) => {
//   const pad = (n) => n < 10 ? '0' + n : n;
//   return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
// };

// export const getAllBookings = (req, res) => {
//   BookingModels.Booking.getAll((err, results) => {
//     if (err) return res.status(500).send(err);
//     res.json(results);
//   });
// };

// export const getBookingById = (req, res) => {
//   BookingModels.Booking.getById(req.params.id, (err, result) => {
//     if (err) return res.status(500).send(err);
//     res.json(result);
//   });
// };

// // export const getBookingDescriptions = (req, res) => {
// //   bookingModel.getBookingDescriptions((err, descriptions) => {
// //     if (err) {
// //       res.status(500).json({ error: err.message });
// //     } else {
// //       res.json(descriptions);
// //     }
// //   });
// // };//

// export const createBooking = (req, res) => {
//   const data = req.body;
//   data.timestamp = formatTime(new Date());
//   BookingModels.Booking.create(data, (err, result) => {
//     if (err) return res.status(500).send(err);
//     res.status(201).json({ message: 'Booking created', booking_id: result.insertId });
//   });
// };

// export const updateBooking = (req, res) => {
//   const data = req.body;
//   BookingModels.Booking.update(req.params.id, data, (err) => {
//     if (err) return res.status(500).send(err);
//     res.json({ message: 'Booking updated' });
//   });
// };

// export const deleteBooking = (req, res) => {
//   BookingModels.Booking.delete(req.params.id, (err) => {
//     if (err) return res.status(500).send(err);
//     res.json({ message: 'Booking deleted' });
//   });
// };

import * as bookingModel from '../models/bookingModels.js'

export const getAllBookings = async (req, res) => {
    try {
        const bookings = await bookingModel.getAllBookings();
        return res.status(200).json({
            success: true,
            data: bookings,
            message: "Bookings retrieved successfully"
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            data: null,
            message: "Internal server error"
        });
    }
}

export const getBookingById = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({
            success: false,
            data: null,
            message: "Booking ID is required"
        });
    }
    try {
        const booking = await bookingModel.getBookingById(id);
        if (!booking) {
            return res.status(404).json({
                success: false,
                data: null,
                message: "Booking not found"
            });
        }
        return res.status(200).json({
            success: true,
            data: booking,
            message: "Booking retrieved successfully"
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            data: null,
            message: "Internal server error"
        });
    }
}

export const createBooking = async (req, res) => {
    try {
        const result = await bookingModel.createBooking(req.body);
        return res.status(201).json({
            success: true,
            data: { id: result.insertId, ...req.body },
            message: "Booking created successfully"
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            data: null,
            message: "Internal server error"
        });
    }
}

export const updateBooking = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({
            success: false,
            data: null,
            message: "Booking ID is required"
        });
    }
    try {
        const result = await bookingModel.updateBooking(id, req.body);
        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                data: null,
                message: "Booking not found"
            });
        }
        return res.status(200).json({
            success: true,
            data: { id, ...req.body },
            message: "Booking updated successfully"
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            data: null,
            message: "Internal server error"
        });
    }
}

export const deleteBooking = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({
            success: false,
            data: null,
            message: "Booking ID is required"
        });
    }
    try {
        const result = await bookingModel.deleteBooking(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                data: null,
                message: "Booking not found"
            });
        }
        return res.status(200).json({
            success: true,
            data: null,
            message: "Booking deleted successfully"
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            data: null,
            message: "Internal server error"
        });
    }
}