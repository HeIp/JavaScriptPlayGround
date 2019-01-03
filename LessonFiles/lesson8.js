const btn = document.querySelector("button");
const output = document.querySelector("#output");
const intake = document.querySelector("input");
const url = "https://randomuser.me/api/";
btn.addEventListener("click", getInput);

function getInput() {
   fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data){
    console.log(data.results);
  })
}

