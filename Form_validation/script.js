function fActie(inp)
{
    //let elm = document.getElementById(id);
    //console.log('de waarde van ' + inp.placeholder + ' is ' + inp.value);
    let waarde = inp.value;
    let testmin = false;
    let testmax = false;
    console.log(inp.classList);
    if(inp.classList.contains('min2Char'))
    {
        let l = waarde.length;
        if(l >= 2)
        {
            inp.style.backgroundColor = "#AAFFAA";
            document.getElementById(inp.id+'Error').innerHTML = "";
            testmin = true;
        }
        else
        {
            inp.style.backgroundColor = "#FFAAAA";
            document.getElementById(inp.id+'Error').innerHTML = inp.placeholder +" moet minimaal 2 karakters bevatten!";
            testmin = false;
        }
    }
    if(inp.classList.contains('max10Char'))
    {
        let x = waarde.length;
        if(x <= 10)
        {
            inp.style.backgroundColor = "#AAFFAA";
            document.getElementById(inp.id+'Error').innerHTML = "";
            testmax = true;
        }
        else
        {
            inp.style.backgroundColor = "#FFAAAA";
            document.getElementById(inp.id+'Error').innerHTML = inp.placeholder +" mag maximaal 10 karakters bevatten!";
            testmax = false;
        }
    }
    if (inp.value == "")
    {
        document.getElementById('submit').disabled = true;
    }
    else
    {
        document.getElementById('submit').disabled = false;
    }
    if (testmin + testmax == true)
    {
        console.log('good to go!');
    }
}