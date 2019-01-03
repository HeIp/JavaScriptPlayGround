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
        
        option.value = index;
        option.textContent = item.name;
        select.appendChild(option);
    })
    select.addEventListener("change",outputData);
    document.querySelector('body').appendChild(select);
}


function outputData(e){
    console.log(e);
    console.log(e.target.value);
    console.log(myData[e.target.value]);
    let obj = myData[e.target.value];
    output.innerHTML = '<h1>'+obj.name+'</h1>';
    output.innerHTML += '<div>Pop: '+obj.population+'</div>';
    document.querySelector('img').src = obj.flag;
}