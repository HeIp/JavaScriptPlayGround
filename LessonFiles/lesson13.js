const btn = document.querySelector("button");
const output = document.querySelector("#output");
const intake = document.querySelector("input");
const url = "https://api.myjson.com/bins/11akaa";
btn.addEventListener("click", getInput);

function getInput() {
    fetch(url).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data.message);
        for(let x=0;x<data.message.length;x++){
            console.log(data.message[x].output);
        }
    }).catch(function (error) {
        console.log(error);
    })
}