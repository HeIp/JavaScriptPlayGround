var xml = new XMLHttpRequest();
var url = "https://api.chucknorris.io/jokes/random";
var outputHTML = document.querySelector('#output');


xml.onreadystatechange = function()
{
    console.log(xml.readyState);
    //check it got the information
    //and make sure it loaded properly
    if(xml.readyState == 4 && xml.status == 200)
    {
        console.log(xml.response);
        var response = xml.responseText;
        var json = JSON.parse(response);
        console.log(json);
        outputHTML.innerHTML = json.value + '<br><img src="'+json.icon_url+'">';
    }
}
xml.open("GET", url);
xml.send();
console.log(xml);