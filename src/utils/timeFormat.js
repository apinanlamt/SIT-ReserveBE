// export const formatTime = (time) => {
//     const [hour, minute] = time.split(':');
//     return `${parseInt(hour)}h ${parseInt(minute)}m`;
//   };
  
//   export const isValidTimeRange = (startTime, endTime) => {
//     const start = new Date(`1970-01-01T${startTime}:00Z`);
//     const end = new Date(`1970-01-01T${endTime}:00Z`);
//     return end > start;
//   };
  
//   export const formatDateTime = (date, time) => {
//     const dateTime = new Date(`${date}T${time}:00`);
//     const options = {
//       day: '2-digit',
//       month: 'short',
//       year: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit',
//     };
//     return new Intl.DateTimeFormat('en-GB', options).format(dateTime);
//   };
  
//   export const isValidTimeFormat = (time) => {
//     const regex = /^([01]?[0-9]|2[0-3]):([0-5]?[0-9])$/;
//     return regex.test(time);
//   };

// utils/timeFormat.js

// ตรวจสอบว่าเวลาอยู่ในรูปแบบ HH:mm หรือไม่


// export const isValidTimeFormat = (time) => {
//     const regex = /^([0-1]?[0-9]|2[0-3]):([0-5]?[0-9])$/;
//     return regex.test(time);
//   };
  
//   // ตรวจสอบว่า endTime มากกว่า startTime หรือไม่
//   export const isValidTimeRange = (startTime, endTime) => {
//     const start = convertToMinutes(startTime);
//     const end = convertToMinutes(endTime);
//     return end > start;
//   };
  
//   // ฟังก์ชันแปลงเวลาเป็นนาที
//   const convertToMinutes = (time) => {
//     const [hours, minutes] = time.split(':').map(Number);
//     return hours * 60 + minutes;
//   };
  
//   // ฟังก์ชันจัดรูปแบบวันที่-เวลา
//   export const formatDateTime = (date, time) => {
//     const [hours, minutes] = time.split(':');
//     const formattedDate = new Date(date);
//     formattedDate.setHours(hours);
//     formattedDate.setMinutes(minutes);
//     formattedDate.setSeconds(0);
//     return formattedDate.toISOString(); // คืนค่าเป็น ISO String เช่น 2025-02-05T09:00:00.000Z
//   };


// utils/timeFormat.js

// ตรวจสอบว่าเวลาอยู่ในรูปแบบ HH:mm หรือไม่
export const isValidTimeFormat = (time) => {
    const regex = /^([0-1]?[0-9]|2[0-3]):([0-5]?[0-9])$/;
    return regex.test(time);
  };
  
  // ตรวจสอบว่า endTime มากกว่า startTime หรือไม่
  export const isValidTimeRange = (startTime, endTime) => {
    const start = convertToMinutes(startTime);
    const end = convertToMinutes(endTime);
    return end > start;
  };
  
  // ฟังก์ชันแปลงเวลาเป็นนาที
  const convertToMinutes = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };
  
  // ฟังก์ชันจัดรูปแบบวันที่-เวลา
  export const formatDateTime = (date, time) => {
    const [hours, minutes] = time.split(':');
    const formattedDate = new Date(date);
    formattedDate.setHours(hours);
    formattedDate.setMinutes(minutes);
    formattedDate.setSeconds(0);
    return formattedDate.toISOString(); // คืนค่าเป็น ISO String เช่น 2025-02-05T09:00:00.000Z
  };
  
  // ฟังก์ชัน timeFormat ที่แปลง seconds เป็นเวลารูปแบบ HH:mm:ss
  export const timeFormat = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    const formattedMinutes = minutes.toString();
    const formattedSeconds = secs.toString().padStart(2, "0");
    
    if (hours > 0) {
      const formattedHours = hours.toString().padStart(2, "0");
      return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }
    
    return `${formattedMinutes}:${formattedSeconds}`;
  };
  
  // ฟังก์ชัน timeFormatHMS ที่แสดงเป็นเวลาครบชั่วโมง นาที และวินาที
  export const timeFormatHMS = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    const formattedMinutes = minutes.toString();
    const formattedSeconds = secs.toString().padStart(2, "0");
    
    if (hours > 0) {
      const formattedHours = hours.toString();
      return `${formattedHours} hours ${formattedMinutes} min ${formattedSeconds} sec`;
    }
    
    return `${formattedMinutes} min ${formattedSeconds} sec`;
  };
  