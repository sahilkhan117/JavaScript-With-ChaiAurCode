// this oprator
const user = {
	username: "hitesh",
	price: 199,

    welcomeMSG: function () {
		// console.log(`${this.username} , Welcome to website`);
		console.log(this);
	},
};
// user.welcomeMSG() // hitesh , Welcome to website
// { username: 'hitesh', price: 199, welcomeMSG: [Function: welcomeMSG] }

user.username = "Sahil";
// user.welcomeMSG() // Sahil , Welcome to website
// { username: 'Sahil', price: 199, welcomeMSG: [Function: welcomeMSG] }

// GLOBAL THIS
// console.log(this); // {}