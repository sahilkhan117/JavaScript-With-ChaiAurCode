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
