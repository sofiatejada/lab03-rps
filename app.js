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
    let selectedRadioEl = document.querySelector('input:checked');
    // const selectedRadio = selectedRadioEl.value;
    console.log(selectedRadioEl.value);
  //get computer input
    let computerChoice = getRandomThrow();
    console.log(computerChoice);

  // get user input
    let userChoice = selectedRadioEl.value;
    

  // use user input to update state
    if (didUserWin(computerChoice, userChoice) === 'draw') {
        timesDraw = timesDraw + 1;
        drawDisplay.textContent = `Wow, the computer chose ${computerChoice}, that's a draw!`;
        drawsSpan.textContent = timesDraw;
    }

  // update DOM to reflect the new state




});

