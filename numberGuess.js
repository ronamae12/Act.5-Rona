const correctNumber = Math.floor(Math.random() * 10) + 1;


let userGuess = 0;


while (userGuess !== correctNumber) {

    userGuess = Number(prompt("Guess a number between 1 and 10:"));


    if (userGuess > correctNumber) {
        console.log("Too high!");
    } else if (userGuess < correctNumber) {
        console.log("Too low!");
    } else {
        console.log("Correct!");
    }
}