var xml = new XMLHttpRequest();
var url = "https://api.chucknorris.io/jokes/random";
xml.onreadystatechange = function()
{
    console.log(xml.readyState);
    if(xml.readyState == 4)
    {
        console.log(xml.response);
    }
}
xml.open("GET", url);
xml.send();
console.log(xml);