// Type type of Data

// 1️⃣Primitive (7) => string, Number, Boolean, null, undefined, BigInt, Symbol
let MyString = "Hello" // String
let MyNumber = 33 // Number
let isLoggedIn = true // Boolean
let aNull = null // null
let undef // undefined
let bigNumber = 6425762373478967567n // BigInt
let Asymbol = Symbol("121") // symbol (unique)

// 2️⃣Non-Primitive (Reference) => Arrey, Object, Function, etc...
let myArr = [true, "two", 3]
console.log(typeof myArr); // object

let myObj = {
    name : "sahil",
    age : 19
}
console.log(typeof myObj); // object

let myFunc = function(){
    console.log("this is function");
}
console.log(typeof myFunc); // function

// *********END