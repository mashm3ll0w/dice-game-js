var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomNum2 = Math.floor(Math.random() * 6) + 1;

var randomImg1 = "images/dice" + randomNum1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImg1);

var randomImg2 = "images/dice" + randomNum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImg2);

if (randomNum1 > randomNum2) {
  document.querySelector("h1").innerText = "Player 1 Wins!!";
}
else if (randomNum2 > randomNum1) {
  document.querySelector("h1").innerText = "Player 2 Wins!!";
}
else {
  document.querySelector("h1").innerText = "It's a Tie!!";
}
