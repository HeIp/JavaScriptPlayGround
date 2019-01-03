//Lesson 15
//using typicode.com
const btn = document.querySelector("button");
const output = document.querySelector("#output");
const intake = document.querySelector("#input");
//my created endpoint
const url = "https://jsonplaceholder.typicode.com/photos";
const url2 = "https://swapi.co/api/planets";

//change function calls
btn.addEventListener("click",getInput2);

function getInput()
{
    fetch(url)
    .then
    (
        function(response)
        {
            return response.json()
        }
    )
    .then
    (
        function(responsedata)
        {
            console.log(responsedata[0].url);
            document.querySelector("img").src = responsedata[0].url;
        }
    )
}


//meant to be used with url2
function getInput2()
{
    fetch(url2)
    .then
    (
        function(response)
        {
            return response.json()
        }
    )
    .then
    (
        function(responsedata)
        {
            console.log(responsedata.results[4].name);
        }
    )
}