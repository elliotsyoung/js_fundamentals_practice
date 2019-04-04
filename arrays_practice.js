let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// we can use a for "of" loop to iterate through every item

// the word "number" was arbitrary, we can choose any name we want.
// for (let number of arr) {
//   console.log(number);
// }

// some methods are attached to arrays themselves

// this code is identital to the code above
// arr.forEach(function(number) {
//   console.log(number);
// })

// Higher order functions are just functions that accept a function as a parameter or return a function as a result

// the filter function accepts a function that needs to return true or false if the element is to be kept in the returned array

let evenNumbers = arr.filter(num => {
  let shouldKeep = false;
  if (num % 2 === 0) {
    shouldKeep = true;
  }
  return shouldKeep;
})

let sumOfNumbers = arr.reduce((val, accumumulator) => {
  return val + accumumulator
}, 0)

let doubleAllNumbers = arr.map(val => {
  return val * 2;
})

console.log(doubleAllNumbers);
