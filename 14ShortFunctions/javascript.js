//Lesson 14
//using arrow functions
//using http://myjson.com
const btn = document.querySelector("button");
const output = document.querySelector("#output");
const intake = document.querySelector("#input");
//my created endpoint
const url = "https://api.myjson.com/bins/1df5i0/";
const url2 = "https://api.myjson.com/bins/kucgo";

btn.addEventListener("click",getInput);

function getInput()
{

    output.innerHTML = "";
    document.getElementsByClassName('Project4')[0].style.border = "solid lightblue";
    document.getElementsByClassName('Project4')[0].style.padding = "15px";
    document.getElementsByClassName('Project4')[0].style.textAlign = "center";

    //change parameter urls
    fetch(url2)
    .then
    (   
        res => res.json()
    )
    .then
    (
        json => console.log(json)
    )
    //CATCHES ERROR, happens due to failed fetch
    .catch
    (
        error => console.log(error)
    )
    ;
}
