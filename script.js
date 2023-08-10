const jokeContainer = document.getElementById("joke-container");
const jokeBox = document.getElementById("joke-box");
const button = document.querySelector(".btn");

const api_url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

async function getJokes(url){
    const response = await fetch(url)
    var data = await response.json()
    
    jokeBox.innerHTML = data.joke;

}
getJokes(api_url);


























// URL: https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single