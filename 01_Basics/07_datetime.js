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
