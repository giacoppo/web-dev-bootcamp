var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var resetButton = document.querySelector("#reset");
var winningScoreDisplay = document.querySelector("#playScore");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
var winner = document.getElementById("winner");
var winningPlayer1 = document.getElementById("winningPlayer");
var winningPlayer2 = document.getElementById("winningPlayer");

p1Button.addEventListener("click", function() {
    if(!gameOver) {
        p1Score++;
        // console.log(p1Score, winningScore);
        if(p1Score === winningScore) {
            // console.log("GAME OVER");
            gameOver = true;
            p1Display.classList.add("winner");
            winningPlayer1.textContent = "1";
            winner.style.display = "block";
        }
        //console.log(p1Score);
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function() {
    if(!gameOver) {
        p2Score++;
        if(p2Score === winningScore) {
            // console.log("GAME OVER");
            gameOver = true;
            p2Display.classList.add("winner");
            winningPlayer1.textContent = "2";
            winner.style.display = "block";
        }
        //console.log(p2Score);
        p2Display.textContent = p2Score;    
    }
});

resetButton.addEventListener("click", function() {
    reset();
    numInput.value = 0;
    winningScoreDisplay.textContent = 5;
    winningScore = 5;
});

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    winner.style.display = "none";
    gameOver = false;
}

numInput.addEventListener("change", function() {
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
});