## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

# Rock Paper Scissors Game

### HTML
1) write html framework for game
    - what do we need to be in the html?
    - 3 labels for three inputs
    - 1 input in each label
    - inputs should be have the same name
    - inputs should be type="radio"
    - inputs should have values corresponding to rock, paper and scissors
    - button for submitting
    - section for result displays
    - 1 results display for winning
    - 1 results display for losing
    - 1 display showing wins, losses and draws
2) write IDs for:
    - button
    - inputs
    - winning display
    - losing display
    - display showing losses and wins and draws

### JavaScript
1) grab DOM elements with IDs
2) getting input from the user:
    - event listener on button
3) we want the user to choose a button and for the computer to decide if the computer's throw wins, or the user's throw wins
    - HOW?
    - we store in a variable a number that the computer chooses, from 0-1 using math.random()
    - we multiply math random by 3, floor it. answer could be 0, 1, 2
    - make those numbers equal strings 'rock' 'paper' or 'scissors'
    - in utils.js:
        - create a didUserWin function that takes in two parameters
        - returns 'draw', 'win', 'lose'
        - write tests for each scenario
    - document.querySelector('input:checked') in the event handler
    