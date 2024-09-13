const userarr = []

if (userarr) {
    console.log('Got user');
}
else {
    console.log('cant got the user');
}
// Got User (means epty arr is true)

// ⭐⭐⭐⭐ some type of values refer always truth or false used in condition

// 🤥🤥 FALSY : (only some)
// false, 0, -0, BigInt 0n, "", null, undefied, NaN

// 🤩🤩TRUTHY :
// true, 'false', '0', "not empty", [], {}, function(){}

if (userarr.length === 0){
    console.log("Array is Empty");
}

let emptyobj = {}
if (Object.keys(emptyobj).length === 0) console.log('empty obj');
// empty obj


// NULLISH coalescing oprator (??): null undefined

let val1;
// val1 = 5 ?? 10 // 5 (first preference)
val1 = null ?? 15 // 15
val1 = undefined ?? 20 // 20

console.log(val1);

// Ternary OPRATOR
// (<cond>)? <true part> : <false part>
let icecreame = 100
