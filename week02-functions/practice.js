//1. Given r (radius) of a circle, calculate the area of a circle (A = π * r * r).
function calculateArea(radius) {
  return Math.PI * radius * radius;
}
console.log("1.", calculateArea(50));
console.log("----------------------");

//2. Simulate rolling a dice using random(). The function should allow the caller
//to specify any number of sides, but default to 6 if no side count is given: roll()
//(assume 6 sided, return random number between 1 and 6) vs. roll(50) (50 sided, return number between 1 and 50).

//3. Write a function that converts values in Celcius to Farenheit: convert(0) should return "32 F".
let convertCelsius = (c) => {
  return (c * 9) / 5 + 32;
};
console.log("3. ", convertCelsius(0));
console.log("----------------------");

//4. Modify your solution to the previous function to allow a second argument:
// "F" or "C", and use that to determine what the scale of the value is,
//converting to the opposite: convert(122, "F") should return "50 C".

//5. Function taking any number of arguments (Numbers),
//returning true if they are all less than 50: isUnder50(1, 2, 3, 5, 4, 65) should return false.
let functionExpression = function (...numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 50) {
      return false;
    }
  }
  return true;
};
console.log("5. ", functionExpression(1, 2, 3, 4, 5));
console.log("----------------------");

//6. Function allowing any number of arguments (Numbers), returning their sum: sum(1, 2, 3) should return 6.
let arrowNotation = (...numbers) => {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
};
console.log("6. ", arrowNotation(1, 2, 3));
console.log("----------------------");

//7. Function allowing any number of arguments of any type, returns true
// only if none of the arguments is falsy. allExist(true, true, 1)
//should return true, but allExist(1, "1", 0) should return false.

//9. Function to check if a number is a multiple of 3 (returns true or false)
let multipleOfThree = (number) => {
  if (!(number % 3)) {
    return true;
  } else {
    return false;
  }
};
console.log("9. ", multipleOfThree(6));
console.log("----------------------");

//12. Function to subtract a discount % from a total. If no % is given, return the original value

//13. Function that takes a number of seconds as a Number, returning a String formatted like "X Days, Y Hours, Z Minutes" rounded to the nearest minute.

//14. Modify your solution above to only include units that make sense: "1 Minute" vs. "3 Hours, 5 Minutes" vs. "1 Day, 1 Hour, 56 Minutes" etc

//15. Function that takes any number of arguments (Numbers), and returns them in reverse order, concatenated together as a String: flip(1, 2, 3) should return "321"

//16. Function that takes two Numbers and returns their sum as an Integer value (i.e., no decimal portion): intSum(1.6, 3.333333) should return 4

//17. Function that returns the number of matches found for the first argument in the remaining arguments: findMatches(66, 1, 345, 2334, 66, 67, 66) should return 2

//19. Function that takes a String and returns its value properly encoded for use in a URL. prepareString("hello world") should return "hello%20world"

//20.Using the previous function, write an enclosing function that takes any number of String arguments and returns them in encoded form, concatenated together like so: "?...&...&..." where “…” are the encoded strings. buildQueryString("hello world", "goodnight moon") should return "?hello%20world&goodnight%20moon"
//Function that takes a Function followed by any number of Numbers, and applies the function to all the numbers, returning the total: applyFn(function(x) { return x * x;}, 1, 2, 3) should return 14.

//8.Function to create a JavaScript library name generator: generateName("dog") should return "dog.js"

//Standard function endsWith checks the last character
//Ternary expression
function generateName(courseName) {
  return courseName.endsWith(".") ? courseName + "js" : courseName + ".js";
}

let courseName = "web222";
console.log("8. ", generateName(courseName));
console.log("----------------------");

//10. Check if a number is between two other numbers, being inclusive if the final argument is true: checkBetween(66, 1, 50, true) should return false.
function checkBetween(value, low, high, inclusive) {
  if (inclusive) {
    return value >= low && value <= high;
  }
  return value > low && value < high;
}

console.log("10. ", checkBetween(5, 1, 50));
console.log("----------------------");

//18. Function to log all arguments larger than 255: showOutsideByteRange(1, 5, 233, 255, 256, 0) should log 256 to the console

//Function expression
//If you don't know how many arguments the function will take, just leave empty
//or use rest parameters
let showOutsideByteRange = function (...values) {
  for (let i = 0; i < values.length; i++) {
    if (values[i] > 255) {
      console.log("18. ", arguments[i]);
    }
  }
};

showOutsideByteRange(300, 50, 100);
console.log("----------------------");

//11. Function to calculate the HST (13%) on a purchase amount

function calculateHST(purchaseAmount) {
  let hst = 0.13;
  return `$${purchaseAmount * hst}`;
}

console.log("11. ", calculateHST(200));
console.log("----------------------");
