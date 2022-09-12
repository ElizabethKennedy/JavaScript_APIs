"use strict";
console.log("Hello Fetch API and Async/Await!");

// Exercise 1 Section
/*Inspect and select elements*/

console.log("EXERCISE 1:\n==========\n");
//Program State 
const GIPHY_URL = "https://api.giphy.com/v1/gifs/translate";
const GIPHY_KEY = "0pOUjDOVnLFJGtCN70a7ZrMlzbOrwASx";
//Select Elements
let feedbackEle = document.querySelector("#feedback");
let searchInput = document.querySelector("#searchWord");
let searchBtn = document.querySelector("#submitSearch");
let gifEle = document.querySelector("#imageContainer > img");
//Event Handlers
//let searchBtn = document.getElementById("searchBtn").addEventListener("click");
searchBtn.addEventListener("click", (event) => {
    fetch(`${GIPHY_URL}?api_key=${GIPHY_KEY}&s=${searchInput.value}`)
    .then((res) => res.json())
    .then((body) => {
        //show the gif on the dom
        gifEle.src = body.data.images.original.url;
    })
    .catch((err) => {
        console.error(err);
//show the error message on the dom
    feedbackEle.textContent = err.message;
    });
});