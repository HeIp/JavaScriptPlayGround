
const url = "https://api.chucknorris.io/jokes/random";
const outputHTML = document.querySelector('#output');
var button = document.querySelector('button');

button.addEventListener('click', callApi );

function callApi()
{
    console.log("Api call sent");
    const xml = new XMLHttpRequest();
    xml.onreadystatechange = function()
    {
        //check it got the information
        //and make sure it loaded properly
        if(xml.readyState == 4)
        {
            if(xml.status == 200)
            {
                const response = xml.responseText;
                const json = JSON.parse(response);
                outputHTML.innerHTML = json.value + '<br><img src="'+json.icon_url+'">';
                
            }
            else
            {
                outputHTML.innerHTML = "ERROR!";
            }
        }      
    }
    xml.open("GET", url);
    xml.send();

    xml.addEventListener("progress", getProgress);
    xml.addEventListener("load", getProgress);
    xml.addEventListener("error", getProgress);
    //get progress event info
    function getProgress(e)
    {
        console.log(e);
    }
}

