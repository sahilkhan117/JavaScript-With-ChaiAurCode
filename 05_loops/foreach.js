// forEach

const coding = ["js", "ruby", "python", "java", "cpp", "html"]

// coding.forEach( function (item) {
//     < block >
// })

coding.forEach( function (item, index, arr) {
    // console.log(item, index, arr)

    // OUTPUT
    // js 0 [ 'js', 'ruby', 'python', 'java', 'cpp', 'html' ]
})


// ARROE FUNC
// coding.forEach( () => {} )
    
// API
const myCODE = [
    {
        lenguageName : "Javascript",
        Extension : "js"
    },
    {
        lenguageName : "python",
        Extension : "py"
    },
    {
        lenguageName : "C++",
        Extension : "cpp"
    },
    {
        lenguageName : "java",
        Extension : "java"
    },
]

myCODE.forEach( (i) => {
    console.log(i.lenguageName);
})