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
var computerchoice = '';
var userchoice = '';
var userchoices = [];


//Tell the computer to make a choice secretly to start the game
var computerchoice = letters[Math.floor(Math.random() * letters.length)];
console.log("computer choice:" + computerchoice)

//Tell the system to count any keystroke from the user as a Guess
document.addEventListener("keyup", function() {
	var userchoice = String.fromCharCode(event.keyCode).toLowerCase();
	//log the choice for debug
	console.log(userchoice);
	//push each choice into the choices array
	userchoices.push(userchoice);
	//log the choices count for debug
	console.log("Here is the userchoices:" + userchoices);
	//write the choices count to the view
	$("#choices").text(userchoices);
	//Count the guesses and show them in the view
	var guesses = userchoices.length;
	$("#guesses-div").text(guesses);
	//log the guess count for debug
	console.log("these are the guesses:" + guesses);
	//Tell the system to identify a win and reset the game but keep the win
		if (userchoice === computerchoice) {
			window.alert("You Win!");
			wins++;
			$("#wins-div").text(wins);
			//$("#losses-div").text("0")
			$("#choices").text("You won. Let's try again.")
			resetGame();			
		}

	//Tell the system to identify a loss and reset the game, but keep losses count
		if (userchoices.length > 8) {
			window.alert("You lose you loser!");
			losses++;
			$("#losses-div").text(losses);
			$("#choices").text("You lose. Start over you loser.")
			resetGame();
		}
});


//Tell the reset button to completely clear the game and start over
$("#reset").on("click", function() {
	window.alert("You have cleared the game and are ready to start over! Good luck!");
	$("#pagetitle").text("Psychic Game");
	$("#wins-div").text("0");
	$("#losses-div").text("0")
	$("#choices").text("I'm reset and ready");
	$("#guesses-div").text("0");
	userchoices = [];
	computerchoice = letters[Math.floor(Math.random() * letters.length)];
	console.log("computer choice:" + computerchoice)
});


//Tell the GetFunky button to be some easter egg
$("#getfunky").on("click", function() {
	$("#pagetitle").text("Don't touch me like that!");
});

function resetGame() {
	$("#choices").text("I'm reset and ready");
	$("#guesses-div").text("0");
	userchoices = [];
	computerchoice = letters[Math.floor(Math.random() * letters.length)];
	console.log("computer choice:" + computerchoice)
}

//End the document ready function
});