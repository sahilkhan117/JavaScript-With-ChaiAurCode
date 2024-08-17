// we use "" or '' for string representation
// simply use + to concatinate string ("hello"+" world" = "hello world")

// const name = "sahil";
// const repoCount = 5;
// console.log(name + repoCount + " Value"); //🙅🏻‍♂️⚠️ Bad practice not use in Industry

// string Interpolation (just like f"{}" in python) 👍🏻
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

/*
⭐⭐ this is create a string class object usees these methods ⭐⭐
String {'hello'}
0: "h"1: "e"2: "l"3: "l"4: "o"
length: 5
[[Prototype]]: 
    all methods : anchor(), at(), big(), blink(), bold(), , etc...
    [[Prototype]]: Object
    [[PrimitiveValue]]: ""
[[PrimitiveValue]]: "hello"
*/

const gameName = new String("M_Sahil_Khan");

// console.log(gameName[10]); // access as indexed (like arrey)
// console.log(gameName.length);
// console.log(gameName.toUpperCase()); // can't change real value
// console.log(gameName.charAt(4)); // start with 0 index
// console.log(gameName.indexOf("h")); // character first index

// const newString = gameName.substring(0, 4) // "M_Sa" (start 0 end 3rd index)
// console.log(newString);

// const anotherStr = gameName.slice(-8, 10) // accept -ve indexing
// console.log(anotherStr);

// const oneStr = "    sahil    "
// console.log(oneStr);
// console.log(oneStr.trim()); // remove start and end spaces and line break

// const url = "https://sahil.com/sahil%20khan"
// console.log(url.replace("%20", '-'))

// console.log(url.includes("khan")); // true

// console.log(gameName.split('_')); // return arrey [ 'M', 'Sahil', 'Khan' ]
