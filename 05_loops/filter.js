const coding = ["js", "ruby", "python", "java", "cpp", "html"]

// coding.forEach( (i, idx) => (console.log(`${idx+1}. ${i}`)))
// let newar = coding.forEach( (i, idx) => (`${idx+1}. ${i}`))
// console.log(newar); // 😵‍💫😵‍💫 undefined (foreack cant return anything)


// filter 
// 🤩🤩 they return something

let mynums = [1,2,3,4,5,6,7,8,9,10]
const newNums = mynums.filter( (i) => i>4) // if true they add to return array

console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]



// ⭐⭐⭐
const books = [
    { title: 'Book 1', genre: "fiction", publish: 1981, edition: 2004 },
    { title: 'Book 2', genre: "non-fiction", publish: 1985, edition: 2004 },
    { title: 'Book 3', genre: "histry", publish: 1989, edition: 2004 },
    { title: 'Book 4', genre: "fiction", publish: 1992, edition: 2004 },
    { title: 'Book 5', genre: "science", publish: 1995, edition: 2004 },
    { title: 'Book 6', genre: "histry", publish: 1999, edition: 2008 },
    { title: 'Book 7', genre: "non-fiction", publish: 2001, edition: 2014 },
    { title: 'Book 8', genre: "fiction", publish: 2008, edition: 2020 },
    { title: 'Book 9', genre: "sciencs", publish: 2016, edition: 2022 },
]

// ❓ all books from fiction genra and publish before 1990
let newBk = books.filter( (i) => i.genre == "fiction" || i.publish > 1990)

console.log(newBk);