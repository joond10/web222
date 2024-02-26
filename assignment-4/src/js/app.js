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

function createArtistButton(artist) {
  let artistButton = document.createElement("button");
  artistButton.innerText = artist.name;
  return artistButton;
}

function appendArtistButtonToNav(artistButton) {
  let nav = document.querySelector("#menu");
  nav.appendChild(artistButton);
}

function displayArtistInfo(artistButton, artist) {
  artistButton.addEventListener("click", function () {
    let selectedArtist = document.querySelector("#selected-artist");
    selectedArtist.innerText = artist.name + " (";
    createSocialLinks(artist, selectedArtist);
  });
}

function createSocialLinks(artist, selectedArtist) {
  artist.url.forEach(function (link, index) {
    let socials = document.createElement("a");
    socials.href = link.url;
    socials.target = "_blank";

    if (index < artist.url.length - 1) {
      socials.textContent = link.name + ",";
    } else {
      socials.textContent = link.name;
    }

    selectedArtist.appendChild(socials);

    if (index < artist.url.length - 1) {
      selectedArtist.appendChild(document.createTextNode(" "));
    }
  });
}

function displaySongs() {
  window.songs.forEach(function (songs) {});
}

function makeButtons() {
  window.artists.forEach(function (artist) {
    let artistButton = createArtistButton(artist);
    appendArtistButtonToNav(artistButton);
    displayArtistInfo(artistButton, artist);
  });
}

/*
window.songs.forEach(function (song) {
  if (song.artistId === 'AID-1') {
  let table = document.querySelector('#songs');
  let row = document.createElement("tr");
  row.innerText = song.title;
  table.appendChild(row);
}
*/

//Ensure everything happens on DOM load up
window.onload = function () {
  //For each artist object in the artist array
  makeButtons();
};
