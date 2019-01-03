var xml = new XMLHttpRequest();
var url = "https://api.chucknorris.io/jokes/random";
xml.onreadystatechange = function()
{
    console.log(xml.readyState);
    //check it got the information
    //and make sure it loaded properly
    if(xml.readyState == 4 && xml.status == 200)
    {
        console.log(xml.response);
    }
}
xml.open("GET", url);
xml.send();
console.log(xml);