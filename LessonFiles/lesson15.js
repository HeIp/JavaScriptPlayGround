const btn = document.querySelector("button");
const output = document.querySelector("#output");
const intake = document.querySelector("input");
//const url = "https://jsonplaceholder.typicode.com/photos";
const url = "https://swapi.co/api/planets/";
btn.addEventListener("click", getInput);

function getInput() {
    fetch(url).then(function (res) {
        return res.json()
    }).then(function (data) {
        console.log(data.results[4].name);
    })
}

function getInput1() {
    fetch(url).then(function (res) {
        return res.json()
    }).then(function (data) {
        console.log(data[0].url);
        document.querySelector("img").src = data[0].url;
    })
}