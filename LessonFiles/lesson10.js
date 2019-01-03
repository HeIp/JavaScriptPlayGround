const btn = document.querySelector("button");
const output = document.querySelector("#output");
const intake = document.querySelector("input");
const url = "https://randomuser.me/api/";
btn.addEventListener("click", getInput);

function getInput() {
    fetch(url).then(function (response) {
        return response.text();
    }).then(function (data) {
        console.log(data);
    })
}


function getInput1() {
    let tempURL = "javascript.png";
    fetch(tempURL).then(function (response) {
        return response.blob();
    }).then(function (data) {
        console.log(data);
        let pathImage = URL.createObjectURL(data);
       document.querySelector("img").src = pathImage;
    })
}