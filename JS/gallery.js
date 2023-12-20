var imagesArray = ["0.jfif","1.jfif","2.jfif","3.jfif","4.jfif","5.jfif","6.jfif","7.jfif"]
var i=0;
function header()
{
    if(i>=7)
    {
        i=0;
        document.getElementById("header").style.backgroundImage=`url(../assets/Images/${imagesArray[i]})`
    }
    else{
        document.getElementById("header").style.backgroundImage=`url(../assets/Images/${imagesArray[i]})`
    }
    i++;
    var time=setTimeout(header,10000)
}
function right()
{
    i++;
    if(i>imagesArray.length-1)
    {
        i=0;
        document.getElementById("header").style.backgroundImage=`url(../assets/Images/${imagesArray[i]})`
    }
    else{
        document.getElementById("header").style.backgroundImage=`url(../assets/Images/${imagesArray[i]})`
    }
}
function left()
{
    i--;
    if(i<0)
    {
        i=imagesArray.length-1
        document.getElementById("header").style.backgroundImage=`url(../assets/Images/${imagesArray[i]})`
    }
    else{
        document.getElementById("header").style.backgroundImage=`url(../assets/Images/${imagesArray[i]})`
    }
}

// this is gallery code

var img=document.getElementsByClassName("images");
console.log(img)
for(i=0;i<img.length;i++)
{
    img[i].src=`../assets/Images/${i}.jfif`
}
function closeTheImage()
{
    document.getElementById("bigImage").setAttribute("style","display:none")
}
function openTheImage(img)
{
    console.log(img)
    document.getElementById("bigimg").setAttribute("src",`../assets/Images/${img}.jfif`);
    document.getElementById("bigImage").removeAttribute("style");
}