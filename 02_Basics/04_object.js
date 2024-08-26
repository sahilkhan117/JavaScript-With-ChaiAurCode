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
console.log(Object.values(tinUser)); // [ '123abc', 'Sah', false ]
console.log(Object.entries(tinUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sah' ], [ 'isLaggedIn', false ] ]

// validating / check available property
console.log(tinUser.hasOwnProperty('isLaggedIn')); // true

/* ⭐⭐⭐ METHODS 
[[Prototype]]: Object
    constructor: ƒ Object()
    hasOwnProperty: ƒ hasOwnProperty() 
    isPrototypeOf: ƒ isPrototypeOf()   
    propertyIsEnumerable: ƒ propertyIsEnumerable() 
    toLocaleString: ƒ toLocaleString() 
    toString: ƒ toString() 
    valueOf: ƒ valueOf()   
    __defineGetter__: ƒ __defineGetter__() 
    __defineSetter__: ƒ __defineSetter__() 
    __lookupGetter__: ƒ __lookupGetter__() 
    __lookupSetter__: ƒ __lookupSetter__() 
    __proto__: (...)   
    get __proto__: ƒ __proto__()   
    set __proto__: ƒ __proto__()   
*/

console.log(`1. constructor(): ${tinUser.constructor()} : returns constructor of object`);
console.log(`2. hasOwnProperty(): ${tinUser.hasOwnProperty('isLaggedIn')} : check available property`);
console.log(`3. isPrototypeOf(): ${tinUser.isPrototypeOf(users)} : check available property`);
console.log(`4. propertyIsEnumerable(): ${tinUser.propertyIsEnumerable('isLaggedIn')} : check available property`);
console.log(`5. toLocaleString(): ${tinUser.toLocaleString()} : check available property`);
console.log(`6. toString(): ${tinUser.toString()} : check available property`);
console.log(`7. valueOf(): ${tinUser.valueOf()} : check available property`);
