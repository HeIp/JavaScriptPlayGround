//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

var output = document.querySelector("#output");
var xhr = new XMLHttpRequest();
var url = "https://api.chucknorris.io/jokes/random";
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(xhr.readyState == 4  && xhr.status == 200){
        console.log(xhr.responseText);
        var str = xhr.responseText;
        var obj = JSON.parse(str);
        var str1 = JSON.stringify(obj);
        console.log("***STRING***");
        console.log(str1);
        output.innerHTML = obj.value + '<br><img src="'+obj.icon_url+'">';
        console.log(obj);
    }
}
xhr.open("GET",url);
xhr.send();
console.log(xhr);