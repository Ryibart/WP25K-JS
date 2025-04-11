/* Kysy käyttäjältä viisi kertaa jotain sanaa. Jos käyttäjä painaa vain "OK" ilman syötettä (eli antaa tyhjän vastauksen), ohita se. 

Tulosta lopuksi konsoliin kaikki annetut sanat. 
 */

function collectWords() {
	let words = [];
	for (let i = 0; i < 5; i++) {
		let word = prompt("Anna sana:");
		if (word.trim() !== "") {
			words.push(word);
		}
	}
	console.log("Annetut sanat: " + words.join(", "));
}
collectWords();