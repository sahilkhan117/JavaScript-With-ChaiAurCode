// BASIC DEFINATION (no return)
// function add(a, b){
//     console.log(a + b);
// }
// add(3,4) // 7


// ↘️➡️↗️ WITH RETURN
function add(a, b){
    // let res  = a + b
    // return res
    return a + b
}
let res = add(3,"a") // 🟰 res has 5 (⚠️ datatype problem, defalt parameter)
console.log("Result:", res);

/*
function loggedInUserMsg(username){
    // if(username == undefined){
    if(!username){ // !username => !(false if not given or empty) => ✅true(run the if block ⚠️warning mesg)
        return `please Enter a username`
    }
    return `${username} just logged in.`
}
console.log(loggedInUserMsg()) // give warn msg
*/ // ⏩ to solve this (default parameter)

function loggedInUserMsg(username = "MS"){
    return `${username} just logged in.`
}
console.log(loggedInUserMsg()) // MS


// ********** END