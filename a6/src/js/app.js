/**
 * WEB222 – Assignment 05
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
//Dynamic creation functions
/////////////////////////////////////////////////////////////////

//Helper function for converting duration to mm:ss
function convertDuration(duration) {
  let minutes = Math.floor(duration / 60);
  let seconds = duration % 60;
  if (seconds < 10) {
    return (duration = minutes + ":" + "0" + seconds);
  }
  return (duration = minutes + ":" + seconds);
}
//Dynamic table data creation
function songDataOnClick(artistID) {
  let row = document.querySelector("#row");
  //Delete current artists card
  row.innerHTML = "";

  //For each song if it's equal to the artist ID passed in
  //Display their song cards
  window.songs.forEach(function (song) {
    if (song.artistId === artistID && !song.explicit) {
      createSongCard(song);
    }
  });
}

//Button on click displays table
function displaySongInfo(artistButton, artistID) {
  artistButton.addEventListener("click", function () {
    songDataOnClick(artistID);
  });
}

//Assignment 5 new functionality - dynamic card
function createSongCard(song) {
  let row = document.querySelector("#row");

  const card = document.createElement("div");
  card.classList.add("card");

  const songImg = document.createElement("img");
  songImg.src = song.imageUrl;
  card.appendChild(songImg);
  songImg.addEventListener("click", function () {
    window.open(song.url, "_blank");
  });

  const songTitle = document.createElement("h3");
  songTitle.textContent = song.title;
  card.appendChild(songTitle);

  const yearRecorded = document.createElement("time");
  yearRecorded.innerHTML = song.year;
  card.appendChild(yearRecorded);

  const duration = document.createElement("span");
  duration.textContent = convertDuration(song.duration);
  card.appendChild(duration);

  row.appendChild(card);

  return card;
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
