

var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;


//  var rollTheDice = document.getElementById('roll-button');
//  rollTheDice.onclick = diceRoll();


function diceRoll(){
 
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

// }
// diceRoll(randomNumber1, randomNumber2);
        



