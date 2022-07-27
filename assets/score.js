
// declare highscore element and the resetButton
var highscoreEl = document.querySelector("#highscore");
var resetButton = document.querySelector(".button-reset");

// display the score record and scorer's name according to localStorage by its key
highscoreEl.textContent= "No.1 >     " + localStorage.getItem("username") + " score: " + localStorage.getItem("highscore") + "  🏆";


// reset the score record and scorer name in localStorage by key string
function resetGame() {  
localStorage.setItem("highscore","");
localStorage.setItem("username","");
highscoreEl.textContent= "No.1 >     " + localStorage.getItem("username") + ": " + localStorage.getItem("highscore");
}

// Add click event to the resetButton
resetButton.addEventListener("click", resetGame);
