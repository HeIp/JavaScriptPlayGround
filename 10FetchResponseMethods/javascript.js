const btn = document.querySelector("button");
const output = document.querySelector("#output");
const intake = document.querySelector("#input");
const url = "https://randomuser.me/api/";

//change getinput methods
btn.addEventListener("click",getInput2);

function getInput()
{
    output.innerHTML = "";
    document.getElementsByClassName('Project4')[0].style.border = "solid lightblue";
    document.getElementsByClassName('Project4')[0].style.padding = "15px";
    document.getElementsByClassName('Project4')[0].style.textAlign = "center";

    let url = "javascript.png";
    fetch(url)
    .then
    (
        function(response)
        {
            //.blob used with images
           return response.blob();
           //return response;
           //console.log(response);
        }
    )
    .then
    (
        function(data)
        {
            //console.log(JSON.stringify(myJson));
            console.log(data);
            //creating dynamic object url
            let pathImage = URL.createObjectURL(data);
            document.querySelector("img").src = pathImage;
        }
    );
}

function getInput2()
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
           return response.text();
        }
    )
    .then
    (
        function(data)
        {
            console.log(JSON.parse(data));
        }
    );
}