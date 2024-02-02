//Objects within objects
//We want to encapsulate methods into our objects
let user = {
  firstName: "First", 
  lastName: "Last", 
  isLoggedIn: false,
  age: 19,
  list: [1, 2, 3, 4],
  pref:{
    colour: "red",
    width: 1024
  }
  score: null;
  login: function () {
    this.isLoggedIn = true; // current object
  },
}

//Setter to update
user.score = 43;

//How to invoke function
user.login();

//How to add a function 
user.logout = function() {
  this.isLoggedIn = false;
}

let user2; 
user2.firstName = user.firstName; //Copy object into new object (copy constructor)
user2.login = user.login; //You can also copy functions into a new object
user2.login();

//Similar to C++
//Uppercase letter indicates this is a CONSTRUCTOR
function User(fname, lname, age) {
  this.firstName = fname;
  this.lastName = lname;
  this.age = age;
  //default values
  this.isLoggedIn = false;
  this.pref = {
    color: "red", 
    width: 1024
  };
  this.score = 0;
}

//We want to do these for our methods that our repetitive for every instance to reduce redundancy in making a copy of the method code
//We can put these methods on a prototype level so they get shared with very instance
//For example methods like forEach live on the prototype of a String or Array object instead of on our actual variable 
User.prototype.login = function () {
  this.isLoggedIn = true;
}
User.prototype.logout = function () {
  this.isLoggedIn = false;
}

//Creates a new instance of User
let user = new User("Joon", "Dong");
let user2 = new User("Frank", "Lee");
let user3 = new User("Tyson", "Phan");

user2.login(); //VALID!

//////////////////////////////////////////////////

//Single argument constructor
function PhoneNumber(value) { 
  this.value = value;
}

//Putting a method on the prototype
PhoneNumber.prototype.getAreaCode = function() {
  let PhoneNumber = this.value;
  let matches = phoneNumber.match(/(\d{3})-?\d{4}/);
  if (matches) {
    return matches[1];
  }
  return phoneNumber
};


//Instantiate a new PhoneNumber object and initialize with single argument
let phoneNumber = new PhoneNumber("555-567-2431");
//Assign area code to object method
let AreaCode = phoneNumber.getAreaCode();
