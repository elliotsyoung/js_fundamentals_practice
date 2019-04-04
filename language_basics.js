// There are a few unusual langauge features in JS:

// 1. Variables are hoisted top the top wherever they are scoped if you use var.

console.log(name);

var name = "Elliot";

let obj = {
  name: "Justin",
  age: 29
}
//the code below will not throw an error, last_name is just undefined
console.log(obj.last_name);

// This leads to a common error in javascript, where you try to call a sub property of something that is undefined

// TypeError: Cannot read property 'say' of undefined
obj.last_name.say();

// let and
