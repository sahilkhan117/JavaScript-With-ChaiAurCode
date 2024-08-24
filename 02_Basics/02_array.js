const MCU_heros = ["Iron-Man", "Spider-Man", "Thor"]
const DCU_heros = ["SuperMan", "Batman", "Flash"]

// merge them with push 🆚 concat 🆚  🤩speread(efficient)

// ****** ❌ PUSH 
// MCU_heros.push(DCU_heros) // [ 'Iron-Man', 'Spider-Man', 'Thor', [ 'SuperMan', 'Batman', 'Flash' ] ]
// console.log(MCU_heros[3][1]); // batman

// let all_heros = MCU_heros.concat(DCU_heros) // [ 'Iron-Man', 'Spider-Man', 'Thor', 'SuperMan', 'Batman', 'Flash' ] 
