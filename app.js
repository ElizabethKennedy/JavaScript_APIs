"use strict";


console.log("Hello Fetch API and Async/Await!");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const GIPHY_KEY = "0pOUjDOVnLFJGtCN70a7ZrMlzbOrwASx";
const GIPHY_URL = "https://api.giphy.com/v1/gifs/translate";

// EDOM Selection 
const form = document.querySelector("form");
const search = document.querySelector("#search");
const img = document.querySelector("img");

//Event Listeners
form.addEventListener("submit", fetchGiphy);
   
async function fetchGiphy(event) {
    event.preventDefault();

    let searchValue = search.value;

try {
    let response = await fetch(
        GIPHY_URL + "?api_key=" + GIPHY_KEY + "&s=" + searchValue
    );
    let results = await response.json();

    console.log(results);

    img.src = results.data.images.original.url;
} catch (err) {
    console.error(err);
}
}




// fetch(GIPHY_URL + "?api_key=" + GIPHY_KEY + "&s=" + searchValue)
// .then((response) => response.json())
// .then((results) => {
//     console.log(results);
//     img.src = results.data.images.original.url;
// })

// .catch((err) => {
//     console.error(err);
//     });
// });