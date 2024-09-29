const coding = ["js", "ruby", "python", "java", "cpp", "html"]

// coding.forEach( (i, idx) => (console.log(`${idx+1}. ${i}`)))
// let newar = coding.forEach( (i, idx) => (`${idx+1}. ${i}`))
// console.log(newar); // 😵‍💫😵‍💫 undefined (foreack cant return anything)


// filter 
// 🤩🤩 they return something

let mynums = [1,2,3,4,5,6,7,8,9,10]
const newNums = mynums.filter( (i) => i>4) // if true they add to return array

console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]