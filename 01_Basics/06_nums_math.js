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

const min = 1;
const max = 6;

function checkRandom(max, min) {
    let v1 = (v2 = v3 = v4 = v5 = v6 = 0);
    for (let z = 0; z < 100; z++) {
        x = Math.floor(Math.random() * (max - min + 1)) + min;
        switch (x) {
			case 1:
				v1++;
				break;
			case 2:
				v2++;
				break;
			case 3:
				v3++;
				break;
			case 4:
				v4++;
				break;
			case 5:
				v5++;
				break;
			case 6:
				v6++;
				break;
			default:
				break;
		}
    }
	return {
		1: v1,
		2: v2,
		3: v3,
		4: v4,
		5: v5,
		6: v6,
		sum: v1 + v2 + v3 + v4 + v5 + v6,
	};
}

console.table([
	checkRandom(max, min),
	checkRandom(max, min),
	checkRandom(max, min),
	checkRandom(max, min),
	checkRandom(max, min),
	checkRandom(max, min),
]);
/*
┌─────────┬────┬────┬────┬────┬────┬────┬─────┐
│ (index) │ 1  │ 2  │ 3  │ 4  │ 5  │ 6  │ sum │
├─────────┼────┼────┼────┼────┼────┼────┼─────┤
│ 0       │ 13 │ 17 │ 14 │ 13 │ 19 │ 24 │ 100 │
│ 1       │ 24 │ 14 │ 13 │ 13 │ 15 │ 21 │ 100 │
│ 2       │ 15 │ 21 │ 21 │ 13 │ 12 │ 18 │ 100 │
│ 3       │ 13 │ 14 │ 18 │ 20 │ 17 │ 18 │ 100 │
│ 4       │ 16 │ 19 │ 17 │ 17 │ 17 │ 14 │ 100 │
│ 5       │ 13 │ 21 │ 23 │ 14 │ 13 │ 16 │ 100 │
└─────────┴────┴────┴────┴────┴────┴────┴─────┘ */
