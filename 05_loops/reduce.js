// reduce
// sum = arr.reduce( (acc, i) => (new acc value), < initial acc value>) // return final acc val

let num = [1,2,3,4]
let sum = num.reduce( (acc, i) => (acc + i), 0) // sum of elem of arr
console.log(sum);
// 10

let curses = [
    { name: "Js cource", price: 2999},
    { name: "py cource", price: 999},
    { name: "Mobile Dev cource", price: 5999},
    { name: "Data Science cource", price: 12999},
]