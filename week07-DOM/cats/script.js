console.log("dogs!");

// Our entry point to the DOM from JavaScript is via the global variable window. Every web page runs in an environment created by the browser, and that environment includes a global variable named window, which is provided by the browser (i.e., we don’t create it). There are hundreds of Objects, methods, and properties available to our JavaScript code via window

//The event handler, which is provided by the DOM (e.g., onclick, onmouseover, etc.), is essentially a slot where you can plug in your own custom function definition.

//This is instantiating a variable and assigning it the element we find in the DOM
//After grabbing the element we can play with the attributes via variable
//Function expression

window.onload = function () {
  let img = document.getElementById("cat-picture");
  img.src = "https://cataas.com/cat";
};

//Function declaration, you can keep redefining the window property without breaking code
function loadCatPicture() {
  let img = document.getElementById("cat-picture");
  img.src = "https://cataas.com/cat";
}
window.onload = loadCatPicture;

//We can nest multiple functions
window.onload = function () {
  loadCatPicture();
  // Call the loadCatPicture function again in 5s
  setTimeout(loadCatPicture, 5 * 1_000 /* 5s = 5000ms */);
  //Load cat picture every click
  window.onclick = loadCatPicture;
};

//Practice with grabbing elements and creating elements
let header = document.createElement("h1");
let button = document.getElementById("btn");
let title = document.getElementById("title");
let box = document.getElementById("buttonbox");

//Practice with onclick property and event handling
button.onclick = function () {
  this.innerText = "Hello World!";
  title.innerText = "Title Swap!";
  header.innerText = "Appending text";
  box.appendChild(header);
};
