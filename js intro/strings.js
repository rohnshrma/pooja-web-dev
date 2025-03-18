// a sequence of characters(alpha, num, ss ,whitespace) enclosed in single, double quotes or backticks

// console.log(typeof "hello world");

// var yourName = prompt("Enter your name : ");
// console.log(typeof yourName);
// var yourAge = parseInt(prompt("Enter your name : "));
// console.log(typeof yourAge);

// ordered | indexed | unchangable | allows duplicates

var txt = "hello world this is john doe";

// console.log(txt.length);

// console.log(txt[0]);
// console.log(txt[txt.length - 1]);

// var fName = prompt("ENter your first name : ");
// var lName = prompt("ENter your last name : ");
// var age = parseInt(prompt("ENter your age : "));
// adding two or more string together

// console.log(
//   "hello world my name is " +
//     fName +
//     " " +
//     lName +
//     " and i am " +
//     age +
//     " years old."
// );

// template literal

// console.log(
//   `hello world my name is ${fName} ${lName} and i am ${age ** 2} years old.`
// );

// console.log(123 + 123);
// console.log(123 + "123");
// console.log(123 + +"123");
// console.log(123 + -"123");

// console.log(txt.toLowerCase());
// console.log(txt.toUpperCase());

// console.log(txt.at(0));
// console.log(txt.charAt(0));

// console.log(txt.at(-1));
// console.log(txt.charAt(-1));

// console.log(txt.slice(0, 4)); //0-3

// console.log(txt.split());
// console.log(txt.split(""));
// console.log(txt.split(" "));
// console.log(txt.split("o"));

// console.log("            hello      world          ".trim());
// console.log("            hello      world          ".trimStart());
// console.log("            hello      world          ".trimEnd());

// console.log(txt.includes("o", 5)); //search string , start position
// console.log(txt.startsWith("h")); //search string
// console.log(txt.startsWith(" ", 5)); //search string , start position

// console.log(txt.concat("and i am an alien too", " from planet mars"));

// console.log(txt.indexOf("o"));
// console.log(txt.indexOf("o", 5));
// console.log(txt.lastIndexOf("o"));

// console.log(txt.padEnd(40));
// console.log(txt.padStart(40));
// console.log(txt.padEnd(40, "abc"));
// console.log(txt.padStart(40, "&&&"));

// console.log(txt.replace("o", "x"));
// console.log(txt.replace(/o/g, "x"));

// console.log(txt.match(/o/g));
// console.log(txt.matchAll("o"));
