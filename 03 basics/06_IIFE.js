// Immidiately Invoked Function Expression (IIFE)

// jaise hi fn llikhaturant hi execute karvana

// ❓❓❓❓ WHY ❓❓❓❓
// 1️⃣ Remove 😶‍🌫️Pullution of Global scope variable (accesable for childs🍧 )
// 2️⃣ Immideately Execute 🏃🏻‍➡️🏃🏻‍♀️‍➡️🏃🏻‍♂️‍➡️

// 💥 just like 🐍 python __main__ fn

// function chai(){
//     console.log(`DB Connected`);
// }
// chai()


// 👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻 IIFE
(function chai() { // (named IIFE)
	console.log(`DB Connected`);
})(); // (<fn defination>)(<executiion>)

// ⚠️⚠️ always use ; after execute IIFE

// 👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻 as un-named arrow fn (un-named IIFE)
( () => {
    console.log(`DB Connected TWO`);
} )();

// 👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻 as un-named arrow fn and parameter
