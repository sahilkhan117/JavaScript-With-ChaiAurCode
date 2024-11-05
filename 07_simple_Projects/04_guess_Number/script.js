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
