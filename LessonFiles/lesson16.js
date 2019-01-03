const btn = document.querySelector("button");
const output = document.querySelector("#output");
const intake = document.querySelector("input");
const url = "https://restcountries.eu/rest/v2/all";
let myData = {};
fetch(url).then(function (res) {
    return res.json()
}).then(function (data) {
    myData = data;
    buildSelect(data);
})

function buildSelect(d) {
    let select = document.createElement('select');
    d.forEach(function (item, index) {
        let option = document.createElement('option');
        console.log(item, index);
        option.value = index;
        option.textContent = item.name;
        select.appendChild(option);
    })
    document.querySelector('body').appendChild(select);
}