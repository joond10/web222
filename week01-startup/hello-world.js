function greeting() {
  console.log("Hello World!");
}

//1. No need to compile and can't be run as is
//   JS is run inside a JS engine
//   Node.js is a JavaScript runtime built on Chrome's V8 engine
//   In the command line "node" followed by file name runs the code

//2. Run eval print loop (REPL)
//   A place where you can type a line of JS and test it kind of like scrap paper
//   It's like a JS command line, being able to program directly
//   In the command line "node" to activate node

//3. Functions require a function tag

//4. JS is a dynamically typed runtime language, the types are not known until runtime
//   Having said that, functions also do NOT require a return type

//5. Declare variables can be used with var but we use "let/const" as a modern approach

const pi = 3.14159; // Numbers
let radius = 4.2;
let area;

let s = "Hello World"; // String
let b = true; // Boolean
let o = new Object(); // Object with "o" being a reference
let n = null; // Defined to nothing
let u = undefined; // Undefined

//6. Backticks `` to string interpolate
//   or the other way
area = pi * radius * radius;
console.log(`Area = ${area}`);
console.log("Area = " + area);

// = Assignment
// == Compare (implicitly casts to make both types same)
// === Strict equal (checks for types), USE THIS
// !== Strict not equal, USE THIS

// Function call
greeting();
