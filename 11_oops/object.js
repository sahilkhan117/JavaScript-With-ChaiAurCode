// 😁🧐 Har cheej ek object hai (see oop.md)

function multiplyBy5(num){
    return num*5
}
multiplyBy5.power = 2 // 😁 bas ban gaya

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype); // {}

function CreateUser(username, score) {
    this.username = username
    this.score = score
}

CreateUser.prototype.increment = () => {this.score++}
CreateUser.prototype.printMe = () => {console.log(`price is ${this.score}`)}
