let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let autoRestart = document.getElementById("gameResult1");
let randomNum = Math.ceil(Math.random() * 100);

function updateRandomNumber() {
    randomNum = Math.ceil(Math.random() * 100);
}

function hideMessage(element) {
    if (element === "userInput") {
        setTimeout(() => {
            element.value = '';
            element.style.backgroundColor = '';
        }, 3000);

    } else {
        setTimeout(() => {
            element.textContent = '';
            element.style.backgroundColor = '';
        }, 3000);
    }
}

function checkGuess() {
    console.log(randomNum);
    let num = parseInt(userInput.value);

    if (num > randomNum) {
        gameResult.style.backgroundColor = "blue";
        gameResult.textContent = num + " is too high! Try again.";
        hideMessage(gameResult);
    } else if (num < randomNum) {
        gameResult.style.backgroundColor = "blue";
        gameResult.textContent = num + " is too low! Try again.";
        hideMessage(gameResult);
    } else if (num === randomNum) {
        gameResult.style.backgroundColor = "green";
        gameResult.textContent = "Congratulations! You guessed right.";
        autoRestart.textContent = "The game will auto-restart :)";
        hideMessage(gameResult);
        hideMessage(autoRestart);
        hideMessage(userInput);
        updateRandomNumber();
    } else {
        gameResult.style.backgroundColor = "red";
        gameResult.textContent = "Please enter a valid number!";
        hideMessage(gameResult);
    }
}