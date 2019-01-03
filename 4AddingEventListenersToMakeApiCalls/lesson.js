
var url = "https://api.chucknorris.io/jokes/random";
var outputHTML = document.querySelector('#output');
var button = document.querySelector('button');

button.addEventListener('click', callApi );

function callApi()
{
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function()
    {
        //check it got the information
        //and make sure it loaded properly
        if(xml.readyState == 4 && xml.status == 200)
        {
            var response = xml.responseText;
            var json = JSON.parse(response);
            outputHTML.innerHTML = json.value + '<br><img src="'+json.icon_url+'">';
        }
    }
    xml.open("GET", url);
    xml.send();
}

