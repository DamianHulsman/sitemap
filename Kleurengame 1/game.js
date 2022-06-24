let counter= 0;
let timeChangeColors = 1000;
let nrOfLoops = 6;
let aHits = [0, 0, 0];
let bClicked = true;
let timerId;

function load()
{
    getGlobalVars();
    setColor();
    let elements = document.getElementsByClassName("gameDiv");
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.addEventListener("click", function(){ test(element)});
    }
}

function getGlobalVars()
{
    nrOfLoops = document.getElementById("nrOfLoops").value;
    timeChangeColors = (document.getElementById("interval").value * 1000);
}

function shuffle(arr)
{
    arr.sort(function(a, b){return 0.5 - Math.random()});
    return arr;
}

function setColor()
{
    if(bClicked == false)
    {
        aHits[2]++;
        document.getElementById("testEl").innerHTML += "<div id='late'> Te laat</div>";
    }
    bClicked = false;
    nrOfLoops--;
    let colors = ["red", "blue", "yellow", "green", "brown", "purple", "orange", "pink", "aqua"];
    console.log("nrOfLoops = "+ nrOfLoops);                
    colors = shuffle(colors);

    var elements = document.getElementsByClassName("gameDiv");
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.style.backgroundColor = colors[i];
    }

    let element = document.getElementById("searchColor");
    let i = Math.floor(Math.random() * 9)
    element.style.backgroundColor = colors[i];
    if (nrOfLoops <= 0)
    {
        stopThegame();
    }
}   

function test(el)
{
    bClicked = false;
    aHits[2]++;
    //welke kleur is gezet => searchColor
    let element = document.getElementById("searchColor");
    let correctcolor = element.style.backgroundColor;   
    //welke kleur is geklikt
    let elementClicked = el;
    let colorClicked = elementClicked.style.backgroundColor;
    console.log(colorClicked + " clicked");
    console.log(correctcolor + " correct");
    if (colorClicked == correctcolor)
    {
        document.getElementById("testEl").innerHTML += "<div id='correct'> CORRECT</div>";
        aHits[0]++;
        aHits[2]--;
        console.log("Correct" + aHits);
        bClicked = true;
    }
    else
    {
        document.getElementById("testEl").innerHTML += "<div id='incorrect'> Helaas</div>";
        aHits[1]++;
        aHits[2]--;
        console.log("Incorrect" + aHits);
        bClicked = true;
    }
}    

function startThegame()
{
    timerId = setInterval(setColor,timeChangeColors);
    document.getElementById("start").disabled = true;
}

function stopThegame()
{
    clearInterval(timerId);
    document.getElementById("start").disabled = false;
    console.log("aHits = " + aHits);
    document.getElementById('endresult').innerHTML = "<hr>Raak: " + aHits[0] + "<br>Mis: " + aHits[1] + "<br>Te laat: " + aHits[2] + "<hr>";
}
function disable_aColors()
{
    console.log("disabled aColors")
    document.getElementById('aColors').disabled = true;
}