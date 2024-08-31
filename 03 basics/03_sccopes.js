// {} => used as scope with any if, for, func ,etc...

let a = 10 // 👍🏻 in the scope only
const b  = 20 // constant in scope only
var c = 30 //⚠️ 💥💥scope - biscope se koi matlab nahi

if (true) {
    let a = 100
    const b = 200
    var c = 300

}