let randomNum = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const Remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('h3')

let prevGuess = [];
let numGuess = 1;

let playgame = true;

if (playgame) {
    submit.addEventListener('click', function (event) {
        event.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('please Enter a valid number');
    } else if (guess < 1) {
        alert('please Enter number more than 1');
    } else if (guess > 100) {
        alert('please Enter number less than 100');
    } else {
        prevGuess.push(guess)
        if (numGuess === 10) {
            displayGuess(guess);
            displayMessage(`Game Over.Random Number Was ${randomNum}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNum) {
        displayMessage('You Guess Right');
        endGame();
    } else if (guess < randomNum) {
        displayMessage(`Number is TOOO Low`);
    } else if (guess > randomNum) {
        displayMessage(`Number is TOOO High`);
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    Remaining.innerHTML = `${10 - numGuess}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h3 id ='newGame'>Start New Game</h3>`;
    p.style.backgroundColor = 'rebeccapurple';
    p.style.color = '#fff';
    p.style.margin = '0px 5vw';
    p.style.borderRadius = '5px';
    p.style.textAlign = 'center'
    p.style.cursor = 'pointer';
    startOver.appendChild(p);
    playgame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNum = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        Remaining.innerHTML = `${10 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playgame = true;
    });
}