let button = document.querySelector(".add");
let links = document.querySelector("#links");
button.addEventListener("click", function () {
  let newInput = document.createElement("input");
  newInput.type = "url";
  newInput.name = "song-links";
  newInput.id = "song-links";
  links.appendChild(newInput);
});
