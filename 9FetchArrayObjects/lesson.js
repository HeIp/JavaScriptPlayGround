const button = document.querySelector('button');
const output = document.querySelector('#output');
const input = document.querySelector('input');
const url = "https://randomuser.me/api/";

button.addEventListener("click", apiCall);

function apiCall()
{
    const tempUrl = url + '?results=' + input.value;
    fetch(tempUrl)
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
            output.innerHTML = ""
            console.log(data.results);
            for(let i =0; i < data.results.length;i++)
            {
                output.innerHTML += data.results[i].name.first + "<br>";
            }
        }
    )
}
