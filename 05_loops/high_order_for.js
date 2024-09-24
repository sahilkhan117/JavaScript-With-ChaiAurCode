// 1️⃣ for of
// APPLY ON : array, string, map
// NOT APPLY : object
// return : pair of index and value as arrey

// for (const element of object) {
// }

arr = [1, 2, 3, 4, 5];
for (const i of arr) {
	// just  like python
	console.log(i)
}
// Output
// 1
// 2
// 3
// 4
// 5

greeting = "Hello World!";
for (const greet of greeting) {
	console.log(greet);
}
// Output
// H
// e
// l
// l
// o
 
// W
// o
// r
// l
// d
// !

let mymap = new Map(); // holding key value eith its order
mymap.set("2", "two");
mymap.set("1", "one");
mymap.set("3", "three");

for (const [k, v] of mymap) { // return arrey of [key, value]
	console.log(k, " : ", v);

	// OUTPUT
	// 2  :  two
	// 1  :  one
	// 3  :  three
}

let myobj = {
	IN : "india",
	USA : "United states of America"
}