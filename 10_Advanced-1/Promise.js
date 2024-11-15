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

// 2️⃣
new Promise(function (resolve, reject) {
	setTimeout(function () {
		console.log("Async 2 complete");
		resolve();
	}, 1000);
}).then(function () {
	console.log("Async 2 resolved");
});


// 3️⃣
const promiceThree = new Promise(function (resolve, reject) {
	setTimeout(function () {
		console.log("Async Task 3");
		resolve({ username: "chai", email: "chai@code.com" });
	}, 1000);
});
promiceThree.then(function (user) {
	console.log(user);
});