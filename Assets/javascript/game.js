//Turn the document on with the ready function
$(document).ready(function() {

//Have the get started button explain the game: 
$("#how").on("click", function() {
	window.alert("To play the game, your goal is to guess what letter the computer is thinking of. To do this, click any letter on your keyboard and the game will tell you if you are right or wrong and count your wins and losses.");
});

//Set letter variables as an array, all letter choices:
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// Set empty variables for the counts in the game:
var wins = 0;
var losses = 0;
var guesses = 0;
// var computerchoice = '';
var userchoice = '';
var userchoices = [];


//Tell the computer to make a choice secretly to start the game
var computerchoice = letters[Math.floor(Math.random() * letters.length)];
console.log(computerchoice)

//Tell the system to count any keystroke from the user as a Guess and log the the guess
document.addEventListener("keyup", function() {
	var userchoice = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userchoice);
	userchoices.push(userchoice);
});



// var userchoice= $(document).keyup(function() {
//	var userchoice = String.fromCharCode(event.keyCode).toLowerCase();
//	console.log(userchoice);
//	userchoices.push(userchoice);
//});

//Count the guesses the user has made
var guesses = userchoices.length;


//Tell the system to identify a win and reset the guesses
if (userchoice === computerchoice) {
	wins + 1;
}

//Tell the system to identify a loss and reset the guesses
if (userchoices.length > 8) {
	losses + 1;
	window.alert("You lose. Try again! If you don't like watching your losses grow, you can click Reset It to start all over.");
}

//Tell the reset button to completely clear the game and start over
$("#reset").on("click", function() {
	window.alert("You have cleared the game and are ready to start over! Good luck!");
	$("#pagetitle").text("Psychic Game");
	$("#wins").text("0");


	});

//Tell the GetFunky button to be some easter egg
$("#getfunky").on("click", function() {
	$("#pagetitle").text("Don't touch me like that!");
});

//End the document ready function
});