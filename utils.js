export function didUserWin(computerChoice, userChoice) {

    if (computerChoice === userChoice) {
        return 'draw';
    } else if ((computerChoice === 'rock' && userChoice === 'scissors') || (computerChoice === 'paper' && userChoice === 'rock')) {
        return 'lose';
    } else if ((computerChoice === 'rock' && userChoice === 'paper') || (computerChoice === 'paper' && userChoice === 'scissors')) {
        return 'win';
    }
    
}