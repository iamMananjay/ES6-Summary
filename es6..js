// ES6 Summary
// ---------------------------------------------------------let & const--------------------------------------------------------

// "let" which mean you can change the variable after you declare also.
// for instance

// let documentName = "ES6";
// documentName = "ES6 Summary";
// console.log(documentName);

// "const" which mean you cannot change or reassign the variable or value after you declare once
// but array method like push or pop work

// const myName = "Mananjay";
// myName = "Mananjay shrestha";
// console.log(myName);

//------------------------------------------------------- Arrow function-----------------------------------------------------

// "arrow function" is one of the features introduced in the ES6 version of JavaScript.
// It allows you to create functions in a cleaner way compared to regular functions.

// Before ES6 we make function like this

// function lastYear() {
//   return "This is last chance to achive a good result.";
// }
// console.log(lastYear());

// after es6 we make function like this

// const finalYear = () => {
//   return `This is a last chance to score a good mark.`;
// };
// console.log(finalYear());

// if we have to return a single value or single parameter in a function then we can write like this

// const finalYearProject = (x) => x * 2;
// console.log(finalYearProject(2));

//---------------------------------------------------- export & import module--------------------------------------------------

// "module " is used mostly when we have to pass the value from one file to another
// for instance

// i make one object with name person and one varibale with the name color in next file as name secondes6file
// now i will show how to acces that object or variable to this file
//  to access any value from other page or file or folder we have to used import

// import person from "./secondes6file";

// import { color } from "./secondes6file";

// console.log(person());
// console.log(color);

//---------------------------------------------------- spread & rest operator-------------------------------------------
// "spread & rest " is represent with three dot(...) followed by a variable name

// spread operator is used to manipulate the array and Object.
// We can make a copy of object and array and used where ever we need . for instance

// for array
// let books = ["networking", "programming", "security"];
// let extrabooks = [...books, "Database"];
// console.log(extrabooks);

// for object
// let laptop = {
//   laptopName: "Dell",
//   ram: "8GB",
// };

// let newLaptop = {
//   ...laptop,
//   processor: "7th generation",
// };
// console.log(newLaptop);

// rest operator is used when we have to pass multiple arugment and store all value as form of Array.
// It is used in function parameter. for instance

// let numbers = (...allnumber) => {
//   console.log(allnumber);
// };
// numbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// --------------------------------------------------class,inheritance and object--------------------------------------------
// --------------------------------------------------Destructing------------------------------------------------------------
//--------------------------------------------------- Reference & primitive type--------------------------------------------
// ----------------------------------------------------filter & map---------------------------------------------------------
