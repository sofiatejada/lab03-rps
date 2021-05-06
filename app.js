// import functions and grab DOM elements
import { getRandomThrow } from './get-random-throw.js';
import { didUserWin } from './utils.js';

//DOM elements
// const selectedRadio = document.querySelector('input:checked');

const button = document.querySelector('#button');
const timesWonSpan = document.querySelector('#times-won');
const timesLostSpan = document.querySelector('#times-lost');
const drawsSpan = document.querySelector('#number-of-draws');
const lostDisplay = document.querySelector('#lost-display');
const wonDisplay = document.querySelector('#won-display');
const drawDisplay = document.querySelector('#draw-display');


// initialize state
let timesWon = 0;
let timesLost = 0;
let timesDraw = 0;



// set event listeners 
button.addEventListener('click', () => {
    //JS doesn't want to have this outside the the event listener because it's gonna reassign the const every time you click, and you can't reassign const
    let selectedRadio = document.querySelector('input:checked');
    // const selectedRadio = selectedRadioEl.value;
    console.log(selectedRadio.value);
    //get computer input
    let computerChoice = getRandomThrow();
    console.log(computerChoice);

    // get user input
    let userChoice = selectedRadio.value;


    //compare user choice and computer choice by putting it into the function
    if (didUserWin(computerChoice, userChoice) === 'draw') {
        //count the draw
        timesDraw = timesDraw + 1;
        //update the draw count
        drawsSpan.textContent = timesDraw;
        //tell the user what happened
        drawDisplay.textContent = `Wow, the computer chose ${computerChoice}, that's a draw!`;
    } else if (didUserWin(computerChoice, userChoice) === 'lose') {
        console.log(computerChoice, userChoice, 'lose');
        timesLost = timesLost + 1;
        timesLostSpan.textContent = timesLost;
        //tell the user what happened
        lostDisplay.textContent = `The computer chose ${computerChoice}. You lose`;
    } else if (didUserWin(computerChoice, userChoice) === 'win') {
        console.log(computerChoice, userChoice, 'win');
        timesWon = timesWon + 1;
        timesWonSpan.textContent = timesWon;
        //tell the user what happened
        wonDisplay.textContent = `The computer chose ${computerChoice}. You win!`;
    }






});

