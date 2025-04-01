// calcBmi(1.9, 90);
// function calcBmi() {
//   var weigth = parseInt(prompt("Enter your weigth in kg's : "));
//   var heigth = parseFloat(prompt("Enter your heigth in meter's : "));
//   var bmi = weigth / heigth ** 2;
//   if (bmi < 18.5) {
//     console.log("Underweight");
//   } else if (bmi >= 18.5 && bmi <= 24.9) {
//     console.log("Normal Weight");
//   } else if (bmi >= 25 && bmi <= 29.9) {
//     console.log("OverWeight");
//   } else {
//     console.log("Obesse");
//   }
// }

// function calcBmi(height, weight) {
//   var bmi = weight / height ** 2;
//   if (bmi < 18.5) {
//     console.log("Underweight");
//   } else if (bmi >= 18.5 && bmi <= 24.9) {
//     console.log("Normal Weight");
//   } else if (bmi >= 25 && bmi <= 29.9) {
//     console.log("OverWeight");
//   } else {
//     console.log("Obesse");
//   }
// }

// calcBmi(1.8, 100);
// calcBmi(1.8, 80);
// calcBmi(1.8, 90);

// function expressions

// arrow and anonymous function

// var add = function (x, y) {
//   console.log(x + y);
// };

// (function () {
//   console.log("hello world");
// })();

// var add = (a, b) => {
//   console.log(a + b);
// };

// var greeting = (name) => name.toUpperCase();

// var sq = (num) => num ** 2;

// callbacks
// when a function is passed into another function as a parameter , the passed function is
// called a callback function

// const calcAge = (yob) => new Date().getFullYear() - yob;

// const lifeSpan = (average_age, yob, cb) => average_age - cb(yob);

// var yearsLeft = lifeSpan(90, 1999, (yob) => new Date().getFullYear() - yob);
// console.log(
//   `Years Left : ${yearsLeft}\nMonths Left : ${yearsLeft * 12}\nWeeks Left : ${
//     yearsLeft * 52
//   }\nDays Left : ${yearsLeft * 365}`
// );
