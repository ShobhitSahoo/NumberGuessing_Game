let game = {
    "min": 1,
    "max": 10
};

document.addEventListener("DOMContentLoaded", function() {
    //console.log("Ready");
    game.output = document.querySelector(".output");
    game.message = document.querySelector(".message");
    game.guessInput = document.querySelector("input");
    game.btn = document.querySelector("button");
    game.btn.addEventListener("click", guessValue);
    init();
})

function guessValue() {

    if (game.btn.classList.contains("replay")) {
        init();
        game.btn.innerHTML = "Guess";
        game.guessInput.style.display = "block";
        game.btn.classList.remove("replay");
    } else {
        game.guesses++;
        let guessVar = parseInt(game.guessInput.value);
        game.guessInput.value = "";
        if (isNaN(guessVar)) {
            //If user enters something other than digits
            message("Please enter digits only ", "Red");
        } else if (guessVar === game.num) {
            //If user guessed the correct number
            message("You guessed the correct number in " + game.guesses + " tries. ", "Green");
            gameOver();
        } else {
            //If user guessed the wrong number
            let holder = guessVar < game.num ? { "c": "orange", "m": "was lower" } : { "c": "purple", "m": "was higher" };
            message("Nope :/ Incorrect. Guess " + holder.m, holder.c);
        }
        //For testing purpose
        //console.log(game.num);
    }
}

function gameOver() {
    game.btn.innerHTML = "Restart Game";
    game.guessInput.style.display = "none";
    game.btn.classList.add("replay");
    game.max += 5;
}

function init() {
    game.guesses = 0;
    game.num = randNum(game.min, game.max);
    let tempMes = "Welcome to the game. Guess a number from " + game.min + " to " + game.max;
    message(tempMes, "Blue");
}

function randNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function message(mess, color) {
    game.message.innerHTML = mess;
    game.message.style.color = color || "black";
    game.guessInput.style.borderColor = color || "black";
    game.btn.style.backgroundColor = color || "black";
    game.btn.style.color = "white";
}