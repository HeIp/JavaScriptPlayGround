const button = document.querySelector('button');
const output = document.querySelector('#output');
const input = document.querySelector('input');
const url = "https://randomuser.me/api/";

button.addEventListener("click", apiCall);

function apiCall()
{
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
            console.log(data.results);
        }
    )
}
