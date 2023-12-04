// const fs = require("fs");

// const multiply = (a, b) => a * b;
// let n = multiply(5, 8);
// console.log(n);

// fs.writeFile("./hello.text", "hello!hahaha!", function () {
//   console.log("done creating file.");
// });
// fs.appendFile("./hello.text", "This is test!!!!", function () {
//   console.log("done appended file.");
// });

let daysOfWeek = require("./days-of-week");
let day = daysOfWeek.getWeekday(5);
// console.log(daysOfWeek);
console.log(day);
