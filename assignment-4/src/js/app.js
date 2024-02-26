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
      selectedArtist.appendChild(socials);
      selectedArtist.appendChild(document.createTextNode(" "));
    } else {
      socials.textContent = link.name;
      selectedArtist.appendChild(socials);
      selectedArtist.appendChild(document.createTextNode(")"));
    }
  });
}

function displaySongInfo(artistButton, artistID) {
  artistButton.addEventListener("click", function () {
    let table = document.querySelector("#songs");
    table.innerHTML = "";

    window.songs.forEach(function (song) {
      let row = document.createElement("tr");
      let songTitle = document.createElement("a");
      let yearRecorded = document.createElement("td");
      let duration = document.createElement("td");
      if (song.artistId === artistID && song.explicit) {
        songTitle.textContent = song.title;
        songTitle.href = song.url;
        songTitle.target = "_blank";
        yearRecorded.textContent = song.year;
        duration.textContent = song.duration;
        row.appendChild(songTitle);
        row.appendChild(yearRecorded);
        row.appendChild(duration);
        table.appendChild(row);
      }
    });
  });
}

function makeButtons() {
  window.artists.forEach(function (artist) {
    let artistButton = createArtistButton(artist);
    appendArtistButtonToNav(artistButton);
    displayArtistInfo(artistButton, artist);
    displaySongInfo(artistButton, artist.artistID);
  });
}

//Ensure everything happens on DOM load up
window.onload = function () {
  makeButtons();
};
