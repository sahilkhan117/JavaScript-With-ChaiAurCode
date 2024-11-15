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

// 4️⃣
const promiceFour = new Promise(function (resolve, reject) {
	setTimeout(function () {
		let error = true;
		if (!error) {
			resolve({ username: "sahil" });
		} else {
			reject("ERROR: SOMETHING WENT WRONG");
		}
	}, 1000);
});

promiceFour
	.then(function (user) {
		console.log(user);
		return user.username;
	})
	.then(function (username) {
		console.log(username);
	})
	.catch(function (error) {
		console.log(error);
	})
	.finally(() => console.log("Promise Ended"));

// 5️⃣
const promiceFive = new Promise(function (resolve, reject) {
	setTimeout(function () {
		let error = true;
		if (!error) {
			resolve({ username: "js" });
		} else {
			reject("ERROR: js WENT WRONG");
		}
	}, 1000);
});

async function consumePromiseFive() {
	try {
		let responce = await promiceFive;
		console.log(responce);
	} catch (error) {
		console.log(error);
	}
}
consumePromiseFive();
