//Lesson 11 & 12

const btn = document.querySelector("button");
const output = document.querySelector("#output");
const intake = document.querySelector("#input");
const url = "https://randomuser.me/api/";

btn.addEventListener("click",getInput);

function getInput()
{
    output.innerHTML = "";
    document.getElementsByClassName('Project4')[0].style.border = "solid lightblue";
    document.getElementsByClassName('Project4')[0].style.padding = "15px";
    document.getElementsByClassName('Project4')[0].style.textAlign = "center";

    fetch(url)
    .then
    (
        function(response)
        {
           return response.json();
        }
    )
    .then
    (
        function(data)
        {
            console.log(data);
        }
    )
    //CATCHES ERROR, happens due to failed fetch
    .catch
    (
        function(error)
        {
            console.log(error);
        }
    )
    ;
}
