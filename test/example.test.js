// IMPORT MODULES under test here:
import { didUserWin } from '../utils.js';
import { getRandomThrow } from '../get-random-throw.js';

const test = QUnit.test;

test('testing didUserWin', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'draw';
    const expectedDrawPaper = 'draw';
    const expectedDrawScissors = 'draw';
    const expectLose = 'lose';
    const expectLose2 = 'lose';
    const expectWin = 'win';
    const expectWin2 = 'win';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('rock', 'rock');
    const actualDrawPaper = didUserWin('paper', 'paper');
    const actualDrawScissors = didUserWin('scissors', 'scissors');
    const actualLose = didUserWin('rock', 'scissors');
    const actualLose2 = didUserWin('paper', 'rock');
    const actualWin = didUserWin('rock', 'paper');
    const actualWin2 = didUserWin('paper', 'scissors');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    expect.equal(actualDrawPaper, expectedDrawPaper);
    expect.equal(actualDrawScissors, expectedDrawScissors);
    expect.equal(expectLose, actualLose);
    expect.equal(expectLose2, actualLose2);
    expect.equal(expectWin, actualWin);
    expect.equal(expectWin2, actualWin2);
});


test('testing getRandomThrow', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expectedRock = 'rock';
    const expectedPaper = 'paper';
    const expectedScissors = 'scissors';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actualRock = getRandomThrow(0);
    const actualPaper = getRandomThrow(1);
    const actualScissors = getRandomThrow(2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actualRock, expectedRock);
    expect.equal(actualPaper, expectedPaper);
    expect.equal(actualScissors, expectedScissors);
});
