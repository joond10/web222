////////////////////////////////////////////////////////////////////////////////
//Objects are maps which is a data structure composed of a collection of key and value pairs
//Analogy is a dictionary, a word being a key and the definition being the value
//You can think of an array as a key and value list, the key being the indices
//Objects store values by giving them keys but its unordered unlike an array
////////////////////////////////////////////////////////////////////////////////

//Empty array literal
let list = [];

//Empty object literal
let o = {};

//Object literal with a key/value pair
let o2 = { course: "web222" };

//Object literal with multiple key/value pair
let o3 = { course: "web222", section: "ncc" };

//Correct formatting
let courseInfo = {
  course: "web222",
  section: "ncc",
  school: "seneca",
};

//How to access these objects with dot notation
console.log(courseInfo.course);
//Index notation also works for working with variables or a keyname that is problematic because it's literal strings (like for, let, or some name)
console.log(courseInfo["course"]);

//Position of Toronto on a map
//43.6352, -79.3832

//The problem here is that if we wanna pass these values, we have to pass two values
let torontoLat = 43.6532;
let torontoLng = -79.3832;

//Array of numbers
//There's still a problem. Using numbered indices from an array is not expressive enough, especially with more data
let torontoArrayVersion = [43.6532, -79.3832];
torontoArrayVersion[0];
torontoArrayVersion[1];

//Object literal, much better
let toronto = {
  latitude: 43.6532,
  lng: -79.3832,
};

toronto.latitude;

//Now we can create complex but descriptive data types

let user = {
  firstName: "First",
  lastName: "Last",
  email: "first.last@email.com",
  loggedIn: false,
  lastLogin: new Date("..."),
  level: 3,
};

//How to integrate with functions
//Pass the whole stinkin' object!
//and return more than one thing!

function login(user) {
  return { firstName: "Joon", lastName: "Dong" };
}

//We can mark an array of multiple instantiations of an object
//Does not have to be named if it's within an array
let user = [

  {
    firstName: "First",
    lastName: "Last",
    email: "first.last@email.com",
    loggedIn: false,
    lastLogin: new Date("..."),
    level: 3,
  };

  {
    firstName: "First",
    lastName: "Last",
    email: "first.last@email.com",
    loggedIn: false,
    lastLogin: new Date("..."),
    level: 3,
  };

  {
    firstName: "First",
    lastName: "Last",
    email: "first.last@email.com",
    loggedIn: false,
    lastLogin: new Date("..."),
    level: 3,
  };

]

user[1].firstName;

let o = { name: "web222"};

//Getter
o.name;
//Setter - update an existing key's value or create and store a new key/value
o.name = "WEB222";
o.school = "Seneca";

//How to remove a value
o.school = null;
//How to remove a key and value
delete o.school;