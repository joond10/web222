//Instantiating regular expressions
///////////////////////////////////
//Reg expressions are useful for taking an input string and using object methods with it

//1. Reg exp literal <- Preferred
let re = /abc/;
//2. New reg exp
let re2 = new RegExp("abc");

//Reg exp review
////////////////

// /something|otherthing/g  matches both
//'.' matches any character once
//'*' matches any character zero or more
//'+' matches any character one or more
//'?' matches any character zero or one times (optional)
//{5} specifies amount of repetition
//[matchwhateverinhere]
//[^everythingnotinhere]
//\d matches any digit character || opposite would be \D
//\w matches any alphanumeric character || opposite would be \W
//\s matches any whitespace characters || opposite would be \S
//(capture grouping)*
//^ anchoring meaning it must match the start of the input string
//$ anchoring meaning it must match the end of the input string

let digitsOnlyRe = /\d{4}/;
console.log(digitsOnlyRe.test("1234")); //Can test for truthy or falsy whether an input string matches our reg expression

let s1 = "web222@gmail.ca";
console.log(s1.match(/(\w+)@([\w.]+)/)); //Matches any number of alphanumeric words @ delimited and matches any word with or without '.'
let matchParts = s1.match(/(\w+)@([\w.]+)/);
console.log(matchParts[1], matchParts[2]); //Can use it as an array after its been matched based on grouping, notice the soft brackets

let s2 = "This is a string and it has spaces";
s2 = s2.replace(/\s/g, "_"); //Replaces any global whitespace with the second argument
console.log(s2);

let s3 = "1,2, 3,  4, 5"; //Has inconsistent spacing
s3 = s3.split(/,\s*/); //Splits the string by comma followed by any number of space
console.log(s3);
