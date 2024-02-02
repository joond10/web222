//1. Write a function log that takes an Array of Strings and displays them on the console.
function log(arr) {
  arr.forEach(function (element) {
    console.log(`1. ${element}`);
  });
}
let arr = ["string1", "string2", "string3"];
log(arr);

//2. An application uses an Array as a Stack (LIFO) to keep track of items in a user’s shopping history.
//Every time they browse to an item, you want to addItemToHistory(item). How would you implement this?
function addItemToHistory(item) {
  shoppingHistory.push(item);
}

let shoppingHistory = [];
let s = "poop";
addItemToHistory(s);
console.log(shoppingHistory);

//3. Write a function buildArray that takes two Numbers, and returns an Array
//filled with all numbers between the given number: buildArray(5, 10) should return [5, 6, 7, 8, 9, 10]
function buildArray(num1, num2) {
  let arr = [];
  for (i = num1; i <= num2; i++) {
    arr.push(i); //Pushes a value into an array
  }
  return arr;
}
console.log(buildArray(5, 10));

//4. Write a function addDollars that takes an Array of Numbers
//and uses the array’s map() method to create and return a new Array
//with each element having a $ added to the front: addDollars([1, 2, 3, 4]) should return ['$1', '$2', '$3', '$4']
let numbers = [1, 2, 3, 4];
let addDollars = numbers.map(function (element) {
  return `$${element}`;
});

console.log(addDollars);

//5. Write a function tidy that takes an Array of Strings and uses the
//array’s map() method to create and return a new Array with each element
// having all leading/trailing whitespace removed: tidy([' hello', ' world ']) should return ['hello', 'world'].
let spaces = ["  hello", " world "];
let tidy = spaces.map(function (element) {
  // Remember that map is a transformative function and constructs a returns a new array
  return element.trim();
});
console.log(tidy);

//6. Write a function measure which takes an Array of Strings and uses the array’s
//forEach() method to determine the size of each string in the array, returning the total:
//measure(['a', 'bc']) should return 3. Bonus: try to rewrite your code using the Array’s reduce() method.
function measure(arrayOfStrings) {
  let total = 0;
  arrayOfStrings.forEach(function (element) {
    //For each does not return anything, think of it as a void return that operates on the elements by iterating
    total += element.length;
  });
  return total;
}
let array = ["a", "bc"];
console.log(measure(array));

//7. Write a function whereIsWaldo that takes an Array of Strings and uses the array’s forEach()
// method to create a new Array with only the elements that contain the text "waldo" or "Waldo”
//somewhere in them: whereIsWaldo(['Jim Waldorf, 'Lynn Waldon', 'Frank Smith']) should return 'Jim Waldorf, 'Lynn Waldon']

function whereIsWaldo(arrayOfStrings) {
  let waldoArray = [];

  arrayOfStrings.forEach(function (element) {
    if (element.includes("waldo") || element.includes("Waldo")) {
      waldoArray.push(element);
    }
  });
  return waldoArray;
}

console.log(
  whereIsWaldo(["Jim Waldorf", "Lynn Waldon", "Frank Smith", "Waldonius"])
);

//8. Write a function checkAges that takes two arguments: an Array of ages (Number); and a cut-off age (Number).
//Your function should return true if all of the ages in the Array are at least as old as the cut-off age:
//checkAges([16, 18, 22, 32, 56], 19) should return false and checkAges([16, 18, 22, 32, 56], 6) should return true.

function checkAges(arrayAges, min) {
  return arrayAges.every(function (element) {
    return element < min; // The every function iterates through each element and checks a condition and returns a boolean. If it's false, it stops iterating
  });
}
console.log(checkAges([16, 18, 22, 32, 56], 19));

//9. Write a function containsBadWord that takes two arguments: badWords (an Array of words that can’t be used),
// and userName (a String entered by the user). Check to see if any of the words in badWords are contained
// within userName. Return the badWord that was found, or null if none are found.

function containsBadWord(badWords, userName) {
  let badWord = null;
  badWords.forEach(function (element) {
    if (userName.includes(element)) badWord = element;
  });
  return badWord;
}
let badWords = ["shit", "bad"];
console.log(containsBadWord(badWords, "shithead123"));

//10. A String contains a Key/Value pair separated by a ":". Using String methods,
//how would you extract the two parts? Make sure you also deal with any extra spaces.
// For example, all of the following should be considered the same: "colour: blue", "colour:blue", "colour : blue", "colour: blue ".
// Bonus: how could you use a RegExp instead?

function extraction(fullString) {
  let arr = fullString.split(/\s*:\s*/); //Splits the full string into substrings at the delimiter and places it into a new array
  arr = arr.map(function (element) {
    //Takes care of leading whitespace
    //Transform the array using the map function to return something new to each element
    return element.trim();
  });
  let [key, value] = arr; //Destructure array
  return [key, value]; //Return it as an array or as an object
}

console.log(extraction("  colour    :blue"));

//11. A String named addresses contains a list of street addresses.
//Some of the addresses use short forms: "St." instead of "Street" and "Rd" instead of "Road".
// Using String methods, convert all these short forms to their full versions.

//The global (g) flag replaces all matches in string. Omitting the global flag would only return the first match
//It alters the replace method to iterate over until all matches are accounted for, we then do a callback function
//which uses the arguments of the replace function
let addresses = "John St.\nDerry Rd";
console.log(
  addresses.replace(/St\.|Rd/g, function (match) {
    return match === "St." ? "Street" : "Road";
  })
);
