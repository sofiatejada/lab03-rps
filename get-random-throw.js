export function getRandomThrow(computerChoice) {

    if (computerChoice === 0) {
        return 'rock';
    } 
    
    else if (computerChoice === 1) {
        return 'paper';
    } 
    
    else {
        return 'scissors';
    }
}

