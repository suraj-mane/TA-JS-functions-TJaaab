// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
function addOne(num){
  return num + 1;
}

// - Write a Function Expression
const add = function addOne(num){
  return num + 1;
}

// - Write an Arrow Function without curly brackets(if possible)
const add = (num) => num + 1;

// - Write an Arrow Function with curly brackets
const add = (num) => {
  return num + 1 ;
}

// - Execute the function
add(21);

// - Execute the function and store the return value in a variable.
let display = add(21);
alert(display);

// - What is the typeof returnValue
// "Number";
/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function substractOne(num){
  return num -1 ;
}

// - Write a Function Expression
let sub = function substractOne(num){
  return num - 1;
}

// - Write an Arrow Function without curly brackets(if possible)
let sub = (num) =>  num - 1;

// - Write an Arrow Function with curly brackets
let sub = (num) => {
  return num - 1;
}
// - Execute the function
substractOne(21);

// - Execute the function and store the return value in a variable.
let display = substractOne(21);
alert(display);
// - What is the typeof returnValue
// number
/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum(numA, numB){
  return numA + numB;
}

// - Write a Function Expression
let addition = function sum(numA, numB){
  return numA + numB;
}
// - Write an Arrow Function without curly brackets(if possible)
let addition = (numA, numB) => numA + numB;
// - Write an Arrow Function with curly brackets
let addition = (numA, numB) => {
  return numA + numB;
}
// - Execute the function
sum(21,22);
// - Execute the function and store the return value in a variable
let display = sum(21,22);
// - What is the typeof returnValue
// value is number.
/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function square(num){
  return num * num;
}
// - Write a Function Expression
let mul = function square(num){
  return num * num;
}
// - Write an Arrow Function without curly brackets(if possible)
let mul = (num) => num * num;
// - Write an Arrow Function with curly brackets
let mul = (num) => {
  return num * num;
}
// - Execute the function
square(5);
// - Execute the function and store the return value in a variable
let display = square(5);
alert(display);
// - What is the typeof returnValue
// Number;
/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isGreater(x, y){
  if(x > y){
    return false;
  }
}
// - Write a Function Expression
let campear = function isGreater(x, y){
  if(x > y){
    return false;
  }
}

// - Write an Arrow Function without curly brackets(if possible)
let compare = (x, y) => (x > y) ? "flase": "true";
// - Write an Arrow Function with curly brackets
let compare = (x, y) => {
  if(x > y){
    return "false";
  }
}
// - Execute the function 
isGreater(10, 20);
// - Execute the function and store the return value in a variable
let max = isGreater(x, y);
// - What is the typeof returnValue
// number;
/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven(num) {
  if(num % 2 !== 0){
    return "Number is odd` for odd number";
  } else {
    return "Number is even` for even number";
  }
}

// - Write an anonymous Function Expression
let number = function (num) {
  if(num % 2 !== 0){
    return "Number is odd` for odd number";
  } else {
    return "Number is even` for even number";
  }
}

// - Write an named Function Expression
let number = function oddOrEven(num) {
  if(num % 2 !== 0){
    return "Number is odd` for odd number";
  } else {
    return "Number is even` for even number";
  }
}
// - Write an Arrow Function without curly brackets (hint: use ternary operator)
let number = (num) => (num % 2 !== 0) ? "Number is odd` for odd number" :  "Number is even` for even number";
// - Write an Arrow Function with curly brackets
let number = (num) => {
  if(num % 2 !== 0){
    return "Number is odd` for odd number";
  } else {
    return "Number is even` for even number";
  }
}
// - Execute the function
oddOrEven(2);
// - Execute the function and store the return value in a variable
let display = oddOrEven(2);
// - What is the typeof returnValue
// number;