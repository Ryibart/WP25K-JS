// Tee funktio countEvenNumbers, joka pyytää käyttäjää syöttämään 20 lukua.
// Kun kaikki luvut on syötetty, ohjelman tulisi näyttää konsolissa montako
// näistä luvuista on parillisia.

// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.

function countEvenNumbers() {
	let evenCount = 0;
	for (let i = 0; i < 20; i++) {
		let number = parseInt(prompt("Anna luku:"));
		if (number % 2 === 0) {
			evenCount++;
		}
		if (i ===19) {
			console.log("Parillisia lukuja: " + evenCount);
		}
	}
}
countEvenNumbers();
