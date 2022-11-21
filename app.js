"use strict";
console.log("Hello Fetch API and Async/Await!");

const GIPHY_URL = "https://api.giphy.com/v1/gifs/translate";
const GIPHY_KEY = "TlwtBoudh9K2OXc5tMOPifINkN4xlm0i";


//Select Elements
let feedbackEle = document.querySelector("#feedback");
let searchInput = document.querySelector("#searchWord");
let searchBtn = document.querySelector("#submitSearch");
let gifEle =document.querySelector("#imageContainer > img");
console.log(searchBtn);


//let searchBtn = document.getElementById("searchBtn").addEventListener("click");
searchBtn.addEventListener("click", (event) => {
    console.log("click");
    fetch(`${GIPHY_URL}?api_key=${GIPHY_KEY}&s=${searchInput.value}`)
    .then((res) => res.json())
    .then((body) => {
        console.log(body);
        //show the gif on the dom
        gifEle.src = body.data.images.original.url;
    })
    .catch((err) => {
        console.error(err);
//show the error message on the dom
    feedbackEle.textContent = err.message;
    });
});











