const button = document.querySelector('button');
const output = document.querySelector('#output');
const input = document.querySelector('input');
const url = "https://randomuser.me/api/";

button.addEventListener("click", getInput);

function getInput()
{
    const xml = new XMLHttpRequest();
    let tempUrl = url + '?results=' + input.value;
    xml.onload = function()
    {
        if( xml.readyState == 4)
        {
            if(xml.status == 200)
            {
                let data = JSON.parse(xml.responseText).results;
                console.log(data);
                outputHTML(data);
            }
            else
            {
                output.innerHTML = "ERROR!";
            }
        }
    }
    xml.open('get', tempUrl);
    xml.send();
    console.log(input.value);
}

function outputHTML(data)
{
    console.log(data);
    output.innerHTML = "";
    for(let i = 0; i < data.length;i++)
    {
        output.innerHTML += data[i].email + '<br>';
    }
}