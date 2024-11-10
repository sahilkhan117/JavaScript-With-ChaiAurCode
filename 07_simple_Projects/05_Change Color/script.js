function RandomColor() {
	let vals = "0123456789ABCDEF";
	let res = "#";
	for (let i = 0; i < 6; i++) {
		res += vals[Math.floor(Math.random() * 16)];
	}
	return res;
}

let box = document.querySelector("#box");
let colorName = document.querySelector("#colorName");
let interval;

document.querySelector("#start").addEventListener("click", (e) => {
	if (!interval) {
		interval = setInterval(() => {
			c = RandomColor();
			box.style.background = c;
			colorName.textContent = c;
		}, 1000);
	}
});

document.querySelector("#stop").addEventListener("click", (e) => {
	clearInterval(interval);
	interval = null;
});
