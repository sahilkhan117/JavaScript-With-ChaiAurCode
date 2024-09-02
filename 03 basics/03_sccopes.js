// {} => used as scope with any if, for, func ,etc...

let a = 10; // 👍🏻 in the scope only
const b = 20; // constant in scope only
var c = 30; //⚠️ 💥💥scope - biscope se koi matlab nahi

if (true) {
	let a = 100;
	const b = 200;
	var c = 300;

	console.log("INNER a :", a);
	console.log("INNER a :", b);
	console.log("INNER a :", c);
}

console.log("a", a); // diff as inner (😎😎🤩best to use)
console.log("b", b);
console.log("c", c); // ⚠️⚠️ this changed by inner also
/*
INNER a : 100
INNER a : 200
INNER a : 300
a 10
b 20
c 300
*/

// ****** END