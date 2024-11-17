// Jab class ya (new function 😁) me koi or function call karte hai jo uski varibles ko read ya write harta hai to use perticularly batana padhta hai ki kis scope ke variables like ⭐'This' ko use karo.

// Isi kam ke liye 'call()' Method ka use karte hai
// EXAMPLE 👇🏻👇🏻👇🏻

function setUserName(username){
    // Complex DB Call
    this.username = username
    console.log("Called");
}

function createUser(username, email, password){
    // setUserName(username) // 😵‍💫 not work (can't take the this scope)
    // setUserName.call(username) // 🧐 better but provide some more
    setUserName.call(this, username) // 🤩 fully worked

    this.email = email
    this.password = password
}

const chai = new createUser("sahil", "sahil@ms.com", "786")

console.log(chai);