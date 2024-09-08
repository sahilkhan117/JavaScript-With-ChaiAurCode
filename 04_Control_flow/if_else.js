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

// if (balance > 500) {
// 	console.log("more then 500");
// }
// else if (balance > 800) {
// 	console.log("more then 800");
// }
// else if (balance > 1000) {
// 	console.log("more then 1000");
// }
// else {
//     console.log('less then 1200');
// }

// && AND || oprator 

const userin = true
const debitcard = true
const logGoogle = false
const logEmail = true

if (userin && debitcard){ // AND
    console.log('allow to perchase');   
}

if (logGoogle || logEmail) { // OR
    console.log('user logged in');
    
}