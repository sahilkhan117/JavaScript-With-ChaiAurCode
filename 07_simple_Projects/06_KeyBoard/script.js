let i = document.querySelector("#in");
let color = randomColor();

function randomColor() {
	let hex = "456789ABCDEF";
	let c = "#";
	for (let i = 0; i < 6; i++) c += hex[Math.floor(Math.random() * 12)];

	return c;
}

document.addEventListener("keydown", (e) => {
	let span = document.createElement("span");
	span.style.color = color;

	if (e.keyCode == 8) {
		// Backspace
		i.lastElementChild.remove();
	} else if (e.keyCode == 13) {
		// Enter
		span.innerHTML = "<br>";
		i.appendChild(span);
	} else if (
		e.keyCode == 16 ||
		e.keyCode == 17 ||
		e.keyCode == 18 ||
		e.keyCode == 20
	) {
		// Shift, ctrl, alt, caps Lock
	} else if (e.keyCode >= 37 && e.keyCode <= 40) {
		// F keys
	} else if (e.keyCode > 112 && e.keyCode < 124) {
		// F keys
	} else {
		// All Other Characters
		span.innerText = e.key;
		i.appendChild(span);
	}

	// console.log(e.keyCode);

	if (e.key == " " || e.keyCode == 13) color = randomColor(); // space or Enter
});
