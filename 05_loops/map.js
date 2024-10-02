let myNUM = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNUM = myNUM.map((i) => i + 10);
// console.log(newNUM); // [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// CHAINING

let p = myNUM
    .map((i) => i * i)
    .map( (i) => i+1);

