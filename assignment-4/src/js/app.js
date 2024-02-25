/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       <Joon Dong>
 *      Student ID: <036262152>
 *      Date:       <SUBMISSION_DATE>
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { artists, songs } = window;

// For debugging, display all of our data in the console. You can remove this later.
console.log({ artists, songs }, "App Data");

//Ensure everything happens on DOM load up
window.onload = function () {
  //For each artist object in the artist array
  window.artists.forEach(function (artist) {
    //Make a button for the artist and dynamically add it to nav
    let artistButton = document.createElement("button");
    let nav = document.querySelector("#menu");
    artistButton.innerText = artist.name;
    nav.appendChild(artistButton);

    //Each button has an onclick function
    artistButton.addEventListener("click", function () {
      let selectedArtist = document.querySelector("#selected-artist");
      //Display the artist name and socials at the selected artist id
      selectedArtist.innerText = artist.name + " (";
      artist.url.forEach(function (link) {
        let socials = document.createElement("a");
        socials.href = link.url;
        //Formatting
        //If the index of the current url information is not the last
        if (artist.url.indexOf(link) !== artist.url.length - 1) {
          socials.textContent = link.name + ",";
          selectedArtist.appendChild(socials);
          selectedArtist.appendChild(document.createTextNode(" "));
          //Else if it is the last index
        } else {
          socials.textContent = link.name;
          selectedArtist.appendChild(socials);
          selectedArtist.appendChild(document.createTextNode(")"));
        }
      });
    });
  });
};
