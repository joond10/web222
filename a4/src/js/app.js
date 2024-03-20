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
//////////////////////////////////////////////////////////////////
//Artist info functions
//////////////////////////////////////////////////////////////////

//Create and return button element
function createArtistButton(artist) {
  let artistButton = document.createElement("button");
  artistButton.innerText = artist.name;
  return artistButton;
}

//Append artist button to menu
function addToMenu(artistButton) {
  let menu = document.querySelector("#menu");
  menu.appendChild(artistButton);
}

//Helper function creates social links
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

//Button on click puts artist name and social links in an h2 element
function displayArtistInfo(artistButton, artist) {
  artistButton.addEventListener("click", function () {
    let selectedArtist = document.querySelector("#selected-artist");
    selectedArtist.innerText = artist.name + " (";
    createSocialLinks(artist, selectedArtist);
  });
}

/////////////////////////////////////////////////////////////////
//Table creation functions
/////////////////////////////////////////////////////////////////

//Helper function for converting duration to mm:ss
function convertDuration(duration) {
  let minutes = Math.floor(duration / 60);
  let seconds = duration % 60;
  if (seconds < 10) {
    return (duration = minutes + ":" + seconds + "0");
  }
  return (duration = minutes + ":" + seconds);
}
//Dynamic table data creation
function songDataOnClick(artistID) {
  let table = document.querySelector("#songs");
  table.innerHTML = "";

  window.songs.forEach(function (song) {
    let row = document.createElement("tr");
    let songTitle = document.createElement("a");
    let yearRecorded = document.createElement("td");
    let duration = document.createElement("td");
    if (song.artistId === artistID && !song.explicit) {
      songTitle.textContent = song.title;
      songTitle.href = song.url;
      songTitle.target = "_blank";
      yearRecorded.textContent = song.year;
      duration.textContent = convertDuration(song.duration);
      row.appendChild(songTitle);
      row.appendChild(yearRecorded);
      row.appendChild(duration);
      table.appendChild(row);
      row.onclick = function () {
        console.log(song.title);
      };
    }
  });
}

//Button on click displays table
function displaySongInfo(artistButton, artistID) {
  artistButton.addEventListener("click", function () {
    songDataOnClick(artistID);
  });
}

///////////////////////////////////////////////////////////////
//Entry point functions
///////////////////////////////////////////////////////////////
function makeButtons() {
  window.artists.forEach(function (artist) {
    let artistButton = createArtistButton(artist);
    addToMenu(artistButton);
    displayArtistInfo(artistButton, artist);
    displaySongInfo(artistButton, artist.artistID);
  });
}

//Ensure everything happens on DOM load up
window.onload = function () {
  makeButtons();
};
