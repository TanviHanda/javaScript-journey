// let myDate = new Date()
// console.log(myDate.toString()); //Thu Jul 10 2025 02:34:04 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); //Thu Jul 10 2025
// console.log(myDate.toISOString()); //2025-07-10T02:34:50.612Z
// console.log(myDate.toLocaleDateString()); //7/10/2025
// console.log(myDate.toLocaleString()); //7/10/2025, 2:35:32 AM
// console.log(myDate.toJSON()); //2025-07-10T02:35:57.489Z
// console.log(typeof myDate); //object

// let myCreatedDate = new Date(2025,3,23)
// // console.log(myCreatedDate); // 2023-01-23T00:00:00.000Z
// console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023
// let myCreatedDate1 = new Date(2025,3,23,5,3) // we can also write this Date("2023-01-14") 
// console.log(myCreatedDate1.toLocaleString()); // 4/23/2025, 5:03:00 AM

// let myTimeStamp = Date.now()
// console.log(myTimeStamp); //1752115573166 in ms
// console.log(myCreatedDat.getTime());
// console.log(Math.floor(Date.now()/1000)); //1752115733

// let newDate = new Date()
// console.log(newDate); //2025-07-10T02:50:00.004Z
// console.log(newDate.getMonth()+1); //6 | current month

// newDate.toLocaleString('default',{
//     weekday:"long"
// })