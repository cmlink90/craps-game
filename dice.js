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


 if (randomNumber1 == 1){
     document.querySelector("img.img1").setAttribute("src", "dice1.png");
 }
else if (randomNumber1 == 2){
    document.querySelector("img.img1").setAttribute("src", "dice2.png");
}
else if (randomNumber1 == 3){
    document.querySelector("img.img1").setAttribute("src", "dice3.png");
}
else if (randomNumber1 == 4){
    document.querySelector("img.img1").setAttribute("src", "dice4.png");
}
else if (randomNumber1 == 5){
    document.querySelector("img.img1").setAttribute("src", "dice5.png");
}
 

if (randomNumber2 == 1){
    document.querySelector("img.img2").setAttribute("src", "dice1.png");
}
else if (randomNumber2 == 2){
   document.querySelector("img.img2").setAttribute("src", "dice2.png");
}
else if (randomNumber2 == 3){
   document.querySelector("img.img2").setAttribute("src", "dice3.png");
}
else if (randomNumber2 == 4){
   document.querySelector("img.img2").setAttribute("src", "dice4.png");
}
else if (randomNumber2 == 5){
   document.querySelector("img.img2").setAttribute("src", "dice5.png");
}
  
}
 
        



