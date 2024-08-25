// singleton (only one obj)
// Object.create() // cretae

// object literal

const mySym = Symbol("key1")

const jsUser = {
    name : "Sahil", // system process as "name"
    "demo name": "demo val", // take as (demo or "demo")
    // use symbol 🔣
    [mySym] : "my Key 1",
    age: 18,
    location : "Damoh",
    email : "sahil@google.com",
    isLaggedIn : false,
    lastLoginDays : ['Monday', 'Saturday']
}

// Access
// console.log(jsUser.email) // 1️⃣
// console.log(jsUser["email"]) // 2️⃣

// ⭐ access "demo" best idea
// console.log(jsUser.demo name); // ❌❌❌❌❌ not valid
// console.log(jsUser["demo name"]);

// 🔣🔣 Access Symbol in Object
// console.log(jsUser.mySym); // ⚠️⚠️ acessed but not as the symbol as the string
// console.log(jsUser[mySym]); // 👍🏻👍🏻 right approach
// console.table(jsUser);

// ****** modify 
jsUser.email = "sahil@ms.com"

// Object.freeze(jsUser) // 🔒 lock the obj 

jsUser.email = "sahil@chatgpt.com" // not apply 🧊🥶
