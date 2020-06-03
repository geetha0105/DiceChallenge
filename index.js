
// Random Number1 Generation
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var finalImage1 = "images/dice" + randomNumber1 + ".png";

// Updating the image1
document.getElementById("image1").src = finalImage1;

// Random Number2 Generation
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var finalImage2 = "images/dice" + randomNumber2 + ".png";

// Updating the image2
document.getElementById("image2").src = finalImage2;

//Updating the h1 based on outcomes
if(randomNumber1 > randomNumber2){
document.querySelector("h1").innerHTML='<img src="images/redFlag.png"/>Player 1 Wins';

} else if (randomNumber2 > randomNumber1){
document.querySelector("h1").innerHTML='Player 2 Wins<img src="images/redFlag.png"/>';
}else{
   document.querySelector("h1").textContent = "Draw!";
}
