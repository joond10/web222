//An array is also an object in JS just like strings
//Comes with many methods, arrays are dynamic and can have any mix of types
//You don't have to specify any memory allocation or the size of the array

let arr = []; //valid initialization but undefined
let arr2 = [1, 2, 3];

//Shares similar functions with string object
/////////////////////////////////////////////

//1. Get the number of elements
console.log(arr2.length);
//2. Get index
console.log(arr2.indexOf(3));
//3. Does it include?
console.log(arr2.includes(3));

//Copying an array creates a reference
//////////////////////////////////////////////////////////////

names = ["WEB222", "WEB322", "WEB422"];
courses = names;
console.log(courses);
names[1] = "SFT221"; //Changing names affects courses array as well
console.log(courses); //Technically courses is a REFERENCE!

//What can we do with an empty array?
////////////////////////////////////

//1. We can put elements into an array after it's been created
arr[0] = 1;
//2. Pushing something to the next index at the end
//   Useful when starting off with empty array and adding data
arr.push("New element");
console.log(arr);

//How to pop something out of an array - removes the last element
/////////////////////////////////////////////////////////////////

let poppedElement = arr.pop();
console.log(poppedElement);

//How to shift elements to the right - add a new first element
arr.unshift(0);
console.log(arr);

//How to shift elements elements to the left - remove first element
arr.shift(0);
console.log(arr);

//Printing elements is similar to C++
/////////////////////////////////////
//For loop version 1
/////////////////////////////////////
let array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
  console.log(`Index ${i} =`, array[i]);
}

for (let i = 0; i < 100; i++) {
  array.push(i + 1);
}

console.log(array);

let words = ["one", "two", "three", "four", "five"];
for (let i = 0; i < words.length; i++) {
  let word = words[i];
  console.log(word);
}

/////////////////////////////////
//For loop version 2 - for of
////////////////////////////////
//Create variable word and assign incrementing elements of words into word
for (let word of words) {
  console.log(word);
}

////////////////////
//For loop version 3 - forEach()
////////////////////
//calls the provided function on each element in the array
// Remember it's just an iterator that performs an action.
// Doesn't return or transform anything, rather just performs operations.
words.forEach(function (word) {
  console.log(word);
});

//Map Method
////////////
// Creates and returns a new array constructed by calling the provided function on each element of the original array.
// Use when you want to transform each element of an array and create a new array of the same length.
let upperCaseWords = words.map(function (words) {
  return words.toUpperCase();
});
console.log(upperCaseWords);
//Does not change the original array
console.log(words);

//Filter method
///////////////
// Creates and returns a new array containing only those elements that match a condition you define in your function.
// Use when you want to selectively include elements in a new array based on a specific condition.
let fourWords = words.filter(function (words) {
  return words.length > 3;
});
console.log(fourWords);

//How to convert between strings and arrays
let nums = "1,2,3,4,5,6,7,8,9,10".split(","); //converts to array
console.log(nums);
nums = nums.join(","); //converts back to string comma delimited
console.log(nums);
