//Turn the document on with the ready function
$(document).ready(function() {

//Set letter variables as an array, all letter choices:
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// Set empty variables for the counts in the game:
var wins = 0;
var losses = 0;
var guesses = 0;
var computerchoice = '';
var userchoice = '';
var userchoices = '';


//Tell the computer to make a choice secretly to start the game
var computerchoice = letters[Math.floor(Math.random() * letters.length)];
console.log(computerchoice)

//Tell the system to count any keystroke from the user as a Guess and log the the guess
var userchoice = $(document).keyup(function() {
	var txtinput = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(txtinput);
	userchoice = txtinput;

});

//Tell the system to identify a win and reset the guesses

//Tell the system to identify a loss and reset the guesses

//Tell the reset button to completely clear the game and start over
$("#reset").on("click", function() {
	$("#display").empty();
	});

//Tell the GetFunky button to change the stylesheet randomly

//End the document ready function
});