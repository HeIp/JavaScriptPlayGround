//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status


var xhr = new XMLHttpRequest();
var url = "https://api.chucknorris.io/jokes/random";
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(xhr.readyState == 4  && xhr.status == 200){
        console.log(xhr.responseText);
    }
}
xhr.open("GET",url);
xhr.send();
console.log(xhr);