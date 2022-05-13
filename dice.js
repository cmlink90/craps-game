// The below code attaches the function to the button with the class roll-button to run the function whenever
// the button is pressed
 document.getElementById('roll-button').addEventListener("click", diceRoll);



//  The function below generates random numbers between 1-6 resulting in different dice for each random number, which are then populated in place of the img

function diceRoll(){
    var randomNumber1 = Math.random() * 6;
    randomNumber1 = Math.floor(randomNumber1) + 1;
    var randomNumber2 = Math.random() * 6;
    randomNumber2 = Math.floor(randomNumber2) + 1;
   
 console.log(randomNumber1, randomNumber2);


 if (randomNumber1 === 1){
     document.querySelector("img.img1").setAttribute("src", "dice1.png");
 }
else if (randomNumber1 === 2){
    document.querySelector("img.img1").setAttribute("src", "dice2.png");
}
else if (randomNumber1 === 3){
    document.querySelector("img.img1").setAttribute("src", "dice3.png");
}
else if (randomNumber1 === 4){
    document.querySelector("img.img1").setAttribute("src", "dice4.png");
}
else if (randomNumber1 === 5){
    document.querySelector("img.img1").setAttribute("src", "dice5.png");
}
else if (randomNumber1 === 6){
    document.querySelector("img.img1").setAttribute("src", "dice6.png");
}
 

if (randomNumber2 === 1){
    document.querySelector("img.img2").setAttribute("src", "dice1.png");
}
else if (randomNumber2 === 2){
   document.querySelector("img.img2").setAttribute("src", "dice2.png");
}
else if (randomNumber2 === 3){
   document.querySelector("img.img2").setAttribute("src", "dice3.png");
}
else if (randomNumber2 === 4){
   document.querySelector("img.img2").setAttribute("src", "dice4.png");
}
else if (randomNumber2 === 5){
   document.querySelector("img.img2").setAttribute("src", "dice5.png");
}
else if (randomNumber2 === 6){
    document.querySelector("img.img2").setAttribute("src", "dice6.png");
}
  
if (randomNumber1 + randomNumber2 == 2){
    document.getElementById('roll-result').innerHTML= "You rolled a 2 (Snake Eyes). If this is your first roll, YOU LOSE CHUMP! Start over. If not, shoot again.";
}
else if (randomNumber1 + randomNumber2 == 3){
    document.getElementById('roll-result').innerHTML= "You rolled a 3! If this is your first roll, YOU LOSE PARTNA! Start over. If not, shoot again!";
}
else if (randomNumber1 + randomNumber2 == 4){
    document.getElementById('roll-result').innerHTML = "You rolled a 4.";
}
else if (randomNumber1 + randomNumber2 == 5){
    document.getElementById('roll-result').innerHTML= "You rolled a 5.";
}
else if (randomNumber1 + randomNumber2 == 6){
    document.getElementById('roll-result').innerHTML= "You rolled a 6";
}
else if (randomNumber1 + randomNumber2 == 7){
    document.getElementById('roll-result').innerHTML= "You rolled a <strong>7<strong>. If this is your first roll, YOU WIN! GET YO MONEY!. If not, YOU LOSE!";
    }
else if (randomNumber1 + randomNumber2 == 8){
    document.getElementById('roll-result').innerHTML= "You rolled a 8";
}
else if (randomNumber1 + randomNumber2 == 9){
    document.getElementById('roll-result').innerHTML= "You rolled a 9";
}
else if (randomNumber1 + randomNumber2 == 10){
    document.getElementById('roll-result').innerHTML= "You rolled a 10";
}
else if (randomNumber1 + randomNumber2 == 11){
    document.getElementById('roll-result').innerHTML= "You rolled a 11. If this is your first roll, YOU WIN! GET YO MONEY SHOOTER!";
}
else if (randomNumber1 + randomNumber2 == 12){
    document.getElementById('roll-result').innerHTML= "You roll a 12 .If this is your first roll, YOU LOSE SUCKA! Start over. If not, shoot again."
}
}
 
        



