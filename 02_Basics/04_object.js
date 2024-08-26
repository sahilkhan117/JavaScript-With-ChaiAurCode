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
