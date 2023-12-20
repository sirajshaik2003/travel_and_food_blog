var email="20pa1a05f4@vishnu.edu.in"
var pass="#vishnu"
function autho()
{
    var usergivenUSID=document.getElementById("Email").value
    var usergivenPass=document.getElementById("pass").value
    if(email==usergivenUSID && pass==usergivenPass)
    {
        document.getElementById("fom").setAttribute("action","./HTML/home.html")
        document.getElementById("but").setAttribute("type","submit")
    }
    else if(email!=usergivenUSID && pass==usergivenPass)
    {
        document.getElementById("inputDiv").style.borderColor="red"
        document.getElementById("passwordDiv").style.borderColor="royalblue"
        document.getElementById("bdy").style.backgroundImage="linear-gradient(70deg,red,purple)"
        document.getElementById("result").innerHTML="Wrong Email ID"
    }
    else if(email==usergivenUSID && pass!=usergivenPass)
    {
        document.getElementById("passwordDiv").style.borderColor="red"
        document.getElementById("inputDiv").style.borderColor="royalblue"
        document.getElementById("bdy").style.backgroundImage="linear-gradient(70deg,rgb(255,1,111),red)"
        document.getElementById("result").innerHTML="Wrong Password"
    }
    else{
        document.getElementById("passwordDiv").style.borderColor="red"
        document.getElementById("inputDiv").style.borderColor="red"
        document.getElementById("bdy").style.backgroundImage="linear-gradient(70deg,red,red)"
        document.getElementById("result").innerHTML="Wrong userId and Password"
    }
}
function visiblePassword()
{
    document.getElementById("pass").removeAttribute("type")
    document.getElementById("visible").setAttribute("src","./assets/Logo/visible.png")
    document.getElementById("visible").style.transform="rotateY(360deg)"
}
function hidePassword()
{
    document.getElementById("pass").setAttribute("type","password")
    document.getElementById("visible").setAttribute("src","./assets/Logo/closeeye.png")
    document.getElementById("visible").style.transform="rotateY(-360deg)"
}