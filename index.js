var num1 = Math.floor(Math.random()*6)+1;
var num2 = Math.floor(Math.random()*6)+1;

var imgPath1 = "images/dice"+num1+".png";
var imgPath2 = "images/dice"+num2+".png";

document.querySelector(".img1").setAttribute("src", imgPath1);
document.querySelector(".img2").setAttribute("src", imgPath2);

if (num1>num2) document.querySelector("h1").textContent="🚩Player1 Won!";
else if (num1<num2) document.querySelector("h1").textContent="Player2 Won!🚩";
else document.querySelector("h1").textContent="Draw";