// if
const isLogIn = true;
const tempr = 41;

// condition = return true or false

// SYNTAX 🔢
// if (<condition>) { <scope of if> <true block>}
// else { <false block>}


if (tempr == 40) {
	console.log(`temp is 40`);
} else {
	console.log(`no 40`);
}

// CONDITIONAL CASES (OPRATOR)
// <, >, <=, >=, ==, !=, ===, !==

let score = 200;
if (score > 100) {
	let power = "fly";
	console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`); // 🔴 not accesable


const balance = 1000;

if (balance > 500) console.log(`test`); // short-hand single line
