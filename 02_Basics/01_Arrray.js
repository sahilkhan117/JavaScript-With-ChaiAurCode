// Array

// Array is a Non-Primitive (Object DataType)
// Array are resizable
// Array copy Opration create Shallow Copy ()

const myArr = [10, "sahil", true, 1, 2, 3]
// console.log(myArr[1]); // "sahil"

// myArr.push(10) // insert at last position
// myArr.push("hi")

// myArr.pop() // delete last elem

myArr.shift() // delete first position
myArr.unshift("m") // insert at first position

// console.log(myArr.includes(2)); // true / false
// console.log(myArr.indexOf(true)); // index of value

const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr); // string


// slice 🆚 splice
console.log('A ', myArr);

const myn1 = myArr.slice(1,3) // 1 - 2nd index copy
console.log(myn1);
console.log('B ', myArr);

const myn2 = myArr.splice(1,3) // 1 - 3rd index move data (deleted frem first)
console.log(myn2);
console.log('C ', myArr);


/* ⭐⭐⭐ Arrey Methods

at: ƒ at()
concat: ƒ concat()
constructor: ƒ Array()
copyWithin: ƒ copyWithin()
entries: ƒ entries()
every: ƒ every()
fill: ƒ fill()
filter: ƒ filter()
find: ƒ find()
findIndex: ƒ findIndex()
findLast: ƒ findLast()
findLastIndex: ƒ findLastIndex()
flat: ƒ flat()
flatMap: ƒ flatMap()
forEach: ƒ forEach()
includes: ƒ includes()
indexOf: ƒ indexOf()
join: ƒ join()
keys: ƒ keys()
lastIndexOf: ƒ lastIndexOf()
length: 0
map: ƒ map()
pop: ƒ pop()
push: ƒ push()
reduce: ƒ reduce()
reduceRight: ƒ reduceRight()
reverse: ƒ reverse()
shift: ƒ shift()
slice: ƒ slice()
some: ƒ some()
sort: ƒ sort()
splice: ƒ splice()
toLocaleString: ƒ toLocaleString()
toReversed: ƒ toReversed()
toSorted: ƒ toSorted()
toSpliced: ƒ toSpliced()
toString: ƒ toString()
unshift: ƒ unshift()
values: ƒ values()
with: ƒ with()
Symbol(Symbol.iterator): ƒ values()
Symbol(Symbol.unscopables): {a: rue, copyWithi: rue, entrie: rue, fil: rue, fin: rue, …}
*/

