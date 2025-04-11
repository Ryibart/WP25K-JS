/* Tee funktio askToContinue, joka 
1. Kysyy käyttäjältä yhtä numeroa. 
2. Tämän jälkeen ohjelma kysyy: 'Haluatko jatkaa numeroiden antamista? (k/e)'. 
3. Jos käyttäjä vastaa 'k', ohjelma pyytää toista numeroa. 
4. Jos vastaus on 'e', ohjelma lopettaa. 
5. Lopetettuaan ohjelma laskee ja näyttää konsolissa kaikkien syötettyjen numeroiden keskiarvon.*/

// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.

function askToContinue() {
	let sum = 0;
	let count = 0;

	while (true) {
		while (true) {
			let number = parseFloat(prompt("Anna luku:"));
			if (isNaN(number)) {
				alert("Virheellinen syöte. Anna numero.");
				continue;
			}
			else {
				sum += number;
				count++;
				break;
			}
		}
		while (true) {
			let continueInput = prompt("Haluatko jatkaa numeroiden antamista? (k/e)");
			if (continueInput.toLowerCase() === 'k') {
				flag = false;
				break;
			} else if (continueInput.toLowerCase() === 'e') {
				flag = true;
				break;
			} else {
				alert("Virheellinen syöte. Anna 'k' jatkaaksesi tai 'e' lopettaaksesi.");
			}
		}
		if (flag) {
			break;
		}
	}

	if (count > 0) {
		let average = sum / count;
		console.log("Lukujen keskiarvo: " + average);
	} else {
		console.log("Ei syötettyjä lukuja.");
	}
}
askToContinue();