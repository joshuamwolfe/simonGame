// global variables
let buttonColors = ['red', 'blue', 'green', 'yellow'];
let gamePattern = [];

function nextSequence() {
    let theRandomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColors[theRandomNumber];
    gamePattern.push(randomChosenColour);
};

