var randomnumber1= Math.floor(Math.random() *6)+1;

var rimage1="images/dice"+randomnumber1+".png";

document.querySelector("img.img1").setAttribute("src",rimage1);

var randomnumber2= Math.floor(Math.random() *6)+1;

var rimage2="images/dice"+randomnumber2+".png";

document.querySelector("img.img2").setAttribute("src",rimage2);
if (randomnumber1>randomnumber2){
document.querySelector("h1").innerHTML="Player 1 won";}

else if(randomnumber1<randomnumber2){
document.querySelector("h1").innerHTML="Player 2 won";}

else{
document.querySelector("h1").innerHTML="Draw";}
