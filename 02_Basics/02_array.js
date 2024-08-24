const MCU_heros = ["Iron-Man", "Spider-Man", "Thor"]
const DCU_heros = ["SuperMan", "Batman", "Flash"]

// merge them with push 🆚 concat 🆚  🤩speread(efficient)

// ****** ❌ PUSH 
// MCU_heros.push(DCU_heros) // [ 'Iron-Man', 'Spider-Man', 'Thor', [ 'SuperMan', 'Batman', 'Flash' ] ]
// console.log(MCU_heros[3][1]); // batman

// let all_heros = MCU_heros.concat(DCU_heros) // [ 'Iron-Man', 'Spider-Man', 'Thor', 'SuperMan', 'Batman', 'Flash' ] 
// console.log(all_heros); // (proper format 👍🏻👍🏻)

// ⭐⭐ Spread Oprator ⭐⭐
const all_heros = [...MCU_heros, ...DCU_heros]
// console.log(all_heros); // (best practice format ⭐⭐👍🏻👍🏻)


const sam = [1,2,3,[4,5,6], 7,[4,5,[7,8]]] //Mix arrey
const real_sam = sam.flat(Infinity)
// console.log(real_sam); // [1, 2, 3, 4, 5,6, 7, 4, 5, 7,8]


// *************** Array DATATYPE ****************

console.log(Array.isArray("sahil")) // false
console.log(Array.from("sahil")); // [ 's', 'a', 'h', 'i', 'l' ]

console.log(Array.from({name : "sahil"})); // ❓ [] because cant identify to take keys or value

// make instance of arrey
let s1 =100, s2 =200,s3 =300
console.log(Array.of(s1, s2, s3)); // [ 100, 200, 300 ]

// **************** END 