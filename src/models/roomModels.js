import db from "../config/database.js"

export const getAllRooms = async () => {
  const query = 'SELECT * FROM rooms';
  const [rows] = await db.promise(query);
  return rows;
};

// export default roomModels;