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