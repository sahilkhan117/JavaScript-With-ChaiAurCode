// const tinuser = new Object() // singleton 1️⃣

const tinUser = {} // empty obj 

tinUser.id = "123abc"
tinUser.name = "Sah"
tinUser.isLaggedIn = false

const regularUser  = {
    emial : "some@gmail.com",
    fullname : { // ⛓️nested 
        userFullName : { // ⛓️nested 
            firstName : "sahil",
            lastName : "khan",
        }
    }
}

console.log(regularUser.fullname.userFullName.firstName); // use .fullname❓. for protection on value

// combine obj ➕
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = {obj1, obj2} // 👎🏻❌ nested not join
// const obj3 = Object.assign({}, obj1, obj2) // 👍🏻 (target, val)
const obj3 = {...obj1, ...obj2} //  BEST APPROACH 🤩🌟⭐

// API CALLING 📞📞
const users = [
    {
        id : 1,
        email : "m@g.com"
    },
    {
        id : 2,
        email : "k@g.com"
    },
    {
        id : 3,
        email : "p@g.com"
    },
]

// access
console.log(users[1].email);

// EXTRACTING (🔑keys, ➡️value, 🔣entries)
console.log(Object.keys(tinUser)); // [ 'id', 'name', 'isLaggedIn' ]