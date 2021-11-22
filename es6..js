// ES6 Summary
// ---------------------------------------------------------let & const--------------------------------------------------------

// "let" which mean you can change the variable after you declare also.
// for instance

let documentName = "ES6";
documentName = "ES6 Summary";
console.log(documentName);

// "const" which mean you cannot change or reassign the variable or value after you declare once
// but array method like push or pop work

const myName = "Mananjay";
myName = "Mananjay shrestha";
console.log(myName);

//------------------------------------------------------- Arrow function-----------------------------------------------------

// "arrow function" is one of the features introduced in the ES6 version of JavaScript.
// It allows you to create functions in a cleaner way compared to regular functions.

// Before ES6 we make function like this

function lastYear() {
  return "This is last chance to achive a good result.";
}
console.log(lastYear());

// after es6 we make function like this

const finalYear = () => {
  return `This is a last chance to score a good mark.`;
};
console.log(finalYear());

// if we have to return a single value or single parameter in a function then we can write like this

const finalYearProject = (x) => x * 2;
console.log(finalYearProject(2));

//---------------------------------------------------- export & import module--------------------------------------------------

// "module " is used mostly when we have to pass the value from one file to another
// for instance

// i make one object with name person and one varibale with the name color in next file as name secondes6file
// now i will show how to acces that object or variable to this file
//  to access any value from other page or file or folder we have to used import

import person from "./secondes6file";

import { color } from "./secondes6file";

console.log(person());
console.log(color);

//---------------------------------------------------- spread & rest operator-------------------------------------------
// "spread & rest " is represent with three dot(...) followed by a variable name

// spread operator is used to manipulate the array and Object.
// We can make a copy of object and array and used where ever we need . for instance

// for array
let books = ["networking", "programming", "security"];
let extrabooks = [...books, "Database"];
console.log(extrabooks);
// for object
let laptop = {
  laptopName: "Dell",
  ram: "8GB",
};

let newLaptop = {
  ...laptop,
  processor: "7th generation",
};
console.log(newLaptop);

// rest operator is used when we have to pass multiple arugment and store all value as form of Array.
// It is used in function parameter. for instance

let numbers = (...allnumber) => {
  console.log(allnumber);
};
numbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// --------------------------------------------------class,inheritance and object--------------------------------------------

// class is like a blueprint of object where we make constructor inside that by default make a object with name this
class player {
  constructor(name, location, game) {
    this.names = name;
    this.address = location;
    this.games = game;
  }
  work() {
    console.log(
      `My name is ${this.names}. I live in ${this.address} and i love ${this.games}.`
    );
  }
}

let playerOne = new player("Mananjay", "Gwarko", "Football");
let playerTwo = new player("Minal", "Balkhu", "cricket");

console.log(playerOne);
console.log(playerOne.names);
console.log(playerTwo.work());

// inheritance maean inherit the property from main class to another class

class worker extends player {
  constructor(name, location, game, age) {
    super(name, location, game);
    this.age = age;
  }

  workerwork() {
    console.log(
      `My name is ${this.names}. I live in ${this.address} and i love ${this.games}. My age is ${this.age}`
    );
  }
}

let playerThree = new worker("Sujan", "Imadol", "Basketball", 26);
console.log(playerThree);

// --------------------------------------------------Destructing------------------------------------------------------------
//  Destructuring is a JavaScript expression that makes it possible to unpack values
// from arrays, or properties from objects, into distinct variables.
// for instance

// you make a array or object value as separet variable
let gadget = ["laptop", "phone", "tablet"];
let [l, p, t] = gadget;
console.log(l);
console.log(t);

let gamer = {
  names: "Utsav",
  lastname: "Shitaula",
};

let { names, lastname } = gamer;
console.log(names);
console.log(lastname);

//--------------------------------------------------- Reference & primitive type--------------------------------------------
// primitive type like string , number
// reference type like array , object

// JavaScript provides six primitive types as undefined, null, boolean, number, string, and symbol , and a reference type object.

// When you assign a variable that stores a primitive value to another,
// the value stored in the variable is created and copied into the new variable.
// Let’s take a look at the following example.

let mobileName = "Iphone7";
let anotherMobileName = mobileName;
value of mobileName is copy in anotherMobileName
console.log(mobileName);
console.log(anotherMobileName);

// Reference type
// When you assign a reference value from one variable to another,
//  the value stored in the variable is also copied into the location of the new variable.

let gadgetNepal = {
  gadgetName: "IphoneX",
  gadgetPrice: "120000",
};

let gadgetIndia = gadgetNepal;
It point the location of gag to gadgetIndia in reference type
gadgetIndia.gadgetName = "Iphone6s";
console.log(gadgetIndia);
console.log(gadgetNepal);

// ----------------------------------------------------filter & map---------------------------------------------------------

// map() creates a new array from calling a function for every array element.
// map() calls a function once for each element in an array.

let food = ["apple", "banana", "jerry"];

let newFood = food.map((items) => {
  console.log((items += 2));
});

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

let foodmandu = food.filter((items) => {
  if (items == "apple") {
    return items;
  }
});

console.log(foodmandu);
