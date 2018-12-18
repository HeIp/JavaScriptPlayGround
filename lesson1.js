const btn = document.querySelector("button");
btn.addEventListener("click", getJoke);
const output = document.querySelector("#output")

//<1> This is project 1 for Api testing Using ChuckNorris API
function getJoke()
{

    document.getElementById('content').style.border = "solid brown";
    document.getElementById('content').style.padding = "15px";
    document.getElementById('content').style.textAlign = "center";
    console.log("New joke inbound");
    const xml = new XMLHttpRequest();
    const url = "https://api.chucknorris.io/jokes/random";
    xml.onreadystatechange = function()
    {
        console.log(xml.readyState);
        if( xml.readyState === 4)
        {
            if(xml.status === 200)
            {
                var str = xml.responseText;
                // console.log(str);
                console.log("-----------JSON-------------");
                const obj = JSON.parse(str);
                output.innerHTML = obj.value +
                '<br><img src="'+obj.icon_url+'">';
                console.log(obj);
                // var str2 = JSON.stringify(obj);
                // console.log("-----------STRING-------------");
                // console.log(str2);
            }
            else
            {
                output.innerHTML = "ERROR";
            }
        }
    }
    xml.open("GET",url);
    xml.send();

    xml.addEventListener("progress",callBackfn);
    // xml.addEventListener("load",callBackfn);
    // xml.addEventListener("error",callBackfn);

    
    console.log(xml);
};

function callBackfn(e)
{
    console.log("-----------CallbackFn-------------");
    console.log(e);
}
//</1>

//<2> This is project 2 for Api testing

//</2>