// import functions and grab DOM elements
import { getRandomThrow } from './get-random-throw.js';
import { didUserWin } from './utils.js';

//DOM elements
const selectedRadio = document.querySelector('input:checked');
const button = document.querySelector('#button');
const timesWonSpan = document.querySelector('#times-won');
const timesLostSpan = document.querySelector('#times-lost');
const numberOfDraws = document.querySelector('#number-of-draws');
const lostDisplay = document.querySelector('lost-display');
const wonDisplay = document.querySelector('won-display');


// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
