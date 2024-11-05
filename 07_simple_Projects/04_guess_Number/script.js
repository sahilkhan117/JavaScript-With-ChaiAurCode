let randomNumber = Math.ceil(Math.random() * 100);
// console.log(randomNumber);

const userInput = document.querySelector("#input");
const submit = document.querySelector("#submit");
const GuessSlot = document.querySelector("#guessSlot");
const remaining = document.querySelector("#attempts");
const lowOrHi = document.querySelector("#lowOrHi");
const startOver = document.querySelector(".resultpara");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        
		const guess = parseInt(userInput.value);

		validateGuess(guess);
	});
}


function validateGuess(guess) {
	// between 1 to 100

	if (isNaN(guess)) {
		alert("Please enter a valid Number");
        userInput.value = ''
	} else if (guess < 1) {
        alert("Enetr enter a number Greater then 0");
        userInput.value = ''
	} else if (guess > 100) {
        alert("Enetr enter a number less then 100");
        userInput.value = ''
	} else {
		prevGuess.push(guess);
		if (numGuess === 11) {
			displayGuess(guess);
			displayMSG(`Game Over. Random no. is ${randomNumber}`);
			endGamne();
		} else {
			displayGuess(guess);
			checkGuess(guess);
		}
	}
}