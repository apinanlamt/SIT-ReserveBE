import db from "../config/database.js"

export const getAllRooms = async () => {
    const [response] = await db.promise().query('SELECT * FROM booking_sit.room');
    return response;
}

export const getRoomById = async (roomId) => {
    const [response] = await db.promise().query(
        'SELECT * FROM booking_sit.room WHERE room_id = ?', 
        [roomId]
    );
    return response[0];
}

export const createRoom = async (roomData) => {
    const [response] = await db.promise().query(
        'INSERT INTO booking_sit.room (room_id, room_name, area_name) VALUES (?, ?, ?)',
        [roomData.room_id, roomData.room_name, roomData.area_name]
    );
    return response;
}

export const updateRoom = async (roomId, roomData) => {
    const [response] = await db.promise().query(
        'UPDATE booking_sit.room SET room_name = ?, area_name = ? WHERE room_id = ?',
        [roomData.room_name, roomData.area_name, roomId]
    );
    return response;
}

export const deleteRoom = async (roomId) => {
    const [response] = await db.promise().query(
        'DELETE FROM booking_sit.room WHERE room_id = ?', 
        [roomId]
    );
    return response;
}