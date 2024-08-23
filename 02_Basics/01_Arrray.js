// Array

// Array is a Non-Primitive (Object DataType)
// Array are resizable
// Array copy Opration create Shallow Copy ()

const myArr = [10, "sahil", true, 1, 2, 3]
// console.log(myArr[1]); // "sahil"

// myArr.push(10) // insert at last position
// myArr.push("hi")

// myArr.pop() // delete last elem

myArr.shift() // delete first position
myArr.unshift("m") // insert at first position

// console.log(myArr.includes(2)); // true / false
// console.log(myArr.indexOf(true)); // index of value

const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr); // string


// slice 🆚 splice
console.log('A ', myArr);

const myn1 = myArr.slice(1,3) // 1 - 2nd index copy
console.log(myn1);
console.log('B ', myArr);

const myn2 = myArr.splice(1,3) // 1 - 3rd index move data (deleted frem first)
console.log(myn2);
console.log('C ', myArr);
