/* 
Kirjoita funktio nimeltä checkForFox:
Ota looginen parametri hasFox.
Jos hasFox on tosi, palauta "Sinulla on lemmikkikettu!"
Muussa tapauksessa palauta "Ei havaittu kettua!"
Kutsu funktiota arvoilla true ja false ja tulosta tulos.
*/

function checkForFox(hasFox) {
	if (hasFox) {
		return "Sinulla on lemmikkikettu!";
	} else {
		return "Ei havaittu kettua!";
	}
}
const result1 = checkForFox(true);
const result2 = checkForFox(false);
console.log(result1); // Sinulla on lemmikkikettu!
console.log(result2); // Ei havaittu kettua!