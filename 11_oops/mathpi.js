const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descripter);

// getOwnPropertyDescriptor: this function returns the property descriptor of the specified property of the given object.

// 😵‍💫
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

// 🌟🌟🌟 Change the value
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);
// ❌❌❌ never Changed because `Writable: false`

const chai = {
	name: "Ginger",
	price: 250,
	isAvailable: true,

    orderChai : function() {
        console.log('Code Fat Gaay 💥');
    }
};
console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// 😵‍💫
// {
//     value: 'Ginger',
//     writable: true,
//     enumerable: true,
//     configurable: true
// }

Object.defineProperty(chai, "name", {
	writable: false,
	enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// {
//     value: 'Ginger',
//     writable: false,
//     enumerable: false,
//     configurable: true
// }

for (const [key, value] of Object.entries(chai)) {
	if (typeof value !== "function") {
        console.log(`${key} : ${value}`);
    }
	// price : 250
    // isAvailable : true
	
    // the name is not occure because it is UnEnumerable

}