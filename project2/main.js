let inpGuess = inputField;
let startNew = submit;
let allGuess = [];

let runGame = true;
let lives = 1;

function randomNumber() {
    let randomNum = parseInt(Math.random() * 100 + 1);
    return randomNum;
}

submit.addEventListener("click", (event) => {
    event.preventDefault();
    let guessedVal = parseInt(inpGuess.value);
    let validator = guessValidator(guessedVal);
    if (validator) {
        warningMessage("");
        let randomNum = randomNumber();
        // console.log(`Guessed Number: ${guessedVal}\nRandom number: ${randomNum}`);
        if (guessedVal === randomNum) {
            gameOver("Congratulations! you guessed right.");
        } else {
            displayGuess(guessedVal);
            lives++;
            displayLives(lives);
            inpGuess.value = "";
        }
    } else {
        inpGuess.value = "";
        // Extra tasks.
    }
});

function guessValidator(guess) {
    if (runGame) {
        if (isNaN(guess)) {
            warningMessage("Input valid number.");
            return false;
        } else if (guess < 1 || guess > 100) {
            warningMessage("Input number from 1-100 only.");
            return false;
        } else {
            return true;
        }
    } else {
        newGame();
        // Extra tasks here.
    }
}

function warningMessage(message) {
    warning.innerHTML = `${message}`;
}

function gameOver(message) {
    preGuess.innerHTML = "";
    remGuess.innerHTML = "";
    result.innerHTML = `${message}`;
    runGame = false;
    startNew.value = "New Game";
    inpGuess.value = "";
    inpGuess.setAttribute("disabled", "");
}

function displayGuess(guess) {
    allGuess.push(guess);
    allGuessString = allGuess.toString();
    preGuess.innerHTML += `${guess}, `;
}

function displayLives(callbackLive) {
    if (callbackLive <= 10) {
        let remLive = 11 - callbackLive;
        remGuess.innerHTML = `${remLive}`;
    } else {
        runGame = false;
        gameOver("Game Over!");
    }
}

function newGame() {
    runGame = true;
    result.innerHTML = "";
    allGuess = [];
    lives = 1;
    startNew.value = "Submit";
    inpGuess.removeAttribute("disabled");
}
