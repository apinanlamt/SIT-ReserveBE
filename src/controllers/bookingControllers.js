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
            message: "Internal server error",
            error
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
            message: "Internal server error",
            error
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
            message: "Internal server error",
            error
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
            message: "Internal server error",
            error
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
            message: "Internal server error",
            error
        });
    }
}