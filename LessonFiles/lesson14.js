const btn = document.querySelector("button");
const output = document.querySelector("#output");
const intake = document.querySelector("input");
const url = "https://api.myjson.com/bins/11akaa";
btn.addEventListener("click", getInput);

function getInput() {
    fetch(url).then( res => res.json())
    .then( json => console.log(json))
    .catch(error => console.log(error))
}