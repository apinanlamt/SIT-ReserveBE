// import * as bookingModels from '../models/bookingModels.js';
// import{isValidTimeRange, formatDateTime, isValidTimeFormat } from '../utils/timeFormat.js';


// export const createBooking = async (req, res) => {
//   try {
//     const { bookingDate, roomId, startTime, endTime, status = 'pending' } = req.body;

//     if (!isValidTimeFormat(startTime) || !isValidTimeFormat(endTime)) {
//       return res.status(400).json({ message: 'Invalid time format, use HH:mm' });
//     }

//     if (!isValidTimeRange(startTime, endTime)) {
//       return res.status(400).json({ message: 'End time must be after start time' });
//     }

//     const formattedDateTime = formatDateTime(bookingDate, startTime);
//     console.log(`Booking at: ${formattedDateTime}`);

//     await bookingModels.createBooking(req.body);
//     res.status(201).json({ message: 'Booking created successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error creating booking', error });
//   }
// };

// export const updateBookingStatus = async (req, res) => {
//   try {
//     const { bookingId } = req.params;
//     const { status } = req.body;

//     await bookingModels.updateBookingStatus(bookingId, status);
//     res.status(200).json({ message: 'Booking status updated successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error updating booking status', error });
//   }
// };

// export const getAllBookings = async (req, res) => {
//   try {
//     const bookings = await bookingModels.getAllBookings();
//     res.status(200).json({ bookings });
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching bookings', error });
//   }
// };

// export const deleteBooking = async (req, res) => {
//   try {
//     const { bookingId } = req.params;
//     await bookingModels.deleteBooking(bookingId);
//     res.status(200).json({ message: 'Booking deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error deleting booking', error });
//   }
// };


// import * as bookingModels from '../models/bookingModels.js';
// import { isValidTimeRange, formatDateTime, isValidTimeFormat } from '../utils/timeFormat.js';

// export const createBooking = async (req, res) => {
//   try {
//     const { bookingDate, roomId, startTime, endTime, status = 'pending' } = req.body;

//     // Validate time format
//     if (!isValidTimeFormat(startTime) || !isValidTimeFormat(endTime)) {
//       return res.status(400).json({
//         success: false,
//         message: 'Invalid time format, use HH:mm'
//       });
//     }

//     // Validate time range
//     if (!isValidTimeRange(startTime, endTime)) {
//       return res.status(400).json({
//         success: false,
//         message: 'End time must be after start time'
//       });
//     }

//     // Format booking datetime
//     const formattedDateTime = formatDateTime(bookingDate, startTime);
//     console.log(`Booking at: ${formattedDateTime}`);

//     await bookingModels.createBooking(req.body);
//     return res.status(201).json({
//       success: true,
//       message: 'Booking created successfully'
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({
//       success: false,
//       message: 'Error creating booking',
//       error: error.message
//     });
//   }
// };

// export const updateBookingStatus = async (req, res) => {
//   try {
//     const { bookingId } = req.params;
//     const { status } = req.body;

//     await bookingModels.updateBookingStatus(bookingId, status);
//     return res.status(200).json({
//       success: true,
//       message: 'Booking status updated successfully'
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({
//       success: false,
//       message: 'Error updating booking status',
//       error: error.message
//     });
//   }
// };

// export const getAllBookings = async (req, res) => {
//   try {
//     const bookings = await bookingModels.getAllBookings();
//     return res.status(200).json({
//       success: true,
//       data: bookings,
//       message: 'Bookings retrieved successfully'
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({
//       success: false,
//       message: 'Error fetching bookings',
//       error: error.message
//     });
//   }
// };

// export const deleteBooking = async (req, res) => {
//   try {
//     const { bookingId } = req.params;
//     await bookingModels.deleteBooking(bookingId);
//     return res.status(200).json({
//       success: true,
//       message: 'Booking deleted successfully'
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({
//       success: false,
//       message: 'Error deleting booking',
//       error: error.message
//     });
//   }
// };


import * as bookingModels from '../models/bookingModels.js';
import { isValidTimeRange, formatDateTime, isValidTimeFormat, timeFormat } from '../utils/timeFormat.js';

export const createBooking = async (req, res) => {
  try {
    const { bookingDate, roomId, startTime, endTime, status = 'pending' } = req.body;

    // Validate time format
    if (!isValidTimeFormat(startTime) || !isValidTimeFormat(endTime)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid time format, use HH:mm'
      });
    }

    // Validate time range
    if (!isValidTimeRange(startTime, endTime)) {
      return res.status(400).json({
        success: false,
        message: 'End time must be after start time'
      });
    }

    // Format booking datetime
    const formattedDateTime = formatDateTime(bookingDate, startTime);
    console.log(`Booking at: ${formattedDateTime}`);

    // ใช้ timeFormat เพื่อแสดงเวลาที่จองในรูปแบบ HH:mm:ss
    const bookingDurationInSeconds = 3600; // ตัวอย่างการแปลงจากวินาทีเป็นเวลา
    const formattedDuration = timeFormat(bookingDurationInSeconds);

    console.log(`Booking Duration: ${formattedDuration}`);

    // บันทึกการจองห้อง
    await bookingModels.createBooking(req.body);
    
    // ส่งผลลัพธ์กลับ
    return res.status(201).json({
      success: true,
      message: 'Booking created successfully',
      bookingDuration: formattedDuration, // ส่งกลับเวลาที่ใช้ในการจอง (ตัวอย่าง)
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Error creating booking',
      error: error.message
    });
  }
};

export const updateBookingStatus = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const { status } = req.body;

    await bookingModels.updateBookingStatus(bookingId, status);
    return res.status(200).json({
      success: true,
      message: 'Booking status updated successfully'
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Error updating booking status',
      error: error.message
    });
  }
};

export const getAllBookings = async (req, res) => {
  try {
    const bookings = await bookingModels.getAllBookings();
    return res.status(200).json({
      success: true,
      data: bookings,
      message: 'Bookings retrieved successfully'
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Error fetching bookings',
      error: error.message
    });
  }
};

export const deleteBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;
    await bookingModels.deleteBooking(bookingId);
    return res.status(200).json({
      success: true,
      message: 'Booking deleted successfully'
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Error deleting booking',
      error: error.message
    });
  }
};
