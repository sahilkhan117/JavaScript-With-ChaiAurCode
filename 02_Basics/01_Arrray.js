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

/*
A  [ 'm', 'sahil', true, 1, 2, 3 ]
[ 'sahil', true ]
B  [ 'm', 'sahil', true, 1, 2, 3 ]
[ 'sahil', true, 1 ]
C  [ 'm', 2, 3 ]
*/

/* ⭐⭐⭐ Arrey Methods

at: ƒ at()
concat: ƒ concat()
constructor: ƒ Array()
copyWithin: ƒ copyWithin()
entries: ƒ entries()
every: ƒ every()
fill: ƒ fill()
filter: ƒ filter()
find: ƒ find()
findIndex: ƒ findIndex()
findLast: ƒ findLast()
findLastIndex: ƒ findLastIndex()
flat: ƒ flat()
flatMap: ƒ flatMap()
forEach: ƒ forEach()
includes: ƒ includes()
indexOf: ƒ indexOf()
join: ƒ join()
keys: ƒ keys()
lastIndexOf: ƒ lastIndexOf()
length: 0
map: ƒ map()
pop: ƒ pop()
push: ƒ push()
reduce: ƒ reduce()
reduceRight: ƒ reduceRight()
reverse: ƒ reverse()
shift: ƒ shift()
slice: ƒ slice()
some: ƒ some()
sort: ƒ sort()
splice: ƒ splice()
toLocaleString: ƒ toLocaleString()
toReversed: ƒ toReversed()
toSorted: ƒ toSorted()
toSpliced: ƒ toSpliced()
toString: ƒ toString()
unshift: ƒ unshift()
values: ƒ values()
with: ƒ with()
Symbol(Symbol.iterator): ƒ values()
Symbol(Symbol.unscopables): {a: rue, copyWithi: rue, entrie: rue, fil: rue, fin: rue, …}
*/


// ⭐🌟⭐🌟⭐ commented methods are HIGH order they accept function at parameter
console.log(`1. at() => ${myArr.at(2)} : returns element of index`);
console.log(`2. concat() => ${myArr.concat([1,2,3,4,5])} : concatenate arrey`);
console.log(`3. constructor() => ${myArr.constructor} : returns constructor of array`);
console.log(`4. copyWithin() => ${myArr.copyWithin(0, 1, 2)} : copy within`);
console.log(`5. entries() => ${myArr.entries()} : return iterator of array`);
console.log(`6. every() => ${myArr.every} : return true if every element is true`);
console.log(`7. fill() => ${myArr.fill(2)} : fill array with value`);
// console.log(`8. filter() => ${myArr.filter} : return array after filter`);
// console.log(`9. find() => ${myArr.find()} : return first element`);
// console.log(`10. findIndex() => ${myArr.findIndex()} : return index of first element`);
// console.log(`11. findLast() => ${myArr.findLast()} : return last element`);
// console.log(`12. findLastIndex() => ${myArr.findLastIndex()} : return index of last element`);
console.log(`13. flat() => ${myArr.flat()} : return array after flat`);
// console.log(`14. flatMap() => ${myArr.flatMap()} : return array after flatMap`);
// console.log(`15. forEach() => ${myArr.forEach()} : return array after forEach`);
console.log(`16. includes() => ${myArr.includes()} : return true if element is present`);
console.log(`17. indexOf() => ${myArr.indexOf()} : return index of element`);
console.log(`18. join() => ${myArr.join()} : return string after join`);
console.log(`19. keys() => ${myArr.keys()} : return iterator of keys`);
console.log(`20. lastIndexOf() => ${myArr.lastIndexOf()} : return index of last element`);
console.log(`21. length => ${myArr.length} : return length of array`);
// console.log(`22. map() => ${myArr.map()} : return array after map`);
console.log(`23. pop() => ${myArr.pop()} : return last element`);
console.log(`24. push() => ${myArr.push()} : return length of array`);
// console.log(`25. reduce() => ${myArr.reduce()} : return array after reduce`);
// console.log(`26. reduceRight() => ${myArr.reduceRight()} : return array after reduceRight`);
console.log(`27. reverse() => ${myArr.reverse()} : return array after reverse`);
console.log(`28. shift() => ${myArr.shift()} : return first element`);
console.log(`29. slice() => ${myArr.slice()} : return array after slice`);
// console.log(`30. some() => ${myArr.some()} : return true if some element is true`);
console.log(`31. sort() => ${myArr.sort()} : return array after sort`);
console.log(`32. splice() => ${myArr.splice()} : return array after splice`);
console.log(`33. toLocaleString() => ${myArr.toLocaleString()} : return array after toLocaleString`);
console.log(`34. toReversed() => ${myArr.toReversed()} : return array after toReversed`);
console.log(`35. toSorted() => ${myArr.toSorted()} : return array after toSorted`);
console.log(`36. toSpliced() => ${myArr.toSpliced()} : return array after toSpliced`);
console.log(`37. toString() => ${myArr.toString()} : return array after toString`);
console.log(`38. unshift() => ${myArr.unshift()} : return length of array`);
console.log(`39. values() => ${myArr.values()} : return iterator of values`);
console.log(`40. with() => ${myArr.with()} : return array after with`);

/*
1. at() => 3 : returns element of index
2. concat() => m,2,3,1,2,3,4,5 : concatenate arrey
3. constructor() => function Array() { [native code] } : returns constructor of array
4. copyWithin() => 2,2,3 : copy within
5. entries() => [object Array Iterator] : return iterator of array
6. every() => function every() { [native code] } : return true if every element is true
7. fill() => 2,2,2 : fill array with value
13. flat() => 2,2,2 : return array after flat
16. includes() => false : return true if element is present
17. indexOf() => -1 : return index of element
18. join() => 2,2,2 : return string after join
19. keys() => [object Array Iterator] : return iterator of keys
20. lastIndexOf() => -1 : return index of last element
21. length => 3 : return length of array
23. pop() => 2 : return last element
24. push() => 2 : return length of array
27. reverse() => 2,2 : return array after reverse
28. shift() => 2 : return first element
29. slice() => 2 : return array after slice
31. sort() => 2 : return array after sort
32. splice() =>  : return array after splice
33. toLocaleString() => 2 : return array after toLocaleString
34. toReversed() => 2 : return array after toReversed
35. toSorted() => 2 : return array after toSorted
36. toSpliced() => 2 : return array after toSpliced
37. toString() => 2 : return array after toString
38. unshift() => 1 : return length of array
39. values() => [object Array Iterator] : return iterator of values
40. with() =>  : return array after with
*/

// ************END