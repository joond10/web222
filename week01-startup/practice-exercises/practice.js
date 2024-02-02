// 1. Create a variable label and assign it the value "senecacollege".
// Create another variable tld and assign it "ca".
// Create a third variable domainName that combines label and tld to produce the value "senecacollege.ca".
let label = "senecacollege";
let tld = ".ca";
let domainName = label + tld;
console.log("1. ", domainName);

// 2. Create a variable isSeneca and assign it a boolean value (true or false)
// depending on whether or not domainName is equal to "senecacollege.ca".
// HINT: use === and don’t write true or false directly.
let isSeneca = domainName === "senecacollege.ca";
console.log("2. ", isSeneca);

//3. Create a variable isNotSeneca and assign it the inverse boolean
// value of isSeneca. HINT: if isSeneca is true, isNotSeneca should be false.
let isNotSeneca = !isSeneca;
console.log("3. ", isNotSeneca);

//4. Create four variables byte1, byte2, byte3, byte4, and assign each of these a value in the range 0-255.
let byte1 = 65;
let byte2 = 75;
let byte3 = 85;
let byte4 = 95;

//5. Convert byte1 to a String using .toString(), and console.log() the result. What happens if you use toString(2) or toString(16) instead?
// 2 converts it to a binary string and 16 converts it to a hex-decimal string
console.log("5. ", byte1.toString(16));

//6. Create a variable ipAddress and assign it the value of combining
// your four byteN variables together, separated by ".". For example: "192.168.2.1".
let ipAddress = byte1 + "." + byte2 + "." + byte3 + "." + byte4;
console.log("6. ", ipAddress);

//7.Create a variable ipInt and assign it the integer value of bit-shifting (<<) and adding your byteN variables.
//HINT: your ipInt will contain 32 bits, the first byte needs to be shifted 24 bit positions (<< 24) so it occupies 32-25, the second shifted 16, the third 8.
let ipInt = (byte1 << 24) + (byte2 << 16) + (byte3 << 8);
console.log("7. ", ipInt);

//8. Create a variable ipBinary that contains the binary representation of the ipInt value. HINT: use .toString(2) to display the number with 1 and 0 only.
let ipBinary = ipInt.toString(2);
console.log("8. ", ipBinary);

//9. Create a variable statusCode, and assign it the value for the
// “I’m a teapot” HTTP status code. HINT: see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
let statusCode = 418;

//10. Write an If statement that checks to see if your statusCode
// is a 4xx client error. HINT: use the <, >, >=, and/or <= operators to test the value
if (statusCode > 400 && statusCode < 499) {
  console.log("10. Status code is a 4xx client error");
} else {
  console.log("10. Status code is not a 4xx client error");
}

//11. Write a switch statement that checks your statusCode for all possible 1xx information responses.
//In each case, you should console.log() the response text associated with the status code,
// or "unknown information response" if the status code is not known.
switch (statusCode) {
  case 100: {
    console.log("11. Continue");
    break;
  }
  case 101: {
    console.log("11. Switching Protocol");
    break;
  }
  case 102: {
    console.log("11. Processing");
    break;
  }
  case 103: {
    console.log("11. Early hints");
    break;
  }
  default: {
    console.log("11. unknown information response");
  }
}

//12.Write a function is2xx(status) which takes a status code status
//(e.g., 200) and returns true if the status code is a valid 2xx code.
function is2xx(status) {
  return status >= 200 && status <= 299;
}
console.log("12. ", is2xx(250));

//13. Create a variable studentName and assign your name. Create another variable studentAge and assign it your age. Use console.log()
//  to print out a sentence that includes both variables, like "Alice is 20 years old.".
let studentName = "Joon Dong";
let studentAge = 26;
//console.log(studentName, "is", studentAge, "years old."); cannot concatenate, comma delimited or
console.log(`${studentName} is ${studentAge} years old.`); //interpolate preferred

//14. Create a variable isEven and assign it a boolean value (true or false)
//depending on whether a given number num is even or not. HINT: use the modulus operator %.
let num = 10;
let isEven = num % 2 === 0;
console.log(`14. Is ${num} even? ${isEven}`);

//15. Create a variable isOdd and assign it the inverse
//boolean value of isEven. HINT: if isEven is true, isOdd should be false.
let isOdd = !isEven;
console.log("15. Is 10 odd?", isOdd);

