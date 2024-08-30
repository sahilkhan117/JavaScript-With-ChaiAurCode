function calculateprice(...n1) {
	// n1 - select first, ...n1 -> arrey of all
	return n1;
}
console.log(calculateprice(11, 2, 73, 873));

// HANDLING OBJECT
const user = {
	username: "SAHIL",
	prices: 199, // is changes price to prices
};
function handleobj(anyobj) {
	console.log(`Username is ${anyobj.username} and price is ${anyobj.price}`);
}
handleobj(user); // Username is SAHIL and price is undefined (⚠️ access problem must use conditions ?)

handleobj({ username: "SAHIL", price: 1199 }); // psdded as obj

// HANDLE ARRAY
const myarr = [200, 400, 500, 700];
function ret2ndval(anyarr) {
	return anyarr[1];
}
console.log(ret2ndval(myarr)); // pass arr variable
console.log(ret2ndval([1, 2, 3, 4, 5, 6, 7, 8])); // pass arr as instance