const btn = document.querySelector("button");
const output = document.querySelector("#output");
const intake = document.querySelector("input");
const url = "https://randomuser.me/api/";
btn.addEventListener("click", getInput);

function getInput() {
    let tempVal = intake.value;
    let tempURL = url + "?results=" + tempVal;
    fetch(tempURL).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data.results);
        for (let x = 0; x < data.results.length; x++) {
            output.innerHTML += data.results[x].name.first + "<br>";
        }
    })
}