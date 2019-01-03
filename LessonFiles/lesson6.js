const btn = document.querySelector("button");
const output = document.querySelector("#output");
const intake = document.querySelector("input");
const url = "https://randomuser.me/api/";
btn.addEventListener("click", getInput);

function getInput() {
    const xhr = new XMLHttpRequest();
    let tempVal = intake.value;
    let tempURL = url + "?results=" + tempVal;
    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status == "200") {
            let data = JSON.parse(xhr.responseText).results;
            outputHTML(data);
        }
    }
    xhr.open("GET", tempURL);
    xhr.send();
    console.log(intake.value);
}

function outputHTML(data) {
    console.log(data);
    for (let x = 0; x < data.length; x++) {
        output.innerHTML += data[x].email + "<br>";
    }
}