// create a object

let myDate = new Date();

console.log(myDate); // 2024-08-16T17:52:13.595Z (obj)
console.log(myDate.toString()); // Fri Aug 16 2024 23:30:48 GMT+0530 (India Standard Time)

console.log(myDate.toDateString()); // Fri Aug 16 2024
console.log(myDate.toTimeString()); // 23:33:43 GMT+0530 (India Standard Time)
console.log(myDate.toISOString()); // same as mydate
console.log(myDate.toJSON()); // same as mydate
console.log(myDate.toLocaleDateString()); // 16/8/2024
console.log(myDate.toLocaleTimeString()); // 11:33:43 pm
console.log(myDate.toLocaleString()); // 16/8/2024, 11:33:43 pm
console.log(myDate.toUTCString()); // Fri, 16 Aug 2024 18:03:43 GMT


let ownDate = new Date(2023, 2, 14, 1, 59, 6, 78); // (year, month_Index [start with 0], date, hour, mins, sec, milisec)
// let twodate = new Date("2023-01-14") // month is real (change structure)

let myTimeStamp = Date.now();
// current mili-seconds time through (1, jan 1970 UTC)
console.log(myTimeStamp); // 1724295972449

console.log(ownDate.getTime()); // return timestamp value

