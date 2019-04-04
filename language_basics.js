// There are a few unusual langauge features in JS:

// 1. Variables are hoisted top the top wherever they are scoped if you use var.

// console.log(name);

// var name = "Elliot";
//
// let obj = {
//   name: "Justin",
//   age: 29
// }
//the code below will not throw an error, last_name is just undefined
// console.log(obj.last_name);

// This leads to a common error in javascript, where you try to call a sub property of something that is undefined

// obj.last_name.say();
// TypeError: Cannot read property 'say' of undefined

// let and const are new features that should replace the word "var" because they fixed some of the old errors with the var keyword

// let and const are block scoped.

// the example below would should i as 20, since it is not block scoped

// for (var i = 0; i < 20; i++) {
//   console.log("");
// }
// console.log(i);

// When we use let in the example below, i is not defined outside the loop.

// for (let i = 0; i < 20; i++) {
//   console.log("");
// }
// console.log(i);


// const does not allow variable redeclaration but it does allow you to modify the variable itself


// this is the expected behavior
// const age = 25;
//
// age = 24;

// const obj1 = {
//   name: "Elliot"
// }
//
// obj1.age = 25;
//
// console.log(obj1);
//
// obj1.age = 19;
//
// console.log(obj1);

const people = [];

console.log(people);


people.push("Elliot")
people.push("Justin")
console.log(people);

people.pop();


//only the code below would actually throw an error
