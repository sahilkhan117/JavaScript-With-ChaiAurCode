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

function checkGuess(guess) {
    // low or high
	if (guess == randomNumber) {
        displayMSG(`You Guessed it right <span class="bg-green-500 px-2"> ${guess} </span>`);
		endGamne();
	} else if (guess < randomNumber) {
        displayMSG(`No. is TOOO LOW`);
	} else if (guess > randomNumber) {
        displayMSG(`No. is TOOO HIGH`);
	}
}

function displayGuess(guess) {
    // update slot
    userInput.value = ''
    GuessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMSG(message) {
	// intract DOM
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGamne() {
    userInput.value = ''
    userInput.setAttribute("disabled", '')
    p.classList.add('button')
    p.innerHTML = `<h2 class="border-2 rounded-full p-2 my-4 bg-green-500 font-bold outline outline-blue-500 outline-2 w-1/2 m-auto" id="newGame">Start New Game</h2>`

    startOver.appendChild(p)
    playGame = false

    newGamne()
}

function newGamne() {
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener('click', e => {
        randomNumber = Math.ceil(Math.random() * 100);
        prevGuess = []
        numGuess = 1
        GuessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute("disabled")
        startOver.removeChild(p)
        playGame = true
    })
}
