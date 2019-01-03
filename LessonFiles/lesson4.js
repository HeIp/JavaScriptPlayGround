var btn = document.querySelector("button");
var output = document.querySelector("#output");
btn.addEventListener("click", getJoke);

function getJoke() {
    console.log("new joke coming");
    var xhr = new XMLHttpRequest();
    var url = "https://api.chucknorris.io/jokes/random";
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var str = xhr.responseText;
            var obj = JSON.parse(str);
            var str1 = JSON.stringify(obj);
            output.innerHTML = obj.value + '<br><img src="' + obj.icon_url + '">';
        }
    }
    xhr.open("GET", url);
    xhr.send();
}