//16. Create a variable radius and assign it a value of 10.
//Calculate the area of a circle with this radius and assign
//the result to a variable area. HINT: use Math.PI and the formula area = πr^2.
let radius = 10;
let area = Math.PI * radius * radius;
console.log("16. ", area);

//17. Create a variable temperatureInCelsius and assign it a value.
//Convert this temperature to Fahrenheit and assign the result to a
//variable temperatureInFahrenheit. HINT: use the formula F = C * 9/5 + 32.
let temperatureInCelsius = 69;
let temperatureInFahrenheit = (temperatureInCelsius * 9) / 5 + 32;
console.log(
  `17. ${temperatureInCelsius} in celsius is ${temperatureInFahrenheit} in fahrenheit`
);

//18. Create a variable heightInFeet and assign it a value.
//Convert this height to meters and assign the result to a variable heightInMeters.
// HINT: use the conversion factor 1 foot = 0.3048 meters.
let heightInFeet = 6;
let heightInMeters = heightInFeet * 0.3048;
console.log(`18. ${heightInFeet} in feet is ${heightInMeters} in meters`);

//19. Create a variable seconds and assign it a value.
//Convert this time to minutes and seconds (e.g., 90 seconds becomes 1 minute and 30 seconds)
//and assign the result to two variables minutes and remainingSeconds.
let seconds = 90;
let minutes = Math.floor(seconds / 60); // Math.floor function rounds down
let remainingSeconds = seconds % 60;
console.log(
  `19. ${seconds} seconds is ${minutes} in minutes and ${remainingSeconds} remaining seconds`
);

//20. Create a variable score and assign it a value. Write an if statement that
//checks if the score is an A (90-100), B (80-89), C (70-79), D (60-69), or F (below 60)
//and assigns the result to a variable grade.
let score = 80;
let grade = null;
if (score >= 90) {
  grade = "A";
  console.log(`20. Your grade is an ${grade}`);
} else if (score >= 80) {
  grade = "B";
  console.log(`20. Your grade is a ${grade}`);
} else if (score >= 70) {
  grade = "C";
  console.log(`20. Your grade is a ${grade}`);
} else if (score >= 60) {
  grade = "D";
  console.log(`20. Your grade is a ${grade}`);
} else {
  grade = "F";
  console.log(`20. Your grade is an ${grade}`);
}

//21. Write a switch statement that checks the value of a variable day and
//console.log()s whether it is a weekday or weekend. HINT: day can be a value from 1 (Monday) to 7 (Sunday).
let day = 6;
switch (day) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5: {
    console.log("21. It's a weekday");
    break;
  }
  case 6:
  case 7: {
    console.log("21. It's a weekend");
    break;
  }
  default: {
    console.log("21. Invalid!");
  }
}
//22. Write a function isPositive(num) which takes a number num
//and returns true if the number is positive and false otherwise.
function isPositive(num) {
  return num > 0;
}
console.log("22. Is", isPositive(5));
//23. Write a function isLeapYear(year) which takes a year year and returns true if the year is a leap year and false otherwise.
//HINT: a leap year is divisible by 4, but not by 100, unless it is also divisible by 400.
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log("23. Is 2024 a leap year?", isLeapYear(2024));

//24. Write a function getDayOfWeek(day) which takes a number day (from 1 to 7)
//and returns the day of the week as a string (e.g., “Monday”).
function getDayOfWeek(day) {
  switch (day) {
    case 1:
      console.log("24. Monday");
      break;
    case 2:
      console.log("24. Tuesday");
      break;
    case 3:
      console.log("24. Wednesday");
      break;
    case 4:
      console.log("24. Thursday");
      break;
    case 5:
      console.log("24. Friday");
      break;
    case 6:
      console.log("24. Saturday");
      break;
    case 7:
      console.log("24. Sunday");
      break;
  }
}
getDayOfWeek(4);

//25. Write a function getFullName(firstName, lastName)
// which takes two strings firstName and lastName and returns the full name as a single string.
function getFullName(firstName, lastName) {
  console.log(firstName + lastName);
}
getFullName("25. Joon ", "Dong");
//26. Write a function getCircleArea(radius) which takes a number radius and returns the area of a circle with that radius.
//27. Write a function getHypotenuse(a, b) which takes two numbers a and b (the lengths of the two sides of a right triangle) and returns the length of the hypotenuse. HINT: use the Pythagorean theorem and Math.sqrt() to calculate the square root.
