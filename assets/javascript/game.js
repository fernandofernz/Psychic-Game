//Psychic Game
//User text input must match the randomly computer assigned letter

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z"
];
var userGuess = [];

var wins = 0;
var losses = 0;
var userTries = 9;
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
var guessesSoFar = [];
var userInput;


document.querySelector('#wins').innerHTML= "Wins: " + wins;
document.querySelector('#losses').innerHTML= "Losses: " + losses;
document.querySelector('#userTries').innerHTML= "Guesses left: " + userTries;

document.onkeyup = function (event) {
    
    var userInput = event.key;
    guessesSoFar.push(userInput);
    userTries--;
    document.querySelector('#userTries').innerHTML= "Guesses left: " + userTries;

    var reset = function () {
        userTries = 9;
        guessesSoFar = [];
        computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    console.log(userInput);
    console.log(computerGuess);
    console.log(wins);


    if (userTries > 0) {

        if (userInput == computerGuess) {
            wins++;
            document.querySelector('#wins').innerHTML= "Wins: " + wins;
            //console.log(wins);
            reset();
        }
    } else if (userTries == 0) {
    
        losses++;
        document.querySelector('#losses').innerHTML= "Losses: " + losses;
        //console.log(wins);
        reset();
    }
    
}

