//When you declare a string, it automatically instantiates an object of  string class
//which allows us to use the methods from string "string.len"

//String concatenation
//////////////////////
//1. Can concatenate inside console.log
let s =
  "The sky above the port was the color of television, tuned to a dead channel";
console.log(s + ".");

//2. Can concatenate in initialization
let sentence = s + ".";
console.log(sentence);

//3. Concatenating multiple strings
let quote = '"' + s + '"';
console.log(quote);

//4. Template literal allows for interpolation (more modern approach)
//Can concatenate by interpolating, must use back ticks `
let quote2 = `"${sentence}"`;
console.log(quote2);
//You can interpolate pretty much any expression
let s2 = `The answer to 2 + 2 = ${2 + 2}`;
console.log(s2);

//Finding things in string
/////////////////////////

//1. Gives us the last character using the s.length property
console.log(s[s.length - 1]);
//2. Returns char at index passed to this function
console.log(s.charAt(15));
//3. Returns the index of char or string passed to this function - will return -1 if it doesn't exist
console.log(s.indexOf("above"));
//4. Returns the index of the last string specified reading from right to left
console.log(s.lastIndexOf("e"));

//Boolean string functions
//////////////////////////
//1. Returns true if starts with passed substring
console.log(s.startsWith("T"));
//2. Returns true if string includes substring
console.log(s.includes("The"));

//Practice function
///////////////////
function addPeriod(value) {
  return value.endsWith(".") ? value : `${value}.`;
}
console.log(addPeriod(s));
console.log(addPeriod(s + "."));

//Some more interesting string functions
////////////////////////////////////////
//1. s.trim() removes whitespace
s2 = `                                      ${s}`; //Adding whitespace
console.log(s2);
console.log(s2.trim()); // Removes whitespace (does not assign);
//2. s.replace(src, destination) replaces a string with another string
console.log(s.replace("color", "colour"));

//Chaining
//////////

function afterComma(value) {
  let commaPos = value.indexOf(",");
  if (commaPos === -1) {
    return value;
  }
  //Chaining multiple string functions
  return value.slice(commaPos + 1).trim();
}

console.log(afterComma(s));
