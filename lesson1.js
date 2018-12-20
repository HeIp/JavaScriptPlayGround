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
const url2 = "https://randomuser.me/api/";
const btn2 = document.querySelector("#button2");
const output2 = document.querySelector('#output2');
const intake = document.querySelector("input");

btn2.addEventListener("click",getInput);

function getInput()
{
    document.getElementById('content2').style.border = "solid orange";
    document.getElementById('content2').style.padding = "15px";
    document.getElementById('content2').style.textAlign = "center";
    const xml = new XMLHttpRequest();
    let inputvalue = intake.value;
    let urlquery = url2+"?results="+inputvalue;
    xml.onload = function()
    {
        if(xml.readyState === 4 && xml.status == "200")
        {
            let data = JSON.parse(xml.responseText).results;
            outputHTML(data);
        }
        else{
            console.log("Error");
        }
    }
    xml.open("GET",urlquery);
    xml.send();
    console.log(intake.value);
}

function outputHTML(data)
{
    console.log("WE SHOULD BE OUTPUTTING INFO")
    console.log(data);
    output2.innerHTML = "";
    for(let index = 0; index < data.length; index++)
    {
        output2.innerHTML += data[index].email + "<br>";
    }
}

//</2>


//<3> This is project 3 for Api testing using fetch, promises
const btn3 = document.querySelector("#button3");
const output3 = document.querySelector("#output3");
const intake2 = document.querySelector("#input2");

btn3.addEventListener("click",getInput2);

function getInput2()
{
    output3.innerHTML = "";
    document.getElementsByClassName('Project3')[0].style.border = "solid lightblue";
    document.getElementsByClassName('Project3')[0].style.padding = "15px";
    document.getElementsByClassName('Project3')[0].style.textAlign = "center";

    let userInput = intake2.value;
    let urlQuery = url2 + "?results=" + userInput;
    fetch(urlQuery)
    .then
    (
        function(response)
        {
           return response.json();
           //return response;
           //console.log(response);
        }
    )
    .then
    (
        function(data)
        {
            //console.log(JSON.stringify(myJson));
            console.log(data.results);
            for(let x = 0;x < data.results.length;x++)
            {
                output3.innerHTML += data.results[x].name.first + "<br>";
            }
        }
    );
}


//</3>