//1. Function Declaration - Proper naming - camel case and descriptive with what it does
//We define a function on it's own and can assign it to a variable later
function add(a, b) {
  return a + b;
}
//Accessing function declaration
let total = add(1, 1);
console.log(total);
console.log("----------------------");

//2. Function Expression - Taking a series of statements and evaluating to a value which becomes a function object
//Used when you want to bind a function to a variable immediately, anonymous name but the variable should describe it
let greeting = function (name) {
  return "Hello " + name;
};
console.log(greeting("Joon")); // iIf we omit providing an argument, greeting returns what it is. Not the output.
console.log("----------------------");

//3. Arrow Function
//let add3 = function (a, b) { return a + b; };
let add3 = (a, b) => a + b;

//Notes:
//1. In js we can have multiple return values in a function
//2. Functions implicitly return undefined if there is no return statement
//3. Return types are also dynamic and derived at runtime
//4. You can pass any number of arguments and any type of argument

//No matter how many arguments are passed from client
//We can access them all using "arguments" object inside a function
//which acts as an array of all the arguments passed
function add() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(add(50, 50, 50, 50, 50));
console.log("----------------------");

//Rest parameters help to document your function a bit more "...functionObjectNameToUse"
function add(...numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

console.log(add(50, 50, 50, 50, 50));
console.log("----------------------");

//Scoping

//If you use a variable you don't define, a variable will be hoisted meaning it'll create a global variable
//In a function a function variable will be hoisted as well - NOTE: var automatically uses hoisted function scope and let uses block scope
//This is bad practice!

//Scope chain
//A variable not defined in a function will look for a matching global variable

var x = 1;
function parent() {
  var x = 2;
  // Overwrites global x

  function child(x) {
    // Override parent x
    console.log(x);
  }
  // Finds the nearest x in the scope chain
  child(5);
}

parent();
console.log("----------------------");

//Closures

function parent2() {
  var a = 7; // Think of this is as the starting point

  return function child2() {
    //Parent function is RETURNING THIS child function BIND to f. A CLOSURE is created here
    a = a + 1; //The first time around, a looks for a definition of a and finds 7
    return a; //Think of child2 as a saved snapshot by this point
  };
}

let f = parent2(); //Invokes parent 2 in entirety and returns child function
console.log(f()); //Invokes the child function and saves the state
console.log("----------------------");
console.log(f()); //Invokes the child function again

console.log("----------------------");

console.log("Test");
console.log("----------------------");

//Write a function called "mySenecaFunction" that accepts "name" and "program" as parameters. The function should console.log the following string: "name" is in "program". Call/invoke the function with your name and your Seneca program so it prints the correct result.
//i.e. Suluxan is in SDDS.

function mySenecaFunction(name, program) {
  console.log(`${name} is in ${program}.`);
}

let myName = "Joon";
let program = "SDDS";
mySenecaFunction(myName, program);
