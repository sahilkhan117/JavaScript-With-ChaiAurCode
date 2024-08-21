const score = 400;
// console.log(score);

const balance = new Number(875);
// console.log(balance);
/*
Number {100}
[[Prototype]]: Number
    constructor: ƒ Number()
    toExponential: ƒ toExponential()
    toFixed: ƒ toFixed()
    toLocaleString: ƒ toLocaleString()
    toPrecision: ƒ toPrecision()
    toString: ƒ toString()
    valueOf: ƒ valueOf()
*/

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // best of decimal points


const othNum = 23.8966;
// console.log(othNum.toPrecision(3)); // round off to 3 position

const hun = 1000000;
// console.log(hun.toLocaleString("en-IN")); // make more readible with commas (default US)

// ⭐⭐ just like this we have Number datatype to determine many more numbers  values

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.EPSILON); // 2.220446049250313e-16


// 🧮✖️➕➖➗🟰 *********** Math **************

// console.log(Math);
// console.log(Math.abs(-7)); // 7
// console.log(Math.round(4.5)); // 5
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(5.9)); // 5
// console.log(Math.min(569,67,56,36,609,73,152));
// console.log(Math.max(569,67,56,36,609,73,152));


// console.log(Math.random()); //⭐ betwee 0 and 1
// console.log(Math.random()*10 + 1);

// use math.random in a range
let mini = 1;
let maxi = 6;
// Generalized formula 🧮⭐👇🏻👇🏻
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// ++++++++++++++++❗❗❗ Check its  ❗❗❗+++++++++++++++++++++
