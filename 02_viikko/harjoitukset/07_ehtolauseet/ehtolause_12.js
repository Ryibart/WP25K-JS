/* 
Kirjoita funktio nimeltä checkFoxLover:
Ota kaksi parametria: age ja likesFoxes.
Jos ikä on 18 tai enemmän:
Tarkista, onko likesFoxes tosi.
Jos on, palauta "Olet aikuinen, joka tykkää ketuista!"
Muussa tapauksessa palauta "Et ole kettufani, mutta se on ok!"
Kutsu funktiota eri ikä- ja mieltymysyhdistelmillä. Varmista, että ohjelma toimii halutulla tavalla. 
*/


function checkFoxLover(age, likesFoxes) {
	if (age >= 18 && likesFoxes)
		return "Olet aikuinen, joka tykkää ketuista!";
	else
		return "Et ole kettufani, mutta se on ok!";
}
const result1 = checkFoxLover(20, true);
const result2 = checkFoxLover(20, false);
const result3 = checkFoxLover(16, true);
const result4 = checkFoxLover(16, false);

console.log(result1); // Olet aikuinen, joka tykkää ketuista!
console.log(result2); // Et ole kettufani, mutta se on ok!
console.log(result3); // Et ole kettufani, mutta se on ok!
console.log(result4); // Et ole kettufani, mutta se on ok!