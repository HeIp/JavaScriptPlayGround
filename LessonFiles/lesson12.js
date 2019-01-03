const btn = document.querySelector("button");
const output = document.querySelector("#output");
const intake = document.querySelector("input");
const url = "https://randomuser.me/api";
btn.addEventListener("click", getInput);

function getInput() {
    let params = new Request(url, {
        method: "GET"
        , mode: "cors"
        , headers: new Headers()
        , cache: "default"
    })
    fetch(params).then(function (response) {
        return response.json();
    }).then(function (data2) {
        console.log(data2);
    }).catch(function (error) {
        console.log(error);
    })
}