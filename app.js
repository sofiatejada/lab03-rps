// import functions and grab DOM elements
import { getRandomThrow } from './get-random-throw.js';
import { didUserWin } from './utils.js';

//DOM elements
// const selectedRadio = document.querySelector('input:checked');

const button = document.querySelector('#button');
const timesWonSpan = document.querySelector('#times-won');
const timesPlayedSpan = document.querySelector('#times-played');
const drawsSpan = document.querySelector('#number-of-draws');
const lostDisplay = document.querySelector('#lost-display');
const wonDisplay = document.querySelector('#won-display');
const drawDisplay = document.querySelector('#draw-display');
const timesLostSpan = document.querySelector('#times-lost');
const reset = document.querySelector('#reset');


// initialize state
let timesWon = 0;
let timesPlayed = 0;
let timesDraw = 0;
let timesLost = 0;



// set event listeners 
button.addEventListener('click', () => {
    
    //hide stuff first
    drawDisplay.style.display = 'none';
    wonDisplay.style.display = 'none';
    lostDisplay.style.display = 'none';


    //get computer input
    let computerChoice = getRandomThrow();


    // get user input
    let selectedRadio = document.querySelector('input:checked');
    let userChoice = selectedRadio.value;


    //compare user choice and computer choice by putting it into the function

    //if it's a draw
    if (didUserWin(computerChoice, userChoice) === 'draw') {

        //show the draw section
        drawDisplay.style.display = 'block';
        wonDisplay.style.display = 'none';
        lostDisplay.style.display = 'none';

        //count the draw
        timesDraw = timesDraw + 1;

        //update times played
        timesPlayed = timesPlayed + 1;
        timesPlayedSpan.textContent = timesPlayed;

        //update the draw count
        drawsSpan.textContent = timesDraw;

        //tell the user what happened
        drawDisplay.textContent = `Wow, the computer chose ${computerChoice}, that's a draw!`;
    } 
    
    //if the user lost
    else if (didUserWin(computerChoice, userChoice) === 'lose') {

        //show the lost section
        drawDisplay.style.display = 'none';
        wonDisplay.style.display = 'none';
        lostDisplay.style.display = 'block';

        //update times played
        timesPlayed = timesPlayed + 1;
        timesPlayedSpan.textContent = timesPlayed;

        //update times lost
        timesLost = ((timesPlayed) - (timesWon + timesDraw));
        timesLostSpan.textContent = timesLost;

        //tell the user what happened
        lostDisplay.textContent = `The computer chose ${computerChoice}. You lose`;
    } 
    
    //if the user won
    else if (didUserWin(computerChoice, userChoice) === 'win') {

        //show the won section
        drawDisplay.style.display = 'none';
        wonDisplay.style.display = 'block';
        lostDisplay.style.display = 'none';

        //count the win
        timesWon = timesWon + 1;

        //update win count
        timesWonSpan.textContent = timesWon;

        //update times played
        timesPlayed = timesPlayed + 1;
        timesPlayedSpan.textContent = timesPlayed;

        //tell the user what happened
        wonDisplay.textContent = `The computer chose ${computerChoice}. You win!`;
    }
});

reset.addEventListener('click', () => {

    //reset the displays
    drawDisplay.style.display = 'none';
    wonDisplay.style.display = 'none';
    lostDisplay.style.display = 'none';

    //reset the counting spans
    timesPlayedSpan.textContent = '';
    drawsSpan.textContent = '';
    timesLostSpan.textContent = '';
});

