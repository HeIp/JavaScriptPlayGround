const output = document.getElementById("output");
const button = document.getElementById("button");
const url = "https://talaikis.com/api/quotes/random/"


button.addEventListener("click", newCall);

function newCall()
{
    const xml = new XMLHttpRequest;
    xml.onload = function()
    {
        if(xml.readyState === 4)
        {
            if(xml.status == "200")
            {
                let data = JSON.parse(xml.responseText).quote;
                displayResult(data);
            }
        }
        else
        {
            console.log("Error");
        }
    }
    xml.open("GET",url);
    xml.send();
}

function displayResult (data) 
{
    output.innerHTML = "";
    console.log(data);
    output.innerHTML = data;
}