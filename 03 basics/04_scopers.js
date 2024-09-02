// USE Ice - Cream 🍧🍦 example
// Bachche 👦🏻 bado 🧔🏻‍♂️ se 🍧 mang sakte hai par bade🧔🏻‍♂️ bachcho 👦🏻 se 🍦 nahi mnag sakte❌

// IN NESTED FUNC
function one() {
	const username = "sahil";

	function two() {
		const website = "YT";

		console.log(username); // ✅ access
	}
	// console.log(website); // ❌ out of scope

	two();
}
// one()


// IN NESTED IF OR FOR LOOP

if (true){
    const username = "sahil"

    if (username === "sahil") {
        const web = " YT"
        console.log(username + web); // ✅
    }
    // console.log(web); // ❌ out of scope
}