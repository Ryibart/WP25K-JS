// Tee funktio calculateAverageUntilZero, joka pyytää käyttäjää syöttämään numeroita,
// kunnes käyttäjä syöttää 0.
// Tässä vaiheessa ohjelma lopettaa toimintansa.
// Lopetettuaan ohjelman tulisi laskea ja näyttää konsolissa kaikkien syötettyjen
// numeroiden keskiarvo.

// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.

function calculateAverageUntilZero() {
	let sum = 0;
	let count = 0;

	while (true) {
		let number = parseFloat(prompt("Anna luku (0 lopettaa):"));
		if (number === 0) {
			break;
		}
		sum += number;
		count++;
	}

	if (count > 0) {
		let average = sum / count;
		console.log("Lukujen keskiarvo: " + average);
	} else {
		console.log("Ei syötettyjä lukuja.");
	}
}
calculateAverageUntilZero();