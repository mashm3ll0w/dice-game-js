var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomNum2 = Math.floor(Math.random() * 6) + 1;

var randomImg1 = "images/dice" + randomNum1 + ".png";
$("img").eq(0).attr("src", randomImg1);

var randomImg2 = "images/dice" + randomNum2 + ".png";
$("img").eq(1).attr("src", randomImg2);

if (randomNum1 > randomNum2){
    $("h1").text("Player 1 Wins!!");
}
else if (randomNum2 > randomNum1){
    $("h1").text("Player 2 Wins!!");
}
else{
    $("h1").text("It's a Tie!!");
}
