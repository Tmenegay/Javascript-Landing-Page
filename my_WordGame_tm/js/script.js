//Tylor Menegay 5/6/2020
/*I didn't like how this was set up so I decided
to make my own game following a guide that still incorporates
some aspects of your game. Hope you enjoy.*/

//Create the array for the words that will be chosen:
var words = ["hippopotamus", "Milwaukee", "caterpillar", "rampart", "brigadier", "lion"];

//selects the random word
var rand = words[Math.floor(Math.random() * words.length)];

//set up the array for the answer
var ansArray = [];
for (var i = 0; i < rand.length; i++){
    ansArray[i] = "_";
}

//check to see how many letters are remaining
var remLetters = rand.length;

//The main game loop that stops only when there is no more letters remaining
while (remLetters > 0){
    //show where the players progress is at
    alert(ansArray.join(" "));

    //get the guess from the player
    var guess = prompt("Guess a letter, or click Cancel to stop.");
    //if they click enter and there is nothing to enter, the game stops
    if (guess === null){
        //exit the game loop
        break;
        //if the user enters more than 1 character, alert them that there can only be one character
    } else if (guess.length !== 1){
        alert("Please enter a single letter.");
    }
    //If the user entered it correctly, update the state of the game
    else{
        for(var j = 0; j < rand.length; j++) {
            if (rand[j] === guess){
                ansArray[j] = guess;
                remLetters--;
            }
        }
    }
}

//Show the answer and congratulate the user
alert(ansArray.join(" "));
alert("Good job! The answer was " + rand);