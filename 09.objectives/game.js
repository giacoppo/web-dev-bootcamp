//create secretNumber
var secretNumber = 4;

//ask user for guess
var guess = Number(prompt("Guess a number"));
//alert(guess);

//check if guess is right
if(guess === secretNumber) {
    alert("YOU GOT IT RIGHT");
}
else if(guess > secretNumber) {
    alert("Too high. Guess again!");
}
else {
    alert("Too low. Guess again!");
    //guess = Number(prompt("Guess a number"));
}