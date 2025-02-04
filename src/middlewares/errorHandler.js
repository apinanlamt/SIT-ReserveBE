// จัดการข้อผิดพลาดที่เกิดขึ้น
export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
};

export default errorHandler;