
var n = Math.floor(Math.random() * 6) + 1;
var m = Math.floor(Math.random() * 6) + 1;

var randomsource1 = "images/dice" + n + ".png";
var randomsource2 = "images/dice" + m + ".png";

var changevariable1 = document.querySelector("#img1");
var changevariable2 = document.querySelector("#img2");

changevariable1.setAttribute("src", randomsource1);
changevariable2.setAttribute("src", randomsource2);


if (n > m) {
    document.querySelector("h1").innerHTML = "Player 1 won!..";

}
else if (n < m) {
    document.querySelector("h1").innerHTML = "Player 2 won!..";

}
else {
    document.querySelector("h1").innerHTML = "Draw!..";
    document.querySelector("h1").style.color= "yellow";

}
