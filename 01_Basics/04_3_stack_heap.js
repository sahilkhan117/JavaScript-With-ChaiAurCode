// Data Storing Types

// stack : store primitive type of data
// heap : store non primitive type of data

let myName = "sahilkhan"
let myOtherName = myName
myOtherName = "MSkhan"

// console.log(myName); // sahilkhan
// console.log(myOtherName); // MSkhan
// these make a diffrent memory storage

let userOne = {
    email : "user@google.com",
    upi : "m@sbi"
}
let userTwo = userOne
userTwo.email = "S@sbi" // this will change both variable value

console.log(userOne.email);
 // S@sbi
console.log(userTwo.email);
 // S@sbi