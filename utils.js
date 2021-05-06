export function didUserWin(computerChoice, userChoice) {

    //if it's a draw
    if (computerChoice === userChoice) {
        return 'draw';
    }

    //if the user lost
    else if ((computerChoice === 'rock' && userChoice === 'scissors') || (computerChoice === 'paper' && userChoice === 'rock') || (computerChoice === 'scissors' && userChoice === 'paper')) {
        return 'lose';
    } 
    
    //if the user won
    else if ((computerChoice === 'rock' && userChoice === 'paper') || (computerChoice === 'paper' && userChoice === 'scissors') || (computerChoice === 'scissors' && userChoice === 'rock')) {
        return 'win';
    }
    
}


// if (userGuess === 'rock' && computerChoice === 'rock') {
//     return 'draw';
// } else if (userGuess === 'rock' && computerChoice === 'paper') {
//     return 'lose';
// } else if (userGuess === 'rock' && computerChoice === 'scissors') {
//     return 'win';
// } else if (userGuess === 'paper' && computerChoice === 'rock') {
//     return 'win';
// } else if (userGuess === 'paper' && computerChoice === 'scissors') {
//     return 'lose';
// } else if (userGuess === 'paper' && computerChoice === 'paper') {
//     return 'draw';
// } else if (userGuess === 'scissors' && computerChoice === 'rock') {
//     return 'lose';
// } else if (userGuess === 'scissors' && computerChoice === 'paper') {
//     return 'win';
// } else if (userGuess === 'scissors' && computerChoice === 'scissors') {
//     return 'draw';
// }
