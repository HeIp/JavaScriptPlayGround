//Lesson 17
//creates selection list from api fetch
const btn = document.querySelector("button");
const output = document.querySelector("#output");
const intake = document.querySelector("#input");
//my created endpoint
const url = "https://restcountries.eu/rest/v2/all";
const url2 = "https://swapi.co/api/planets";

let myData = {};

fetch(url)
.then
(
    function (result)
    {
        return result.json();
    }
)
.then
(
    function (data)
    {
        myData = data;
        buildSelect(data);
    }
)

function buildSelect(d)
{
    let select = document.createElement('select');
    d.forEach
    (
        function (item,index)
        {
            let option = document.createElement('option');
            console.log(item,index);
            option.value = index;
            option.textContent = item.name;
            select.appendChild(option);
        }   
    )
    select.addEventListener("change",outputData);
    document.querySelector('body').appendChild(select);
}


function outputData(e)
{
    console.log(e);
    console.log(e.target.value);
    let object = myData[e.target.value];
    console.log(object);
    output.innerHTML = '<h1>' + object.name + '</h1>';
    output.innerHTML += '<div>Population: ' + object.population + '</div>';
    document.querySelector("img").src = object.flag;
}