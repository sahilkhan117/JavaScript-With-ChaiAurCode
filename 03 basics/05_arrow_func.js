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
