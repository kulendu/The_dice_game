// For taking the inputs
alert("This is a online game , so just sit down and enjoy");
var yourName=prompt("Enter your name :");
alert("hey! "+yourName+" welcome")
var friendsName=prompt("Enter your Opponents name :");
alert("Rules:\n1.Enter your name\n2.Enter your friends name\n3.Now,randomly your dice will be rolled and any number between 1-6 will be generated\n4.your winning or loosing probability depends on your luck\n5.If you want to play again then simply refresh the page and paly again\nTHANK YOU");

// randomization for dice1
var randomNumber1=Math.round(Math.random()*6)+1;
var randomDiceImage="images/dice"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImage);

// randomization for dice2
var randomNumber2=Math.round(Math.random()*6)+1;
var randomDiceImage2="images/dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImage2);



// checking of the conditions
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="⚐ "+yourName+" wins"

}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="⚐ "+friendsName+" wins";
    

}
else{
    document.querySelector("h1").innerHTML=" ⚔ Its a draw";
}
