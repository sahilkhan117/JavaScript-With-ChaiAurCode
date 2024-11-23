let myname = "   hitesh       ";

// TODO: Make a Custom method that Remove extra spaces from the string start and end and return the the true lenght of the string.

//⚡ My desired output
// console.log( myname.trueLength()); 

// 🆗 but 🧐 can i make this without any function
// String.prototype.trueLength = function(){
//     return `True Lenght of ${this} is ${this.trim().length}`
// }

// console.log(myname.trueLength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
	thor: "hammer",
	spiderman: "sling",

	getSpiderPower: function () {
		console.log(`Spidy power is ${this.spiderman}`);
	},

};

Object.prototype.sahil = function () {
	console.log(`sahil is present in obj`);
};

// heroPower.sahil(); // ✅
// myHeros.sahil(); // ✅

