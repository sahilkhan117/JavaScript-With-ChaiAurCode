// PROMISE
// the promice object represents the eventual completion (or failure) of an asuncronous opration and its resulting value

const promiceOne = new Promise(function (resolve, reject) {

    // Do any async task
	// Network Call, DB call, Cryptography
	setTimeout(function () {
		console.log("Async Task Is complete");
		resolve(); // connect resolve 🔗 then
	}, 1000);
});

promiceOne.then(function () {
	console.log("Promise consumed");
});