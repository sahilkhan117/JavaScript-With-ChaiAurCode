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
// 🔥🧐 BUT in web there have a Window object Contains document and inner structures 

function chai() {
	console.log(this);
	/*
    <ref *1> Object [global] {
        global: [Circular *1],
        clearImmediate: [Function: clearImmediate],
        setImmediate: [Function: setImmediate] {
          [Symbol(nodejs.util.promisify.custom)]: [Getter]
        },
        clearInterval: [Function: clearInterval],
        clearTimeout: [Function: clearTimeout],
        setInterval: [Function: setInterval],
        setTimeout: [Function: setTimeout] {
            [Symbol(nodejs.util.promisify.custom)]: [Getter]
        },
        queueMicrotask: [Function: queueMicrotask],
        structuredClone: [Function: structuredClone],
        atob: [Getter/Setter],
        btoa: [Getter/Setter],
        performance: [Getter/Setter],
        fetch: [Getter/Setter],
        navigator: [Getter],
        crypto: [Getter]
    }
  */
}
// chai();

// ****************** Arrow Function ******************
// ALWAYS USED IN VARIABLE
const pani = () => {
    console.log(this); // {} (as global variable func result) 
}
let add2 = (n1, n2) => { 
    return n1 + n2
}
console.log(add2(5, 6)) // 11

// IMPLICITE RETURN AS Arrow Func
    // ⚪ in this syntex {} removed and directly write return value without keyword
    // ⚪ {} not applicable
    let ADD2 = (n1, n2) => n1 + n2
    console.log(ADD2(2,4));
    
        // ⚪ if {} needed to return a obj use () 
let pri = (s = "sahil") => ({name : s})
console.log(pri()); // { name: 'sahil' }